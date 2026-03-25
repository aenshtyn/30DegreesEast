import 'server-only'

import { createSign } from 'node:crypto'

import { type WaitlistSource } from '@/lib/server/form-utils'

const GOOGLE_TOKEN_URL = 'https://oauth2.googleapis.com/token'
const GOOGLE_SHEETS_SCOPE = 'https://www.googleapis.com/auth/spreadsheets'

type GoogleSheetsEnvVar =
  | 'GOOGLE_SHEETS_CLIENT_EMAIL'
  | 'GOOGLE_SHEETS_PRIVATE_KEY'
  | 'GOOGLE_SHEETS_SPREADSHEET_ID'
  | 'GOOGLE_SHEETS_SHEET_NAME'

type GoogleSheetsWaitlistConfig = {
  clientEmail: string
  privateKey: string
  spreadsheetId: string
  sheetName: string
}

type AppendWaitlistRowInput = {
  email: string
  name: string
  resendContactSaved: boolean
  signedUpAt: string
  source: WaitlistSource
}

const trimEnvValue = (value?: string | null) => value?.trim() ?? ''

export const hasGoogleSheetsWaitlistConfig = () =>
  (
    [
      'GOOGLE_SHEETS_CLIENT_EMAIL',
      'GOOGLE_SHEETS_PRIVATE_KEY',
      'GOOGLE_SHEETS_SPREADSHEET_ID',
      'GOOGLE_SHEETS_SHEET_NAME',
    ] as const
  ).every((name) => trimEnvValue(process.env[name]).length > 0)

const getRequiredEnvValue = (name: GoogleSheetsEnvVar) => {
  const value = trimEnvValue(process.env[name])
  if (!value) {
    throw new Error(`${name} is not configured`)
  }

  return value
}

const getGoogleSheetsConfig = (): GoogleSheetsWaitlistConfig => ({
  clientEmail: getRequiredEnvValue('GOOGLE_SHEETS_CLIENT_EMAIL'),
  privateKey: getRequiredEnvValue('GOOGLE_SHEETS_PRIVATE_KEY').replace(/\\n/g, '\n'),
  spreadsheetId: getRequiredEnvValue('GOOGLE_SHEETS_SPREADSHEET_ID'),
  sheetName: getRequiredEnvValue('GOOGLE_SHEETS_SHEET_NAME'),
})

const toBase64Url = (value: string | Buffer) =>
  Buffer.from(value)
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/g, '')

const getAccessToken = async (config: GoogleSheetsWaitlistConfig) => {
  const now = Math.floor(Date.now() / 1000)
  const jwtHeader = { alg: 'RS256', typ: 'JWT' }
  const jwtPayload = {
    iss: config.clientEmail,
    scope: GOOGLE_SHEETS_SCOPE,
    aud: GOOGLE_TOKEN_URL,
    exp: now + 3600,
    iat: now,
  }

  const unsignedToken = `${toBase64Url(JSON.stringify(jwtHeader))}.${toBase64Url(
    JSON.stringify(jwtPayload)
  )}`
  const signer = createSign('RSA-SHA256')
  signer.update(unsignedToken)
  signer.end()

  const assertion = `${unsignedToken}.${toBase64Url(signer.sign(config.privateKey))}`
  const tokenResponse = await fetch(GOOGLE_TOKEN_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion,
    }),
  })

  if (!tokenResponse.ok) {
    const errorBody = await tokenResponse.text()
    throw new Error(
      `Failed to fetch Google Sheets access token: ${errorBody || tokenResponse.statusText}`
    )
  }

  const tokenData = (await tokenResponse.json()) as { access_token?: string }

  if (!tokenData.access_token) {
    throw new Error('Google Sheets access token response did not include an access token')
  }

  return tokenData.access_token
}

export const appendWaitlistRowToGoogleSheets = async ({
  email,
  name,
  resendContactSaved,
  signedUpAt,
  source,
}: AppendWaitlistRowInput) => {
  const config = getGoogleSheetsConfig()
  const accessToken = await getAccessToken(config)
  const range = encodeURIComponent(`${config.sheetName}!A:E`)
  const appendResponse = await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${config.spreadsheetId}/values/${range}:append?valueInputOption=RAW&insertDataOption=INSERT_ROWS`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        values: [[signedUpAt, name, email, source, resendContactSaved ? 'yes' : 'no']],
      }),
    }
  )

  if (!appendResponse.ok) {
    const errorBody = await appendResponse.text()
    throw new Error(`Failed to append waitlist row to Google Sheets: ${errorBody || appendResponse.statusText}`)
  }
}
