import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { validateContactPayload } from "../../../lib/contactValidation";

const RECIPIENT_EMAIL = "brusok.khm@gmail.com";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const values = await validateContactPayload(body);

    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    if (!smtpUser || !smtpPass) {
      console.error("SMTP credentials are not configured");
      return NextResponse.json(
        { ok: false, message: "Сервер пошти не налаштований. Зверніться до адміністратора." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const recipient = process.env.CONTACT_EMAIL || RECIPIENT_EMAIL;
    const { name, email, tel, userText } = values;

    await transporter.sendMail({
      from: process.env.SMTP_FROM || `"Brusok сайт" <${smtpUser}>`,
      to: recipient,
      replyTo: email,
      subject: `Нове повідомлення з сайту — ${name}`,
      text: [
        `Ім'я: ${name}`,
        `Email: ${email}`,
        `Телефон: ${tel}`,
        "",
        "Повідомлення:",
        userText || "(не вказано)",
      ].join("\n"),
      html: `
        <h2>Нове повідомлення з сайту Brusok</h2>
        <p><strong>Ім'я:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
        <p><strong>Телефон:</strong> ${escapeHtml(tel)}</p>
        <p><strong>Повідомлення:</strong></p>
        <p>${escapeHtml(userText || "(не вказано)").replace(/\n/g, "<br>")}</p>
      `,
    });

    return NextResponse.json({ ok: true, message: "Повідомлення надіслано" });
  } catch (error) {
    if (error instanceof Error && error.name === "ValidationError") {
      return NextResponse.json(
        { ok: false, message: "Перевірте правильність заповнення форми" },
        { status: 400 }
      );
    }

    console.error("Contact form error:", error);
    return NextResponse.json(
      { ok: false, message: "Не вдалося надіслати повідомлення. Спробуйте пізніше." },
      { status: 500 }
    );
  }
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
