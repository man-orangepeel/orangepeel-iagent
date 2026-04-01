import { NextResponse } from "next/server";

// TODO: Integrate Brevo API here
// - Use "intention" field (install / migrate) to choose the correct Brevo template
// - If bitcoin is true, tag the contact in Brevo for Bitcoin-specific follow-up

export async function POST(request: Request) {
  const { firstName, email, intention, bitcoin } = await request.json();

  if (!email || !intention) {
    return NextResponse.json(
      { error: "Email and intention are required" },
      { status: 400 },
    );
  }

  console.log("[subscribe]", { firstName, email, intention, bitcoin });

  return NextResponse.json({ success: true });
}
