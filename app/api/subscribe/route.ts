import { NextResponse } from "next/server";

const brevoHeaders = {
  "api-key": process.env.BREVO_API_KEY!,
  "Content-Type": "application/json",
};

export async function POST(request: Request) {
  try {
    const { firstName, email, intention, bitcoin } = await request.json();

    if (!firstName || !email || !intention) {
      return NextResponse.json(
        { error: "Name, email and intention are required" },
        { status: 400 },
      );
    }

    // 1. Send transactional email
    const templateId =
      intention === "install"
        ? parseInt(process.env.BREVO_TEMPLATE_INSTALL!)
        : parseInt(process.env.BREVO_TEMPLATE_MIGRATION!);

    const emailRes = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: brevoHeaders,
      body: JSON.stringify({
        templateId,
        to: [{ email, name: firstName }],
        params: { PRENOM: firstName },
      }),
    });

    if (!emailRes.ok) {
      const error = await emailRes.text();
      console.error("[BREVO EMAIL] error:", emailRes.status, error);
      return NextResponse.json({ success: false, error }, { status: 502 });
    }

    console.log("[BREVO EMAIL] sent to", email, "template", templateId);

    // 2. Create or update contact in main list
    const listId =
      intention === "install"
        ? parseInt(process.env.BREVO_LIST_INSTALL!)
        : parseInt(process.env.BREVO_LIST_MIGRATION!);

    try {
      const contactRes = await fetch("https://api.brevo.com/v3/contacts", {
        method: "POST",
        headers: brevoHeaders,
        body: JSON.stringify({
          email,
          attributes: { PRENOM: firstName },
          listIds: [listId],
          updateEnabled: true,
        }),
      });

      if (contactRes.ok) {
        console.log("[BREVO CONTACT] created", email, "list", listId);
      } else {
        const err = await contactRes.text();
        console.error("[BREVO CONTACT] error:", contactRes.status, err);
      }
    } catch (err) {
      console.error("[BREVO CONTACT] unexpected error:", err);
    }

    // 3. Add to bitcoin list if checked (uses dedicated endpoint to avoid overwriting main list)
    console.log("[BITCOIN DEBUG] bitcoin value:", bitcoin, typeof bitcoin);
    if (bitcoin === true || bitcoin === "true") {
      try {
        const btcListId = parseInt(process.env.BREVO_LIST_BITCOIN!);
        const btcUrl = `https://api.brevo.com/v3/contacts/lists/${btcListId}/contacts/add`;
        const btcBody = { emails: [email] };
        console.log("[BITCOIN DEBUG] calling:", btcUrl, JSON.stringify(btcBody));

        const btcRes = await fetch(btcUrl, {
          method: "POST",
          headers: brevoHeaders,
          body: JSON.stringify(btcBody),
        });

        const btcText = await btcRes.text();
        console.log("[BITCOIN API]", btcRes.status, btcText);

        if (btcRes.ok) {
          console.log("[BITCOIN LEAD]", firstName, email);
        } else {
          console.error("[BREVO LIST] bitcoin error:", btcRes.status, btcText);
        }
      } catch (err) {
        console.error("[BITCOIN ERROR]", err);
      }
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
