import 'server-only'

import { Resend } from 'resend'

import { splitName, type WaitlistSource } from '@/lib/server/form-utils'

const WAITLIST_SEGMENT_NAME = '30 Degrees East Waitlist'

type SaveWaitlistEntryInput = {
  resend: Resend
  email: string
  name: string
  signedUpAt: string
  source: WaitlistSource
}

const ensureWaitlistSegmentId = async (resend: Resend) => {
  const segmentsResponse = await resend.audiences.list()
  if (segmentsResponse.error) {
    throw new Error(`Failed to list Resend audiences: ${segmentsResponse.error.message}`)
  }

  const existingSegment = segmentsResponse.data?.data.find(
    (segment) => segment.name === WAITLIST_SEGMENT_NAME
  )
  if (existingSegment) {
    return existingSegment.id
  }

  const createResponse = await resend.audiences.create({ name: WAITLIST_SEGMENT_NAME })
  if (createResponse.error || !createResponse.data) {
    throw new Error(createResponse.error?.message || 'Failed to create waitlist audience')
  }

  return createResponse.data.id
}

const ensureContactInSegment = async (resend: Resend, contactId: string, segmentId: string) => {
  const segmentsResponse = await resend.contacts.segments.list({ contactId })
  if (segmentsResponse.error) {
    throw new Error(`Failed to list contact audiences: ${segmentsResponse.error.message}`)
  }

  const alreadyInSegment = segmentsResponse.data?.data.some((segment) => segment.id === segmentId)
  if (alreadyInSegment) {
    return
  }

  const addSegmentResponse = await resend.contacts.segments.add({ contactId, segmentId })
  if (addSegmentResponse.error) {
    throw new Error(`Failed to add contact to waitlist audience: ${addSegmentResponse.error.message}`)
  }
}

export const saveWaitlistEntry = async ({
  resend,
  email,
  name,
  signedUpAt,
  source,
}: SaveWaitlistEntryInput) => {
  const segmentId = await ensureWaitlistSegmentId(resend)
  const { firstName, lastName } = splitName(name)
  const properties = {
    waitlist_name: name,
    waitlist_source: source,
    waitlist_signed_up_at: signedUpAt,
  }

  const existingContactResponse = await resend.contacts.get({ email })

  if (existingContactResponse.error && existingContactResponse.error.name !== 'not_found') {
    throw new Error(`Failed to read existing waitlist contact: ${existingContactResponse.error.message}`)
  }

  if (existingContactResponse.data) {
    const updateResponse = await resend.contacts.update({
      email,
      firstName: firstName ?? null,
      lastName: lastName ?? null,
      properties,
    })

    if (updateResponse.error || !updateResponse.data) {
      throw new Error(updateResponse.error?.message || 'Failed to update waitlist contact')
    }

    await ensureContactInSegment(resend, updateResponse.data.id, segmentId)

    return {
      contactId: updateResponse.data.id,
      segmentId,
      isNew: false,
    }
  }

  const createResponse = await resend.contacts.create({
    email,
    firstName,
    lastName,
    properties,
    segments: [{ id: segmentId }],
  })

  if (createResponse.error || !createResponse.data) {
    throw new Error(createResponse.error?.message || 'Failed to create waitlist contact')
  }

  return {
    contactId: createResponse.data.id,
    segmentId,
    isNew: true,
  }
}
