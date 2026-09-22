import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

/**
 * Creates and configures the Nodemailer transporter.
 * Supports Gmail SMTP or any custom SMTP provider.
 */
function getTransporter() {
  const host = process.env.SMTP_HOST || 'smtp.gmail.com';
  const port = parseInt(process.env.SMTP_PORT || '465', 10);
  const secure = process.env.SMTP_SECURE !== 'false'; // true for 465, false for other ports
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!user || !pass) {
    return null;
  }

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: {
      user,
      pass
    }
  });
}

/**
 * Generates branded HTML template for email notifications
 */
function buildHtmlEmail({ title, badgeColor = '#10B981', details, additionalHtml = '' }) {
  const tableRows = details
    .filter(item => item.value !== undefined && item.value !== null && item.value !== '')
    .map(
      item => `
      <tr>
        <td style="padding: 10px 14px; font-size: 12px; font-weight: bold; color: #64748B; text-transform: uppercase; letter-spacing: 0.5px; width: 30%; border-bottom: 1px solid #F1F5F9;">
          ${item.label}
        </td>
        <td style="padding: 10px 14px; font-size: 14px; color: #0F172A; font-weight: 500; border-bottom: 1px solid #F1F5F9; word-break: break-word;">
          ${item.isLink ? `<a href="${item.value}" style="color: #2563EB; text-decoration: underline;" target="_blank">${item.value}</a>` : item.value}
        </td>
      </tr>
    `
    )
    .join('');

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${title}</title>
    </head>
    <body style="margin: 0; padding: 0; background-color: #F8FAFC; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
      <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #F8FAFC; padding: 30px 15px;">
        <tr>
          <td align="center">
            <table width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 600px; background-color: #FFFFFF; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); border: 1px solid #E2E8F0;">
              
              <!-- Header -->
              <tr>
                <td style="background-color: #0F172A; padding: 24px 30px; text-align: left; border-bottom: 4px solid ${badgeColor};">
                  <div style="font-size: 11px; font-weight: 800; color: #F59E0B; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 4px;">
                    Katonda Talemwa Ministries
                  </div>
                  <h1 style="margin: 0; color: #FFFFFF; font-size: 20px; font-weight: 800; letter-spacing: -0.5px;">
                    ${title}
                  </h1>
                </td>
              </tr>

              <!-- Content Body -->
              <tr>
                <td style="padding: 24px 30px;">
                  <p style="margin: 0 0 16px 0; font-size: 14px; color: #475569; line-height: 1.5;">
                    A new submission was received on the website. Here are the organized details:
                  </p>

                  <table width="100%" border="0" cellspacing="0" cellpadding="0" style="border-collapse: collapse; background-color: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 6px; overflow: hidden;">
                    ${tableRows}
                  </table>

                  ${additionalHtml}
                </td>
              </tr>

              <!-- Footer -->
              <tr>
                <td style="background-color: #F1F5F9; padding: 16px 30px; text-align: center; border-top: 1px solid #E2E8F0;">
                  <p style="margin: 0; font-size: 12px; color: #64748B;">
                    Sent automatically by the Katonda Talemwa Ministries Notification System.
                  </p>
                  <p style="margin: 4px 0 0 0; font-size: 11px; color: #94A3B8;">
                    Received at: ${new Date().toUTCString()}
                  </p>
                </td>
              </tr>

            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;
}

/**
 * Dispatches notification emails to the website owners.
 * 
 * @param {Object} options
 * @param {'contact' | 'volunteer' | 'sponsorship' | 'donation' | 'career' | 'exchange' | 'prayer' | 'newsletter'} options.type
 * @param {Object} options.data
 */
