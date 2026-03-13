import { Resend } from "resend"
import { siteConfig } from "@/config/site"

export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  try {
    const { name, email, phone, message } = await req.json()

    if (!name || !email || !message) {
      return Response.json({ error: "Missing required fields." }, { status: 400 })
    }

    await resend.emails.send({
      from: `Website Contact <noreply@${new URL(siteConfig.url).hostname}>`,
      to: [siteConfig.email],
      replyTo: email,
      subject: `New contact form submission from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}

Message:
${message}
      `.trim(),
    })

    return Response.json({ success: true })
  } catch (err) {
    console.error("Contact form error:", err)
    return Response.json({ error: "Failed to send message." }, { status: 500 })
  }
}
