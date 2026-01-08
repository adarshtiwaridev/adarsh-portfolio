import { sendMail } from "../../lib/email";
import dbConnect from "../../lib/dbConnect";
import Contact from "../../models/contact"; // Make sure this path is correct

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, subject, message, company, phone } = req.body;

  // Basic validation
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: "Required fields missing" });
  }

  try {
    // 1. Database Operations First
    await dbConnect();

    // FIXED: Changed ContactSchema to Contact to match your import
    await Contact.create({
      name,
      email,
      subject,
      message,
      company,
      phone,
      status: "new",
    });

    /* ===============================
       2. EMAIL TO YOU (OWNER)
    =============================== */
    await sendMail({
      to: process.env.SMTP_USER,
      subject: `New Portfolio Contact – ${subject}`,
      html: `
        <div style="background:#f1f5f9;padding:40px 20px;font-family:sans-serif">
          <div style="max-width:640px;margin:auto;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 10px 30px rgba(0,0,0,0.08);">
            <div style="padding:24px 28px;border-bottom:1px solid #e5e7eb">
              <h2 style="margin:0;font-size:20px;color:#0f172a">New Contact Message</h2>
              <p style="margin-top:6px;font-size:14px;color:#64748b">Submitted via portfolio contact form</p>
            </div>
            <div style="padding:28px;color:#0f172a;font-size:15px;line-height:1.6">
              <p><b>Name:</b> ${name}</p>
              <p><b>Email:</b> ${email}</p>
              ${company ? `<p><b>Company:</b> ${company}</p>` : ""}
              ${phone ? `<p><b>Phone:</b> ${phone}</p>` : ""}
              <p><b>Subject:</b> ${subject}</p>
              <div style="margin-top:20px;padding:16px;background:#f8fafc;border-left:4px solid #3b82f6;border-radius:6px;">
                ${message}
              </div>
            </div>
            <div style="padding:16px 28px;background:#f8fafc;border-top:1px solid #e5e7eb;font-size:13px;color:#64748b;text-align:center;">
              Adarsh Tiwari · Full Stack Developer
            </div>
          </div>
        </div>`,
    });

    /* ===============================
       3. AUTO-REPLY TO SENDER
    =============================== */
    await sendMail({
      to: email,
      subject: "Thanks for reaching out – Adarsh Tiwari",
    html: `
<div style="background:#f1f5f9;padding:40px 16px;font-family:Inter,Segoe UI,Arial,sans-serif">
  <div style="max-width:620px;margin:auto;background:#ffffff;border-radius:14px;box-shadow:0 12px 32px rgba(0,0,0,0.08);overflow:hidden">

    <!-- Header -->
    <div style="background:linear-gradient(135deg,#2563eb,#4f46e5);padding:22px 28px;color:#ffffff">
      <h2 style="margin:0;font-size:20px;font-weight:600;letter-spacing:0.3px">
        Message Received
      </h2>
      <p style="margin:6px 0 0;font-size:14px;opacity:0.9">
        Thank you for contacting me
      </p>
    </div>

    <!-- Body -->
    <div style="padding:30px;color:#0f172a;font-size:15px;line-height:1.75">
      <p style="margin-top:0">Hi <b>${name}</b>,</p>

      <p>
        Thank you for reaching out through my portfolio.
        I’ve successfully received your message regarding
        <b style="color:#2563eb">${subject}</b>.
      </p>

      <p>
        I’ll carefully review your message and get back to you within
        <b>24–48 hours</b>.
      </p>

      <p style="margin-top:28px">
        Best regards,<br/>
        <b style="font-size:16px">Adarsh Tiwari</b><br/>
        <span style="color:#475569">Full Stack Developer</span>
      </p>
    </div>

    <!-- Footer -->
    <div style="padding:16px;text-align:center;font-size:12.5px;color:#64748b;border-top:1px solid #e5e7eb;background:#f8fafc">
      This is an automated acknowledgment. Please do not reply to this email.
    </div>

  </div>
</div>
`

    });

    return res.status(200).json({ message: "Message sent successfully" });
    
  } catch (error) {
    console.error("Contact API error:", error);
    return res.status(500).json({ message: "Failed to process request", error: error.message });
  }
}