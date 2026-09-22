async function runTests() {
  const baseUrl = 'http://localhost:5000';
  console.log('--- Starting Comprehensive API & Sanitization Tests ---\n');

  const tests = [
    // 1. Health check
    {
      name: '1. Health check',
      endpoint: '/health',
      method: 'GET',
      expectedStatus: 200,
      validate: (data) => data.status === 'healthy'
    },
    // 2. Valid Contact form
    {
      name: '2. Contact Form (Valid)',
      endpoint: '/api/contact',
      method: 'POST',
      body: { name: 'Sarah Connor', email: 'sarah@example.com', subject: 'Child Welfare', message: 'I would like to know more about the village facilities.' },
      expectedStatus: 201,
      validate: (data) => data.success === true
    },
    // 3. Invalid Contact form (Name with numbers)
    {
      name: '3. Contact Form (Reject Name with Numbers)',
      endpoint: '/api/contact',
      method: 'POST',
      body: { name: 'Sarah Connor 123', email: 'sarah@example.com', subject: 'Child Welfare', message: 'I would like to know more about the village facilities.' },
      expectedStatus: 400,
      validate: (data) => data.success === false && data.error.includes('numbers')
    },
    // 4. Valid Volunteer Application
    {
      name: '4. Volunteer Application (Valid)',
      endpoint: '/api/volunteers',
      method: 'POST',
      body: { name: 'David Miller', email: 'david@example.com', country: 'Uganda', role: 'Teacher / Tutor', duration: '1 month', message: 'Excited to teach maths.' },
      expectedStatus: 201,
      validate: (data) => data.success === true
    },
    // 5. Invalid Volunteer Application (Name with numbers)
    {
      name: '5. Volunteer Application (Reject Name with Numbers)',
      endpoint: '/api/volunteers',
      method: 'POST',
      body: { name: 'David99 Miller', email: 'david@example.com', country: 'Uganda', role: 'Teacher / Tutor', duration: '1 month', message: 'Excited to teach maths.' },
      expectedStatus: 400,
      validate: (data) => data.success === false && data.error.includes('numbers')
    },
    // 6. Valid Sponsorship Pledge
    {
      name: '6. Sponsorship Pledge (Valid)',
      endpoint: '/api/sponsorships',
      method: 'POST',
      body: { childId: 'ch-1', childName: 'Amina Nalwanga', sponsorName: 'Grace Hopper', sponsorEmail: 'grace@example.com', amount: 38 },
      expectedStatus: 201,
      validate: (data) => data.success === true
    },
    // 7. Invalid Sponsorship Pledge (Sponsor name with numbers)
    {
      name: '7. Sponsorship Pledge (Reject Sponsor Name with Numbers)',
      endpoint: '/api/sponsorships',
      method: 'POST',
      body: { childId: 'ch-1', childName: 'Amina Nalwanga', sponsorName: 'Grace7 Hopper', sponsorEmail: 'grace@example.com', amount: 38 },
      expectedStatus: 400,
      validate: (data) => data.success === false && data.error.includes('numbers')
    },
    // 8. Valid Donation Pledge
    {
      name: '8. Donation Pledge (Valid)',
      endpoint: '/api/donations',
      method: 'POST',
      body: { donorName: 'Robert Smith', donorEmail: 'robert@example.com', amount: 100, frequency: 'monthly', designation: 'Kate Clinic & Medical Services' },
      expectedStatus: 201,
      validate: (data) => data.success === true
    },
    // 9. Invalid Donation Pledge (Donor name with numbers)
    {
      name: '9. Donation Pledge (Reject Donor Name with Numbers)',
      endpoint: '/api/donations',
      method: 'POST',
      body: { donorName: 'Robert 404 Smith', donorEmail: 'robert@example.com', amount: 100, frequency: 'monthly', designation: 'Kate Clinic & Medical Services' },
      expectedStatus: 400,
      validate: (data) => data.success === false && data.error.includes('numbers')
    },
    // 10. Valid Career Application
    {
      name: '10. Career Application (Valid)',
      endpoint: '/api/careers',
      method: 'POST',
      body: { name: 'Emily Clark', email: 'emily@example.com', jobTitle: 'Pediatric Clinic Nurse', cvUrl: 'https://drive.google.com/file/d/sample-cv', coverLetter: 'Dedicated pediatric nurse with 5 years experience.' },
      expectedStatus: 201,
      validate: (data) => data.success === true
    },
    // 11. Invalid Career Application (Name with numbers)
    {
      name: '11. Career Application (Reject Name with Numbers)',
      endpoint: '/api/careers',
      method: 'POST',
      body: { name: 'Emily 2026', email: 'emily@example.com', jobTitle: 'Pediatric Clinic Nurse', cvUrl: 'https://drive.google.com/file/d/sample-cv', coverLetter: 'Dedicated pediatric nurse.' },
      expectedStatus: 400,
      validate: (data) => data.success === false && data.error.includes('numbers')
    },
    // 12. Valid Mission Exchange Inquiry
    {
      name: '12. Exchange Inquiry (Valid)',
      endpoint: '/api/exchange-inquiries',
      method: 'POST',
      body: { name: 'Pastor Paul', email: 'paul@faithchurch.org', phone: '+256700000000', groupType: 'church', teamSize: '11-20', preferredDate: 'July 2026', message: 'Youth mission trip.' },
      expectedStatus: 201,
      validate: (data) => data.success === true
    },
    // 13. Invalid Mission Exchange Inquiry (Name with numbers)
    {
      name: '13. Exchange Inquiry (Reject Name with Numbers)',
      endpoint: '/api/exchange-inquiries',
      method: 'POST',
      body: { name: 'Pastor Paul 2nd', email: 'paul@faithchurch.org', phone: '+256700000000', groupType: 'church', teamSize: '11-20', preferredDate: 'July 2026', message: 'Youth mission trip.' },
      expectedStatus: 400,
      validate: (data) => data.success === false && data.error.includes('numbers')
    },
    // 14. Valid Prayer Request
    {
      name: '14. Prayer Request (Valid)',
      endpoint: '/api/prayers',
      method: 'POST',
      body: { name: 'Mary Johnson', email: 'mary@example.com', request: 'Praying for health and strength for our family.' },
      expectedStatus: 201,
      validate: (data) => data.success === true
    },
    // 15. Invalid Prayer Request (Name with numbers)
    {
      name: '15. Prayer Request (Reject Name with Numbers)',
      endpoint: '/api/prayers',
      method: 'POST',
      body: { name: 'Mary123', email: 'mary@example.com', request: 'Praying for health and strength for our family.' },
      expectedStatus: 400,
      validate: (data) => data.success === false && data.error.includes('numbers')
    },
    // 16. Newsletter Subscription
    {
      name: '16. Newsletter Subscription (Valid)',
      endpoint: '/api/newsletter',
      method: 'POST',
      body: { email: 'subscriber@example.com' },
      expectedStatus: 200,
      validate: (data) => data.success === true
    }
  ];

  let passed = 0;
  for (const t of tests) {
    try {
      const res = await fetch(`${baseUrl}${t.endpoint}`, {
        method: t.method,
        headers: { 'Content-Type': 'application/json' },
        body: t.body ? JSON.stringify(t.body) : undefined
      });
      const data = await res.json();
      const statusOk = res.status === t.expectedStatus;
      const validOk = t.validate(data);

      if (statusOk && validOk) {
        console.log(`✅ ${t.name}: PASSED (status ${res.status})`);
        passed++;
      } else {
        console.error(`❌ ${t.name}: FAILED - status: ${res.status}, expected: ${t.expectedStatus}`, data);
      }
    } catch (err) {
      console.error(`❌ ${t.name}: ERROR -`, err.message);
    }
  }

  console.log(`\n========================================`);
  console.log(`Results: ${passed}/${tests.length} tests passed.`);
  console.log(`========================================`);

  if (passed === tests.length) {
    process.exit(0);
  } else {
    process.exit(1);
  }
}

runTests();
