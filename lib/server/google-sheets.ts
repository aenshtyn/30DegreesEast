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

type AppendPlaybookApplicationRowInput = {
  background: string
  challenge: string
  confirmationEmailSent: boolean
  earlybird: string
  email: string
  goal: string
  internalEmailSent: boolean
  interests: string[]
  invest: string
  name: string
  sheetSavedAt: string
  source: string
  status: string
  whatsapp: string
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

const getGoogleSheetsBaseConfig = () => ({
  clientEmail: getRequiredEnvValue('GOOGLE_SHEETS_CLIENT_EMAIL'),
  privateKey: getRequiredEnvValue('GOOGLE_SHEETS_PRIVATE_KEY').replace(/\\n/g, '\n'),
  spreadsheetId: getRequiredEnvValue('GOOGLE_SHEETS_SPREADSHEET_ID'),
})

const getPlaybookSheetName = () =>
  trimEnvValue(process.env.GOOGLE_SHEETS_PLAYBOOK_SHEET_NAME) || 'Global Teacher Playbook'

const toSheetRangeName = (sheetName: string) => `'${sheetName.replaceAll("'", "''")}'`

export const hasGoogleSheetsPlaybookConfig = () =>
  (
    [
      'GOOGLE_SHEETS_CLIENT_EMAIL',
      'GOOGLE_SHEETS_PRIVATE_KEY',
      'GOOGLE_SHEETS_SPREADSHEET_ID',
    ] as const
  ).every((name) => trimEnvValue(process.env[name]).length > 0)

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

const playbookApplicationHeaders = [
  'Submitted At',
  'Name',
  'Email',
  'WhatsApp',
  'Teaching Background',
  'Current Status',
  'Learning Interests',
  'Six-Month Goal',
  'Current Challenge',
  'Investment Readiness',
  'Early-Bird Access',
  'Referral Source',
  'Internal Email Sent',
  'Confirmation Email Sent',
]

const getSpreadsheetSheetTitles = async ({
  accessToken,
  spreadsheetId,
}: {
  accessToken: string
  spreadsheetId: string
}) => {
  const metadataResponse = await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}?fields=sheets.properties.title`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  )

  if (!metadataResponse.ok) {
    const errorBody = await metadataResponse.text()
    throw new Error(`Failed to read Google Sheets metadata: ${errorBody || metadataResponse.statusText}`)
  }

  const metadata = (await metadataResponse.json()) as {
    sheets?: Array<{ properties?: { title?: string } }>
  }

  return new Set(
    metadata.sheets
      ?.map((sheet) => sheet.properties?.title)
      .filter((title): title is string => Boolean(title)) ?? []
  )
}

const ensurePlaybookSheetExists = async ({
  accessToken,
  sheetName,
  spreadsheetId,
}: {
  accessToken: string
  sheetName: string
  spreadsheetId: string
}) => {
  const sheetTitles = await getSpreadsheetSheetTitles({ accessToken, spreadsheetId })

  if (sheetTitles.has(sheetName)) {
    return
  }

  const createResponse = await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}:batchUpdate`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        requests: [
          {
            addSheet: {
              properties: {
                title: sheetName,
              },
            },
          },
        ],
      }),
    }
  )

  if (!createResponse.ok) {
    const errorBody = await createResponse.text()
    throw new Error(`Failed to create playbook Google Sheet tab: ${errorBody || createResponse.statusText}`)
  }

  const headerRange = encodeURIComponent(`${toSheetRangeName(sheetName)}!A1:N1`)
  const headerResponse = await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${headerRange}?valueInputOption=RAW`,
    {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        values: [playbookApplicationHeaders],
      }),
    }
  )

  if (!headerResponse.ok) {
    const errorBody = await headerResponse.text()
    throw new Error(`Failed to write playbook Google Sheet headers: ${errorBody || headerResponse.statusText}`)
  }
}

export const appendPlaybookApplicationRowToGoogleSheets = async ({
  background,
  challenge,
  confirmationEmailSent,
  earlybird,
  email,
  goal,
  internalEmailSent,
  interests,
  invest,
  name,
  sheetSavedAt,
  source,
  status,
  whatsapp,
}: AppendPlaybookApplicationRowInput) => {
  const config = getGoogleSheetsBaseConfig()
  const accessToken = await getAccessToken({
    ...config,
    sheetName: getPlaybookSheetName(),
  })
  const sheetName = getPlaybookSheetName()

  await ensurePlaybookSheetExists({
    accessToken,
    sheetName,
    spreadsheetId: config.spreadsheetId,
  })

  const range = encodeURIComponent(`${toSheetRangeName(sheetName)}!A:N`)
  const appendResponse = await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${config.spreadsheetId}/values/${range}:append?valueInputOption=RAW&insertDataOption=INSERT_ROWS`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        values: [
          [
            sheetSavedAt,
            name,
            email,
            whatsapp,
            background,
            status,
            interests.join(' | '),
            goal,
            challenge,
            invest,
            earlybird,
            source,
            internalEmailSent ? 'yes' : 'no',
            confirmationEmailSent ? 'yes' : 'no',
          ],
        ],
      }),
    }
  )

  if (!appendResponse.ok) {
    const errorBody = await appendResponse.text()
    throw new Error(`Failed to append playbook application row to Google Sheets: ${errorBody || appendResponse.statusText}`)
  }
}
