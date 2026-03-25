import 'server-only'

export type WaitlistSource = 'homepage_waitlist' | 'freebie_unlock'

type EmailConfig = {
  from: string
  to: string[]
}

type RequiredEnvVar =
  | 'RESEND_API_KEY'
  | 'CONTACT_FROM_EMAIL'
  | 'CONTACT_TO_EMAIL'
  | 'WAITLIST_FROM_EMAIL'
  | 'WAITLIST_TO_EMAIL'

type RequiredListEnvVar = 'CONTACT_TO_EMAIL' | 'WAITLIST_TO_EMAIL'

export const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const trimEnvValue = (value?: string | null) => value?.trim() ?? ''

export const trimFormValue = (value: unknown) =>
  typeof value === 'string' ? value.trim() : ''

const parseEmailList = (value?: string | null) =>
  trimEnvValue(value)
    .split(',')
    .map((email) => email.trim())
    .filter(Boolean)

export class MissingEnvVarError extends Error {
  constructor(name: RequiredEnvVar) {
    super(`${name} is not configured`)
    this.name = 'MissingEnvVarError'
  }
}

const getRequiredEnvValue = (name: RequiredEnvVar) => {
  const value = trimEnvValue(process.env[name])
  if (!value) {
    throw new MissingEnvVarError(name)
  }

  return value
}

const getRequiredEnvEmailList = (name: RequiredListEnvVar) => {
  const emails = parseEmailList(process.env[name])
  if (emails.length === 0) {
    throw new MissingEnvVarError(name)
  }

  return emails
}

export const isMissingEnvVarError = (error: unknown): error is MissingEnvVarError =>
  error instanceof MissingEnvVarError

export const getResendApiKey = () => getRequiredEnvValue('RESEND_API_KEY')

export const getContactEmailConfig = (): EmailConfig => ({
  from: getRequiredEnvValue('CONTACT_FROM_EMAIL'),
  to: getRequiredEnvEmailList('CONTACT_TO_EMAIL'),
})

export const getWaitlistEmailConfig = (): EmailConfig => ({
  from: getRequiredEnvValue('WAITLIST_FROM_EMAIL'),
  to: getRequiredEnvEmailList('WAITLIST_TO_EMAIL'),
})

export const escapeHtml = (value: string) =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')

export const isValidEmail = (value: string) => emailPattern.test(value)

export const hasHoneypotContent = (value: unknown) => trimFormValue(value).length > 0

export const normalizeWaitlistSource = (value: unknown): WaitlistSource =>
  value === 'freebie_unlock' ? 'freebie_unlock' : 'homepage_waitlist'

export const formatWaitlistSource = (value: WaitlistSource) =>
  value === 'freebie_unlock' ? 'Freebie unlock' : 'Homepage waitlist'

export const splitName = (fullName: string) => {
  const parts = fullName
    .split(/\s+/)
    .map((part) => part.trim())
    .filter(Boolean)

  if (parts.length === 0) {
    return { firstName: undefined, lastName: undefined }
  }

  return {
    firstName: parts[0],
    lastName: parts.length > 1 ? parts.slice(1).join(' ') : undefined,
  }
}
