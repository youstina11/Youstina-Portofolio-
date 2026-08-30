import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const ContactSchema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(200),
  message: z.string().trim().min(5).max(5000),
});

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

export const sendContactMessage = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => data as unknown)
  .handler(async ({ data }) => {
    const parsed = ContactSchema.safeParse(data);
    if (!parsed.success) {
      return {
        ok: false as const,
        error: "Please fill in your name, a valid email, and a short message.",
      };
    }
    const payload = parsed.data;

    const apiKey = process.env["RESEND_API_KEY"];
    if (!apiKey) {
      return { ok: false as const, error: "Email service is not configured yet." };
    }

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: ["youstenasalah123@gmail.com"],
        reply_to: payload.email,
        subject: `New portfolio message from ${payload.name}`,
        html: `
          <h2>New message from your portfolio</h2>
          <p><strong>Name:</strong> ${escapeHtml(payload.name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(payload.email)}</p>
          <p><strong>Message:</strong></p>
          <p>${escapeHtml(payload.message).replace(/\n/g, "<br/>")}</p>
        `,
      }),
    });

    if (!response.ok) {
      const body = await response.text();
      console.error(`Resend request failed [${response.status}]: ${body}`);
      return {
        ok: false as const,
        error: "The email service rejected the message. Please try again later.",
      };
    }

    return { ok: true as const, error: null };
  });
