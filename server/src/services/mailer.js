import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

/**
 * Creates and configures the Nodemailer transporter.
 * Supports Gmail SMTP or any custom SMTP provider.
 */
function getTransporter() {
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!user || !pass) {
    return null;
  }

  const host = process.env.SMTP_HOST || 'smtp.gmail.com';

  // If using Gmail, nodemailer's built-in 'service: gmail' handles SSL/TLS ports (587/465) automatically
  if (host.includes('gmail')) {
    return nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user,
        pass
      },
      connectionTimeout: 10000,
      greetingTimeout: 10000,
      socketTimeout: 15000
    });
  }

  const port = parseInt(process.env.SMTP_PORT || '587', 10);
  const secure = process.env.SMTP_SECURE === 'true' || port === 465;

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: {
      user,
      pass
    },
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 15000
  });
}

/**
 * Returns formatted Uganda local time (EAT UTC+3)
 */
function getFormattedTimestamp() {
  try {
    const now = new Date();
    return now.toLocaleString('en-US', {
      timeZone: 'Africa/Kampala',
      dateStyle: 'medium',
      timeStyle: 'short'
    }) + ' EAT';
  } catch {
    return new Date().toUTCString();
  }
}

/**
 * Generates an elegant, light-mode, human-crafted HTML email template
 * using Katonda Talemwa Ministries website colors:
 * - Primary Trust Blue: #006097
 * - Secondary Terracotta: #A55212
 * - Action Yellow: #FFD943
 * - Vibrant Green: #008C15
 * - Surface Linen/Cream: #FAF8F5
 * - Pure White: #FFFFFF
 * - Deep Text: #1C1B1B
 * - Muted Text: #4A4A4A
 */
