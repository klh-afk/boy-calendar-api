import { supabase } from '../lib/supabase'

export async function createBooking(data: {
  shop_id: string
  customer_name: string
  phone: string
  start_time: string
  end_time: string
  booking_date: string
}) {
  const { error } = await supabase
    .from('bookings')
    .insert([data])

  if (error) throw error

  return true
}
