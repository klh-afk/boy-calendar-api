import { NextResponse } from "next/server"
import { getAvailableSlots } from "@/lib/calendar"

export async function GET() {
  const bookings = [
    { start_time: "10:00", end_time: "11:00" },
    { start_time: "13:00", end_time: "14:00" }
  ]

  const slots = getAvailableSlots(bookings)
  return NextResponse.json(slots)
}