function buildHtmlEmail({
  categoryBadge,
  badgeBg = '#E0F2FE',
  badgeColor = '#006097',
  badgeBorder = '#BAE6FD',
  title,
  subtitle,
  highlightBox,
  details = [],
  quoteBox,
  ctaButton
}) {
  const timestamp = getFormattedTimestamp();

  // Highlight Box (Stat Card for Financial / Big Action Items)
  const highlightHtml = highlightBox
    ? `
      <div class="light-stat" style="background-color: #FAF8F5; background-image: linear-gradient(#FAF8F5, #FAF8F5); border: 1px solid #EAE6E3; border-radius: 12px; padding: 22px 24px; margin: 20px 0; text-align: center;">
        <div style="font-size: 11px; font-weight: 700; color: #4A4A4A; text-transform: uppercase; letter-spacing: 1.2px; margin-bottom: 6px;">
          ${highlightBox.label}
        </div>
        <div style="font-size: 32px; font-weight: 800; color: ${highlightBox.valueColor || '#006097'}; letter-spacing: -0.5px; line-height: 1.15; margin-bottom: 8px;">
          ${highlightBox.value}
        </div>
        ${highlightBox.pill ? `
          <div style="display: inline-block; background-color: ${highlightBox.pillBg || '#FFD943'}; color: ${highlightBox.pillColor || '#1C1B1B'}; font-size: 12px; font-weight: 800; padding: 4px 14px; border-radius: 999px;">
            ${highlightBox.pill}
          </div>
        ` : ''}
      </div>
    `
    : '';

  // Clean Details List (Spacious key-value rows)
  const detailsHtml = details
    .filter(item => item.value !== undefined && item.value !== null && item.value !== '')
    .map(
      (item, idx, arr) => `
      <tr>
        <td style="padding: 11px 0; font-size: 13px; font-weight: 600; color: #7D7571; width: 34%; vertical-align: top; ${idx < arr.length - 1 ? 'border-bottom: 1px solid #F4F0ED;' : ''}">
          ${item.label}
        </td>
        <td style="padding: 11px 0 11px 16px; font-size: 14px; color: #1C1B1B; font-weight: 700; vertical-align: top; word-break: break-word; ${idx < arr.length - 1 ? 'border-bottom: 1px solid #F4F0ED;' : ''}">
          ${item.isLink ? `<a href="${item.value}" style="color: #006097; text-decoration: underline;" target="_blank">${item.value}</a>` : item.value}
        </td>
      </tr>
    `
    )
    .join('');

  // Quote / Message Box (for prayers, contact messages, cover letters)
  const quoteHtml = quoteBox && quoteBox.text
    ? `
      <div style="margin: 22px 0 16px; background-color: #FAF8F5; background-image: linear-gradient(#FAF8F5, #FAF8F5); border-left: 3px solid ${quoteBox.accentColor || '#006097'}; border-radius: 0 10px 10px 0; padding: 16px 20px;">
        <div style="font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px; color: #7D7571; margin-bottom: 8px;">
          ${quoteBox.title || 'Message'}
        </div>
        <div style="font-size: 14px; line-height: 1.6; color: #1C1B1B; font-style: italic; white-space: pre-wrap;">
          &ldquo;${quoteBox.text}&rdquo;
        </div>
      </div>
    `
    : '';

  // CTA Action Button (Primary Website Trust Blue)
  const ctaHtml = ctaButton
    ? `
      <div style="text-align: center; margin: 28px 0 10px;">
        <a href="${ctaButton.href}" style="display: inline-block; background-color: #006097; background-image: linear-gradient(#006097, #006097); color: #FFFFFF !important; font-size: 14px; font-weight: 700; text-decoration: none; padding: 13px 30px; border-radius: 8px; letter-spacing: 0.3px; box-shadow: 0 2px 6px rgba(0, 96, 151, 0.25);">
          ${ctaButton.label} &rarr;
        </a>
      </div>
    `
    : '';

  return `
    <!DOCTYPE html>
    <html lang="en" xmlns="http://www.w3.org/1999/xhtml">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta name="color-scheme" content="light">
      <meta name="supported-color-schemes" content="light">
      <title>${title}</title>
      <style>
        :root {
          color-scheme: light !important;
          supported-color-schemes: light !important;
        }
        body, table, td, div, p, a, span {
          -webkit-font-smoothing: antialiased;
        }
        /* Anti-dark-mode locks for modern email clients */
        @media (prefers-color-scheme: dark) {
          .email-bg {
            background-color: #FAF8F5 !important;
            background-image: linear-gradient(#FAF8F5, #FAF8F5) !important;
          }
          .email-card {
            background-color: #FFFFFF !important;
            background-image: linear-gradient(#FFFFFF, #FFFFFF) !important;
          }
          .email-title {
            color: #1C1B1B !important;
          }
          .email-sub {
            color: #4A4A4A !important;
          }
          .email-btn {
            background-color: #006097 !important;
            background-image: linear-gradient(#006097, #006097) !important;
            color: #FFFFFF !important;
          }
        }
      </style>
    </head>
    <body class="email-bg" style="margin: 0; padding: 0; background-color: #FAF8F5; background-image: linear-gradient(#FAF8F5, #FAF8F5); font-family: 'Raleway', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
      
      <!-- Outer Background Table -->
      <table class="email-bg" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #FAF8F5; background-image: linear-gradient(#FAF8F5, #FAF8F5); padding: 32px 14px;">
        <tr>
          <td align="center">
            
            <!-- Main Card (Crisp Pure White with Website Border) -->
            <table class="email-card" width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 580px; background-color: #FFFFFF; background-image: linear-gradient(#FFFFFF, #FFFFFF); border-radius: 14px; border: 1px solid #EAE6E3; overflow: hidden; box-shadow: 0 4px 16px -2px rgba(0, 96, 151, 0.08);">
              
              <!-- Clean Website Brand Header -->
              <tr>
                <td style="padding: 26px 30px 18px; border-bottom: 2px solid #F4F0ED; background-color: #FFFFFF; background-image: linear-gradient(#FFFFFF, #FFFFFF);">
                  <table width="100%" border="0" cellspacing="0" cellpadding="0">
                    <tr>
                      <td style="vertical-align: middle;">
                        <div style="font-size: 11px; font-weight: 800; color: #006097; text-transform: uppercase; letter-spacing: 1.5px;">
                          Katonda Talemwa Ministries
                        </div>
                        <div style="font-size: 12px; color: #A55212; font-weight: 600; margin-top: 3px;">
                          The Father&apos;s Love in Action &bull; Uganda
                        </div>
                      </td>
                      <td align="right" style="vertical-align: middle;">
                        <span style="display: inline-block; background-color: ${badgeBg}; color: ${badgeColor}; border: 1px solid ${badgeBorder}; font-size: 11px; font-weight: 800; padding: 5px 12px; border-radius: 20px; letter-spacing: 0.3px;">
                          ${categoryBadge}
                        </span>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              <!-- Email Body -->
              <tr>
                <td style="padding: 26px 30px 30px; background-color: #FFFFFF; background-image: linear-gradient(#FFFFFF, #FFFFFF);">
                  
                  <!-- Title & Subtitle -->
                  <h1 class="email-title" style="margin: 0 0 8px; font-size: 21px; font-weight: 800; color: #1C1B1B; letter-spacing: -0.3px; line-height: 1.3;">
                    ${title}
                  </h1>
                  <p class="email-sub" style="margin: 0 0 18px; font-size: 14px; color: #4A4A4A; line-height: 1.55;">
                    ${subtitle}
                  </p>

                  <!-- Highlight Stat Box (if applicable) -->
                  ${highlightHtml}

                  <!-- Detail Rows Table -->
                  ${details.length > 0 ? `
                    <div style="margin-top: 16px;">
                      <table width="100%" border="0" cellspacing="0" cellpadding="0" style="border-collapse: collapse;">
                        ${detailsHtml}
                      </table>
                    </div>
                  ` : ''}

                  <!-- Message / Statement / Prayer Box (if applicable) -->
                  ${quoteHtml}

                  <!-- Primary CTA Button (if applicable) -->
                  ${ctaHtml}

                </td>
              </tr>

              <!-- Warm Ministry Footer -->
              <tr>
                <td style="background-color: #FAF8F5; background-image: linear-gradient(#FAF8F5, #FAF8F5); padding: 22px 30px; border-top: 1px solid #EAE6E3; text-align: center;">
                  <div style="font-size: 13px; font-weight: 800; color: #006097;">
                    Katonda Talemwa Ministries
                  </div>
                  <div style="font-size: 12px; color: #4A4A4A; margin-top: 3px;">
                    Kyasenya, Lwengo District, Uganda &bull; &ldquo;God Never Fails&rdquo;
                  </div>
                  <div style="margin-top: 10px;">
                    <a href="https://katondatalemwaministeries.org" style="font-size: 12px; color: #006097; text-decoration: none; font-weight: 700;" target="_blank">
                      katondatalemwaministeries.org
                    </a>
                  </div>
                  <div style="margin-top: 10px; font-size: 11px; color: #7D7571;">
                    Received: ${timestamp}
                  </div>
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
  const rawRecipients = process.env.NOTIFICATION_EMAIL || 'kategereian@gmail.com';
  const recipients = rawRecipients
    .split(',')
    .map(email => email.trim())
    .filter(Boolean);

  const transporter = getTransporter();

  let subject = '';
  let payload = {};

  switch (type) {
    case 'donation': {
      const amountFormatted = `$${Number(data.amount || 0).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
      const donorDisplay = data.donorName ? data.donorName.trim() : 'Anonymous Supporter';
      const frequencyLabel = data.frequency === 'monthly' ? 'Monthly Partner' : 'One-Time Gift';

      subject = `Donation Pledge: ${amountFormatted} (${frequencyLabel}) from ${donorDisplay}`;

      payload = {
        categoryBadge: 'Donation Pledge',
        badgeBg: '#E6F5E8',
        badgeColor: '#008C15',
        badgeBorder: '#B7E4BE',
        title: `New Donation Pledge of ${amountFormatted}`,
        subtitle: `${donorDisplay} has pledged a gift to support Katonda Talemwa Ministries.`,
        highlightBox: {
          label: 'Pledge Amount',
          value: amountFormatted,
          valueColor: '#008C15', // Website Vibrant Green
          pill: `${frequencyLabel} • ${data.designation || 'General Fund'}`,
          pillBg: '#FFD943', // Website Action Yellow
          pillColor: '#1C1B1B'
        },
        details: [
          { label: 'Donor Name', value: donorDisplay },
          { label: 'Email Address', value: data.donorEmail || 'Not provided' },
          { label: 'Frequency', value: frequencyLabel },
          { label: 'Designation', value: data.designation || 'Where Most Needed (General Fund)' },
          { label: 'Status', value: 'Pledge registered • PayPal checkout opened' }
        ],
        ctaButton: data.donorEmail ? {
          label: `Send Thank-You to ${donorDisplay}`,
          href: `mailto:${data.donorEmail}?subject=${encodeURIComponent(`Thank You for Partnering with Katonda Talemwa Ministries`)}`
        } : null
      };
      break;
    }

    case 'sponsorship': {
      const sponsorName = data.sponsorName ? data.sponsorName.trim() : 'Sponsor';
      const childName = data.childName ? data.childName.trim() : 'Child';
      const monthlyAmount = `$${data.amount || 38}/month`;

      subject = `Child Sponsorship Pledge: ${sponsorName} for ${childName}`;

      payload = {
        categoryBadge: 'Child Sponsorship',
        badgeBg: '#FFF7D6',
        badgeColor: '#A55212',
        badgeBorder: '#FFD943',
        title: `${sponsorName} pledged to sponsor ${childName}`,
        subtitle: `A new sponsor has committed ${monthlyAmount} to transform ${childName}'s future.`,
        highlightBox: {
          label: 'Monthly Support',
          value: monthlyAmount,
          valueColor: '#006097', // Website Primary Trust Blue
          pill: `Sponsored Child: ${childName}${data.childId ? ` (#${data.childId})` : ''}`,
          pillBg: '#FFE7DB',
          pillColor: '#5D2B00'
        },
        details: [
          { label: 'Child Name', value: childName },
          { label: 'Child ID', value: data.childId || 'N/A' },
          { label: 'Sponsor Name', value: sponsorName },
          { label: 'Sponsor Email', value: data.sponsorEmail },
          { label: 'Status', value: 'Pledge registered • PayPal checkout opened' }
        ],
        ctaButton: {
          label: `Email ${sponsorName}`,
          href: `mailto:${data.sponsorEmail}?subject=${encodeURIComponent(`Welcome to the KTM Family - Sponsoring ${childName}`)}`
        }
      };
      break;
    }

    case 'volunteer': {
      const volunteerName = data.name ? data.name.trim() : 'Volunteer';

      subject = `Volunteer Application: ${volunteerName} (${data.role})`;

      payload = {
        categoryBadge: 'Volunteer Application',
        badgeBg: '#E0F2FE',
        badgeColor: '#006097',
        badgeBorder: '#BAE6FD',
        title: `${volunteerName} applied to volunteer`,
        subtitle: `${volunteerName} is interested in serving with our team in Uganda.`,
        highlightBox: {
          label: 'Preferred Role',
          value: data.role,
          valueColor: '#006097',
          pill: `${data.country} • Available for ${data.duration}`,
          pillBg: '#FFD943',
          pillColor: '#1C1B1B'
        },
        details: [
          { label: 'Applicant Name', value: volunteerName },
          { label: 'Email Address', value: data.email },
          { label: 'Country', value: data.country },
          { label: 'Preferred Role', value: data.role },
          { label: 'Duration', value: data.duration }
        ],
        quoteBox: data.message ? {
          title: 'Personal Statement / Message',
          text: data.message,
          accentColor: '#006097'
        } : null,
        ctaButton: {
          label: `Reply to ${volunteerName}`,
          href: `mailto:${data.email}?subject=${encodeURIComponent(`Volunteering with Katonda Talemwa Ministries`)}`
        }
      };
      break;
    }

    case 'prayer': {
      const requesterName = data.name ? data.name.trim() : 'Friend';

      subject = `Prayer Request from ${requesterName}`;

      payload = {
        categoryBadge: 'Prayer Request',
        badgeBg: '#FCE7F3',
        badgeColor: '#BE185D',
        badgeBorder: '#FBCFE8',
        title: `Prayer Request from ${requesterName}`,
        subtitle: `Please stand with ${requesterName} in prayer before our Lord Jesus Christ.`,
        quoteBox: {
          title: 'Prayer Need',
          text: data.request,
          accentColor: '#006097'
        },
        details: [
          { label: 'Submitted by', value: requesterName },
          { label: 'Email Address', value: data.email }
        ],
        ctaButton: {
          label: `Send Prayer Encouragement`,
          href: `mailto:${data.email}?subject=${encodeURIComponent(`Standing with you in prayer - Katonda Talemwa Ministries`)}`
        }
      };
      break;
    }

    case 'contact': {
      const senderName = data.name ? data.name.trim() : 'Website Visitor';
      const subjectTopic = data.subject ? data.subject.trim() : 'General Inquiry';

      subject = `Contact Message: "${subjectTopic}" from ${senderName}`;

      payload = {
        categoryBadge: 'Contact Inquiry',
        badgeBg: '#E0F2FE',
        badgeColor: '#006097',
        badgeBorder: '#BAE6FD',
        title: `${subjectTopic}`,
        subtitle: `A new message was submitted through the website contact page.`,
        details: [
          { label: 'From', value: senderName },
          { label: 'Email Address', value: data.email },
          { label: 'Subject', value: subjectTopic }
        ],
        quoteBox: {
          title: 'Message',
          text: data.message,
          accentColor: '#006097'
        },
        ctaButton: {
          label: `Reply to ${senderName}`,
          href: `mailto:${data.email}?subject=${encodeURIComponent(`Re: ${subjectTopic}`)}`
        }
      };
      break;
    }

    case 'career': {
      const applicantName = data.name ? data.name.trim() : 'Applicant';
      const jobRole = data.jobTitle ? data.jobTitle.trim() : 'Open Position';

      subject = `Job Application: ${applicantName} - ${jobRole}`;

      payload = {
        categoryBadge: 'Job Application',
        badgeBg: '#F3E8FF',
        badgeColor: '#7E22CE',
        badgeBorder: '#E9D5FF',
        title: `${applicantName} applied for ${jobRole}`,
        subtitle: `A new employment application has been received for review.`,
        highlightBox: {
          label: 'Position Applied',
          value: jobRole,
          valueColor: '#006097',
          pill: `Applicant: ${applicantName}`,
          pillBg: '#E0F2FE',
          pillColor: '#006097'
        },
        details: [
          { label: 'Applicant Name', value: applicantName },
          { label: 'Email Address', value: data.email },
          { label: 'CV / Resume Link', value: data.cvUrl, isLink: true }
        ],
        quoteBox: data.coverLetter ? {
          title: 'Cover Letter / Introduction',
          text: data.coverLetter,
          accentColor: '#006097'
        } : null,
        ctaButton: {
          label: `Contact ${applicantName}`,
          href: `mailto:${data.email}?subject=${encodeURIComponent(`Regarding your application for ${jobRole} at Katonda Talemwa Ministries`)}`
        }
      };
      break;
    }

    case 'exchange': {
      const contactPerson = data.name ? data.name.trim() : 'Contact';
      const groupName = data.groupType ? data.groupType.trim() : 'Mission Group';

      subject = `Mission Trip Inquiry: ${groupName} - ${contactPerson}`;

      payload = {
        categoryBadge: 'Mission Trip / Exchange',
        badgeBg: '#FFF7D6',
        badgeColor: '#A55212',
        badgeBorder: '#FFD943',
        title: `Mission Trip Inquiry from ${contactPerson}`,
        subtitle: `A team is inquiring about visiting and serving with KTM in Uganda.`,
        highlightBox: {
          label: 'Group Category',
          value: groupName,
          valueColor: '#006097',
          pill: `${data.teamSize ? `Team: ${data.teamSize}` : 'Team Size Flexible'} • ${data.preferredDate || 'Dates Flexible'}`,
          pillBg: '#FFD943',
          pillColor: '#1C1B1B'
        },
        details: [
          { label: 'Contact Person', value: contactPerson },
          { label: 'Email Address', value: data.email },
          { label: 'Phone / WhatsApp', value: data.phone },
          { label: 'Group Category', value: groupName },
          { label: 'Estimated Team Size', value: data.teamSize || 'Not specified' },
          { label: 'Preferred Dates', value: data.preferredDate || 'Flexible' }
        ],
        quoteBox: data.message ? {
          title: 'Trip Questions / Notes',
          text: data.message,
          accentColor: '#006097'
        } : null,
        ctaButton: {
          label: `Reply to ${contactPerson}`,
          href: `mailto:${data.email}?subject=${encodeURIComponent(`Katonda Talemwa Ministries - Mission Trip Inquiry`)}`
        }
      };
      break;
    }

    case 'newsletter': {
      const subscriberEmail = data.email ? data.email.trim() : '';

      subject = `New Newsletter Subscriber: ${subscriberEmail}`;

      payload = {
        categoryBadge: 'Newsletter Subscriber',
        badgeBg: '#FFF7D6',
        badgeColor: '#A55212',
        badgeBorder: '#FFD943',
        title: `New Newsletter Subscriber`,
        subtitle: `A new supporter has subscribed to receive ministry updates and stories.`,
        details: [
          { label: 'Email Address', value: subscriberEmail },
          { label: 'Status', value: 'Subscribed & Active' }
        ],
        ctaButton: {
          label: `Send Welcome Note`,
          href: `mailto:${subscriberEmail}?subject=${encodeURIComponent(`Welcome to the Katonda Talemwa Ministries Family`)}`
        }
      };
      break;
    }

    default: {
      subject = `New Website Submission: ${type}`;
      payload = {
        categoryBadge: 'Submission',
        title: `New ${type} Submission`,
        subtitle: `A new submission was received on the website.`,
        details: Object.entries(data).map(([k, v]) => ({ label: k, value: String(v) }))
      };
    }
  }

  const html = buildHtmlEmail(payload);

  // If SMTP is not yet configured with user/pass in .env, simulate delivery
  if (!transporter) {
    console.log(`\n📨 [Mailer Simulation] Notice: SMTP_USER and SMTP_PASS are not set`);
    console.log(`   To: ${recipients.join(', ')}`);
    console.log(`   Subject: ${subject}\n`);
    return { success: true, simulated: true };
  }

  // Real SMTP sending
  try {
    const sender = process.env.SMTP_USER;
    const info = await transporter.sendMail({
      from: `"Katonda Talemwa Ministries" <${sender}>`,
      to: recipients,
      subject,
      html
    });

    console.log(`✉️ Notification email sent to [${recipients.join(', ')}] (Message ID: ${info.messageId})`);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error(`⚠️ Failed to send notification email to [${recipients.join(', ')}]:`, error.message);
    return { success: false, error: error.message };
  }
}
