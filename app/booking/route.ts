import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const data = await req.json()

  // placeholder (DB จะเสียบทีหลัง)
  console.log("NEW BOOKING:", data)

  return NextResponse.json({ ok: true })
}
