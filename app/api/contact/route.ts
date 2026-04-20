import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  const { name, email, phone, company, message, budget, services } = await req.json()

  try {
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'contact@lapassedigitale.com',
      subject: `Nouvelle demande de devis — ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; border: 1px solid #eee; border-radius: 8px;">
          <h2 style="color: #040037; margin-bottom: 24px;">Nouvelle demande de devis</h2>

          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #666; width: 140px;">Nom</td><td style="padding: 8px 0; font-weight: 600;">${name}</td></tr>
            ${company ? `<tr><td style="padding: 8px 0; color: #666;">Entreprise</td><td style="padding: 8px 0; font-weight: 600;">${company}</td></tr>` : ''}
            <tr><td style="padding: 8px 0; color: #666;">Email</td><td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #E21E51;">${email}</a></td></tr>
            ${phone ? `<tr><td style="padding: 8px 0; color: #666;">Téléphone</td><td style="padding: 8px 0;"><a href="tel:${phone}" style="color: #E21E51;">${phone}</a></td></tr>` : ''}
            ${services?.length ? `<tr><td style="padding: 8px 0; color: #666;">Services</td><td style="padding: 8px 0;">${services.join(', ')}</td></tr>` : ''}
            ${budget ? `<tr><td style="padding: 8px 0; color: #666;">Budget</td><td style="padding: 8px 0;">${budget}</td></tr>` : ''}
          </table>

          <div style="margin-top: 24px; padding: 20px; background: #f5f4fa; border-radius: 6px;">
            <p style="color: #666; margin-bottom: 8px; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Message</p>
            <p style="color: #040037; line-height: 1.7; margin: 0;">${message.replace(/\n/g, '<br/>')}</p>
          </div>

          <div style="margin-top: 32px; padding-top: 24px; border-top: 1px solid #eee; font-size: 12px; color: #999;">
            Envoyé depuis le formulaire de contact de lapassedigitale.com
          </div>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Resend error:', error)
    return NextResponse.json({ error: 'Erreur envoi email' }, { status: 500 })
  }
}
