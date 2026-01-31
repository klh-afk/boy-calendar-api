import {
  generateSlots,
  isAvailable,
  DEFAULT_CALENDAR_CONFIG
} from "boy-calendar-core"

export function getAvailableSlots(bookings: any[]) {
  const slots = generateSlots(
    DEFAULT_CALENDAR_CONFIG.openTime,
    DEFAULT_CALENDAR_CONFIG.closeTime,
    DEFAULT_CALENDAR_CONFIG.intervalMin
  )

  return slots.filter(slot =>
    isAvailable(slot, bookings)
  )
}