export async function sendNotification({ type, data }) {
  const recipient = process.env.NOTIFICATION_EMAIL || 'kategereian@gmail.com';
  const transporter = getTransporter();

  let subject = '';
  let title = '';
  let badgeColor = '#10B981'; // Green
  let details = [];
  let additionalHtml = '';

  switch (type) {
    case 'contact':
      subject = `[Contact Form] ${data.subject} - from ${data.name}`;
      title = 'New Contact Message';
      badgeColor = '#3B82F6'; // Blue
      details = [
        { label: 'Sender Name', value: data.name },
        { label: 'Sender Email', value: data.email },
        { label: 'Subject', value: data.subject },
        { label: 'Message', value: data.message }
      ];
      break;

    case 'volunteer':
      subject = `[Volunteer Application] ${data.name} - ${data.role}`;
      title = 'New Volunteer Application';
      badgeColor = '#10B981'; // Green
      details = [
        { label: 'Volunteer Name', value: data.name },
        { label: 'Email Address', value: data.email },
        { label: 'Country', value: data.country },
        { label: 'Preferred Role', value: data.role },
        { label: 'Available Duration', value: data.duration },
        { label: 'Personal Message', value: data.message || 'None provided' }
      ];
      break;

    case 'sponsorship':
      subject = `[Child Sponsorship Pledge] ${data.sponsorName} for ${data.childName}`;
      title = 'New Child Sponsorship Pledge';
      badgeColor = '#F59E0B'; // Amber
      details = [
        { label: 'Child Name', value: data.childName },
        { label: 'Child ID', value: data.childId || 'N/A' },
        { label: 'Sponsor Name', value: data.sponsorName },
        { label: 'Sponsor Email', value: data.sponsorEmail },
        { label: 'Pledge Amount', value: `$${data.amount}/month` },
        { label: 'Status', value: 'Pledged (Redirected to PayPal)' }
      ];
      break;

    case 'donation':
      subject = `[Donation Pledge] $${data.amount} (${data.frequency}) - from ${data.donorName || 'Anonymous'}`;
      title = 'New Donation Pledge';
      badgeColor = '#10B981'; // Green
      details = [
        { label: 'Donor Name', value: data.donorName || 'Anonymous' },
        { label: 'Donor Email', value: data.donorEmail || 'Not provided' },
        { label: 'Amount', value: `$${data.amount}` },
        { label: 'Frequency', value: data.frequency },
        { label: 'Designation', value: data.designation }
      ];
      break;

    case 'career':
      subject = `[Job Application] ${data.name} - ${data.jobTitle}`;
      title = 'New Career / Job Application';
      badgeColor = '#8B5CF6'; // Purple
      details = [
        { label: 'Applicant Name', value: data.name },
        { label: 'Email Address', value: data.email },
        { label: 'Position Applied', value: data.jobTitle },
        { label: 'CV / Resume Link', value: data.cvUrl, isLink: true },
        { label: 'Cover Letter / Bio', value: data.coverLetter || 'None provided' }
      ];
      break;

    case 'exchange':
      subject = `[Exchange Inquiry] ${data.name} - ${data.groupType}`;
      title = 'New Mission / Exchange Inquiry';
      badgeColor = '#06B6D4'; // Cyan
      details = [
        { label: 'Contact Person', value: data.name },
        { label: 'Email Address', value: data.email },
        { label: 'Phone / WhatsApp', value: data.phone },
        { label: 'Group Type', value: data.groupType },
        { label: 'Team Size', value: data.teamSize || 'Not specified' },
        { label: 'Preferred Dates', value: data.preferredDate || 'Flexible' },
        { label: 'Notes / Questions', value: data.message || 'None provided' }
      ];
      break;

    case 'prayer':
      subject = `[Prayer Request] from ${data.name}`;
      title = 'New Prayer Request';
      badgeColor = '#EC4899'; // Pink
      details = [
        { label: 'Requester Name', value: data.name },
        { label: 'Email Address', value: data.email },
        { label: 'Prayer Need', value: data.request }
      ];
      break;

    case 'newsletter':
      subject = `[Newsletter Subscriber] ${data.email}`;
      title = 'New Newsletter Subscription';
      badgeColor = '#F59E0B'; // Amber
      details = [
        { label: 'Subscriber Email', value: data.email },
        { label: 'Status', value: 'Active' }
      ];
      break;

    default:
      subject = `[Katonda Talemwa] New Submission: ${type}`;
      title = `New Submission (${type})`;
      details = Object.entries(data).map(([k, v]) => ({ label: k, value: String(v) }));
  }

  const html = buildHtmlEmail({ title, badgeColor, details, additionalHtml });

  // If SMTP is not yet configured with user/pass in .env, log a notice and simulate delivery
  if (!transporter) {
    console.log(`\n📨 [Mailer Simulation] Notice: SMTP_USER and SMTP_PASS are not yet set in server/.env`);
    console.log(`   To: ${recipient}`);
    console.log(`   Subject: ${subject}`);
    console.log(`   Status: Logged successfully (once you input your Gmail app password in server/.env, real emails will be delivered automatically!)\n`);
    return { success: true, simulated: true };
  }

  // Real SMTP sending
  try {
    const sender = process.env.SMTP_USER;
    const info = await transporter.sendMail({
      from: `"Katonda Talemwa Ministries" <${sender}>`,
      to: recipient,
      subject,
      html
    });

    console.log(`✉️ Notification email sent to ${recipient} (Message ID: ${info.messageId})`);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error(`⚠️ Failed to send notification email to ${recipient}:`, error.message);
    // Don't throw error to avoid failing caller route
    return { success: false, error: error.message };
  }
}
