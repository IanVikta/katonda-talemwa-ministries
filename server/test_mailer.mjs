import { sendNotification } from './src/services/mailer.js';

async function testMailer() {
  console.log('Testing Mailer Service with all 8 submission types...\n');

  // Test 1: Contact
  await sendNotification({
    type: 'contact',
    data: {
      name: 'Test Sender',
      email: 'test@example.com',
      subject: 'Inquiry about medical clinic',
      message: 'Hello, I would like to donate medicine to the Katonda Talemwa Clinic.'
    }
  });

  // Test 2: Volunteer
  await sendNotification({
    type: 'volunteer',
    data: {
      name: 'David Smith',
      email: 'david@smith.org',
      country: 'United Kingdom',
      role: 'Teaching & Education',
      duration: '2 months',
      message: 'Looking forward to serving the community.'
    }
  });

  // Test 3: Sponsorship
  await sendNotification({
    type: 'sponsorship',
    data: {
      childId: 'ch-1',
      childName: 'Amina Nalwanga',
      sponsorName: 'Sarah Jenkins',
      sponsorEmail: 'sarah@jenkins.com',
      amount: 38
    }
  });

  // Test 4: Donation
  await sendNotification({
    type: 'donation',
    data: {
      donorName: 'Michael Brown',
      donorEmail: 'michael@brown.com',
      amount: 250,
      frequency: 'one-time',
      designation: 'Clean Water Project'
    }
  });

  // Test 5: Career
  await sendNotification({
    type: 'career',
    data: {
      name: 'Grace Hopper',
      email: 'grace@tech.org',
      jobTitle: 'Pediatric Clinic Nurse',
      cvUrl: 'https://example.com/cv.pdf',
      coverLetter: 'Passionate about child healthcare.'
    }
  });

  // Test 6: Exchange Trip
  await sendNotification({
    type: 'exchange',
    data: {
      name: 'Pastor Thomas',
      email: 'thomas@gracechurch.org',
      phone: '+1 555-0199',
      groupType: 'Church Mission Team',
      teamSize: '12 members',
      preferredDate: 'August 2026',
      message: 'Planning youth outreach and construction.'
    }
  });

  // Test 7: Prayer
  await sendNotification({
    type: 'prayer',
    data: {
      name: 'Ruth K.',
      email: 'ruth@family.org',
      request: 'Please pray for my mother recovering from surgery.'
    }
  });

  // Test 8: Newsletter
  await sendNotification({
    type: 'newsletter',
    data: {
      email: 'subscriber@newsletter.com'
    }
  });

  console.log('\nAll 8 template simulations completed successfully!');
}

testMailer();
