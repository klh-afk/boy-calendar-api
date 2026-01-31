import { NextResponse } from 'next/server'
import { createBooking } from '@/engine/booking'

export async function POST(req: Request) {
  const body = await req.json()

  await createBooking(body)

  return NextResponse.json({ success: true })
}
