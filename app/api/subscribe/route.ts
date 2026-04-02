import { NextResponse } from "next/server";

const brevoHeaders = {
  "api-key": process.env.BREVO_API_KEY!,
  "Content-Type": "application/json",
};

export async function POST(request: Request) {
  try {
    const { firstName, email, intention, bitcoin } = await request.json();

    if (!email || !intention) {
      return NextResponse.json(
        { error: "Email and intention are required" },
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
        params: { FIRSTNAME: firstName },
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
          attributes: { FIRSTNAME: firstName },
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

    // 3. Add to bitcoin list if checked
    if (bitcoin) {
      try {
        const btcRes = await fetch("https://api.brevo.com/v3/contacts", {
          method: "POST",
          headers: brevoHeaders,
          body: JSON.stringify({
            email,
            attributes: { FIRSTNAME: firstName },
            listIds: [parseInt(process.env.BREVO_LIST_BITCOIN!)],
            updateEnabled: true,
          }),
        });

        if (btcRes.ok) {
          console.log("[BITCOIN LEAD]", firstName, email);
        } else {
          const err = await btcRes.text();
          console.error("[BREVO LIST] bitcoin error:", btcRes.status, err);
        }
      } catch (err) {
        console.error("[BREVO LIST] bitcoin unexpected error:", err);
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
