import { NextResponse } from "next/server";

// TODO: Integrate Brevo API here
// - Tech / Non-tech profiles → send runbook .md via Brevo transactional email + enroll in bootcamp sequence
// - Bitcoin company profile → no email needed (redirect handled client-side)

export async function POST(request: Request) {
  const { firstName, email, profile } = await request.json();

  if (!email || !profile) {
    return NextResponse.json(
      { error: "Email and profile are required" },
      { status: 400 },
    );
  }

  console.log("[subscribe]", { firstName, email, profile });

  return NextResponse.json({ success: true });
}
