import { Resend } from 'resend';
import { env } from '../config/env.js';

let resend: Resend | null = null;

// Lazy load Resend client to avoid crashing in environments without an API key
const getResendClient = (): Resend => {
  if (!resend) {
    if (!env.RESEND_API_KEY) {
      throw new Error('RESEND_API_KEY is not defined in environment variables');
    }
    resend = new Resend(env.RESEND_API_KEY);
  }
  return resend;
};

export const sendWelcomeEmail = async (email: string): Promise<boolean> => {
  try {
    const client = getResendClient();
    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Welcome to Dinasari 🌾</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f8faf9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased;">
  <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #f8faf9; padding: 40px 0;">
    <tr>
      <td align="center">
        <table border="0" cellpadding="0" cellspacing="0" width="600" style="background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 12px rgba(10, 42, 22, 0.05); border: 1px solid #e2e8f0;">
          <!-- Header Banner -->
          <tr>
            <td style="background-color: #0a2a16; padding: 40px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 800; letter-spacing: -0.5px;">Dinasari</h1>
              <p style="color: #1f8a3d; margin: 5px 0 0; font-size: 14px; font-weight: 600; letter-spacing: 1px; text-transform: uppercase;">Empowering Rural India</p>
            </td>
          </tr>
          <!-- Body Content -->
          <tr>
            <td style="padding: 40px; color: #1e293b; line-height: 1.8; font-size: 16px;">
              <h2 style="color: #0a2a16; margin-top: 0; margin-bottom: 20px; font-size: 22px; font-weight: 700;">Welcome to Dinasari 🌾</h2>
              <p style="margin-bottom: 20px;">Thank you for joining Dinasari.</p>
              <p style="margin-bottom: 20px;">We're building India's trusted platform connecting farmers, agricultural workers, and opportunities.</p>
              <p style="margin-bottom: 30px;">You'll be among the first to receive product updates, launch announcements, and early access invitations.</p>
              
              <!-- CTA Button -->
              <table border="0" cellpadding="0" cellspacing="0" style="margin-bottom: 30px;">
                <tr>
                  <td align="center" bgcolor="#1f8a3d" style="border-radius: 8px;">
                    <a href="https://dinasari.co.in" target="_blank" style="display: inline-block; padding: 14px 28px; font-size: 16px; color: #ffffff; text-decoration: none; font-weight: 600;">Visit Our Platform</a>
                  </td>
                </tr>
              </table>
              
              <hr style="border: 0; border-top: 1px solid #e2e8f0; margin-bottom: 25px;" />
              
              <p style="margin: 0; font-weight: 600; color: #0a2a16;">Team Dinasari</p>
              <p style="margin: 5px 0 0; font-size: 14px; color: #64748b;"><a href="https://dinasari.co.in" style="color: #1f8a3d; text-decoration: none;">dinasari.co.in</a></p>
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="background-color: #f1f5f9; padding: 25px 40px; text-align: center; color: #64748b; font-size: 12px; line-height: 1.5;">
              <p style="margin: 0 0 10px;">© 2026 Dinasari Agritech Pvt Ltd. All rights reserved.</p>
              <p style="margin: 0;">3-32 sivalayam street Tarlupadu Markapur district AP - 523332</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `;

    // Resend requires verified domain for sending to custom addresses.
    // In development/sandbox testing, it allows sending to the account owner email using onboarding@resend.dev
    const fromEmail = env.NODE_ENV === 'production'
      ? 'Dinasari <updates@updates.dinasari.co.in>'
      : 'Dinasari <onboarding@resend.dev>';

    const { data, error } = await client.emails.send({
      from: fromEmail,
      to: [email],
      subject: 'Welcome to Dinasari 🌾',
      html: htmlContent,
    });

    if (error) {
      console.error('[Email Service] Resend error:', error);
      return false;
    }

    console.log('[Email Service] Welcome email successfully sent:', data);
    return true;
  } catch (err) {
    console.error('[Email Service] Failed to send welcome email:', err);
    return false;
  }
};
