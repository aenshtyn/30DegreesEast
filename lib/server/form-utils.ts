import 'server-only'

export type WaitlistSource = 'homepage_waitlist' | 'freebie_unlock'

type EmailConfig = {
  from: string
  to: string[]
}

const CONTACT_FALLBACK_FROM = 'hello@30degreeseast.com'
const CONTACT_FALLBACK_TO = 'hello@30degreeseast.com'
const WAITLIST_FALLBACK_FROM = 'waitlist@30degreeseast.com'
const WAITLIST_FALLBACK_TO = 'waitlist@30degreeseast.com'

export const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const trimEnvValue = (value?: string | null) => value?.trim() ?? ''

export const trimFormValue = (value: unknown) =>
  typeof value === 'string' ? value.trim() : ''

const parseEmailList = (value?: string | null) =>
  trimEnvValue(value)
    .split(',')
    .map((email) => email.trim())
    .filter(Boolean)

const resolveFromAddress = (values: Array<string | undefined>, fallback: string) => {
  for (const value of values) {
    const trimmed = trimEnvValue(value)
    if (trimmed) {
      return trimmed.split(',')[0].trim()
    }
  }

  return fallback
}

const resolveToAddresses = (values: Array<string | undefined>, fallback: string) => {
  for (const value of values) {
    const emails = parseEmailList(value)
    if (emails.length > 0) {
      return emails
    }
  }

  return [fallback]
}

export const getContactEmailConfig = (): EmailConfig => ({
  from: resolveFromAddress(
    [
      process.env.CONTACT_FROM_EMAIL,
      process.env.EMAIL_FROM,
      process.env.RESEND_FROM_EMAIL,
    ],
    CONTACT_FALLBACK_FROM
  ),
  to: resolveToAddresses(
    [process.env.CONTACT_TO_EMAIL, process.env.RESEND_TO_EMAIL],
    CONTACT_FALLBACK_TO
  ),
})

export const getWaitlistEmailConfig = (): EmailConfig => ({
  from: resolveFromAddress(
    [
      process.env.WAITLIST_FROM_EMAIL,
      process.env.EMAIL_FROM,
      process.env.RESEND_FROM_EMAIL,
    ],
    WAITLIST_FALLBACK_FROM
  ),
  to: resolveToAddresses(
    [
      process.env.WAITLIST_TO_EMAIL,
      process.env.RESEND_WAITLIST_TO_EMAIL,
      process.env.RESEND_TO_EMAIL,
    ],
    WAITLIST_FALLBACK_TO
  ),
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
