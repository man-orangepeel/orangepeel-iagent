import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { firstName, email, intention, bitcoin } = await request.json();

    if (!email || !intention) {
      return NextResponse.json(
        { error: "Email and intention are required" },
        { status: 400 },
      );
    }

    const templateId =
      intention === "install"
        ? parseInt(process.env.BREVO_TEMPLATE_INSTALL!)
        : parseInt(process.env.BREVO_TEMPLATE_MIGRATION!);

    const brevoRes = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "api-key": process.env.BREVO_API_KEY!,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        templateId,
        to: [{ email, name: firstName }],
        params: { FIRSTNAME: firstName },
      }),
    });

    if (bitcoin) {
      console.log("[BITCOIN LEAD]", firstName, email);
    }

    if (!brevoRes.ok) {
      const error = await brevoRes.text();
      console.error("[subscribe] Brevo error:", brevoRes.status, error);
      return NextResponse.json({ success: false, error }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[subscribe] Unexpected error:", err);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 },
    );
  }
}
