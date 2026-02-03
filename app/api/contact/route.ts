// app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";

const MONKEYSMAIL_API_KEY = process.env.MONKEYSMAIL_API_KEY;

export async function POST(req: NextRequest) {
    if (!MONKEYSMAIL_API_KEY) {
        console.error("Missing MONKEYSMAIL_API_KEY env var");
        return NextResponse.json(
            { error: "Email service not configured" },
            { status: 500 }
        );
    }

    let body: any;
    try {
        body = await req.json();
    } catch {
        return NextResponse.json(
            { error: "Invalid JSON body" },
            { status: 400 }
        );
    }

    const {
        name,
        email,
        company,
        projectType,
        budget,
        message,
    }: {
        name?: string;
        email?: string;
        company?: string;
        projectType?: string;
        budget?: string;
        message?: string;
    } = body || {};

    if (!name || !email || !message) {
        return NextResponse.json(
            { error: "Name, email and message are required." },
            { status: 400 }
        );
    }

    const subject = `New ColibriCode inquiry from ${name}`;

    const text = [
        `New message from the ColibriCode website`,
        "",
        `Name: ${name}`,
        `Email: ${email}`,
        `Company: ${company || "—"}`,
        `Project type: ${projectType || "—"}`,
        `Budget: ${budget || "—"}`,
        "",
        "Message:",
        message,
    ].join("\n");

    const html = `
    <h2>New message from the ColibriCode website</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Company:</strong> ${company || "—"}</p>
    <p><strong>Project type:</strong> ${projectType || "—"}</p>
    <p><strong>Budget:</strong> ${budget || "—"}</p>
    <hr />
    <p><strong>Message:</strong></p>
    <p>${(message || "").replace(/\n/g, "<br />")}</p>
  `;

    // Payload exactly in MonkeysMail format
    const payload = {
        from: { email: "no-reply@colibricode.com", name: "ColibriCode Website" },
        to: ["jorge@colibricode.com"],
        subject,
        text,
        html,
        reply_to: email, // so you can reply directly from your inbox
        headers: {
            "X-Campaign": "colibricode-contact",
        },
        tags: ["website-contact", "colibricode"],
        metadata: {
            source: "colibricode.com/contact",
            projectType: projectType || undefined,
            budget: budget || undefined,
        },
    };

    try {
        // Using mode=sync so you get immediate feedback in the UI
        const res = await fetch("https://smtp.monkeysmail.com/messages/send", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-API-Key": MONKEYSMAIL_API_KEY,
            },
            body: JSON.stringify(payload),
        });

        const data = await res.json().catch(() => null);

        if (!res.ok) {
            console.error("MonkeysMail error:", res.status, data);
            return NextResponse.json(
                { error: data?.message || "Failed to send email" },
                { status: res.status || 502 }
            );
        }

        return NextResponse.json({ ok: true, status: data?.status ?? "sent" });
    } catch (err) {
        console.error("MonkeysMail request failed:", err);
        return NextResponse.json(
            { error: "Email service unavailable" },
            { status: 502 }
        );
    }
}
