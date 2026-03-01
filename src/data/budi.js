export const budi = {
  name: 'Budi Santoso',
  initials: 'BS',
  age: 28,
  location: 'Jakarta, Indonesia',
  accountType: 'Prospect — Digital Savings',
  tenure: 'New (7 days)',
  balance: '—',
  digitalBehavior: 'App installed 3 days ago',
  recentActivity: 'Clicked Instagram ad for Tabungan Digital',
  branchActivity: 'None — digital-only prospect',
  propensityScore: 0.68,
  propensityLabel: 'MODERATE',
  propensityProduct: 'Acquisition Likelihood',
  segment: 'New Prospect',
  lifecycle: 'Acquisition',
  channelPref: 'Mobile / Social',
  productsHeld: 0,
  productName: 'None yet',
  consent: { email: true, push: true, sms: false },
  profileCompleteness: 45,

  identities: [
    { type: 'Email', value: 'budi.s@gmail.com', source: 'Lead Form' },
    { type: 'Mobile App ID', value: 'ID-MOB-78312', source: 'Mobile App' },
    { type: 'Cookie ID', value: 'aep_7k2m51xp', source: 'Web' },
  ],

  dataSources: [
    { name: 'Paid Social', description: 'Instagram ad click, campaign source, creative variant', color: 'pink' },
    { name: 'Landing Page', description: 'Page visit, time on page, form interaction', color: 'blue' },
    { name: 'Lead Form', description: 'Name, email, phone, age, product interest', color: 'green' },
    { name: 'Mobile App (Nascent)', description: 'App install, initial browsing, KYC attempt', color: 'orange' },
  ],

  progressiveTimeline: [
    { day: 'Day 0', event: 'Ad Click', detail: 'Cookie ID + campaign source only', completeness: 10, icon: 'ad' },
    { day: 'Day 0', event: 'Lead Form Submitted', detail: 'Name, email, phone, age captured', completeness: 25, icon: 'form' },
    { day: 'Day 1', event: 'Welcome Email Opened', detail: 'Clicked "Download App" CTA', completeness: 30, icon: 'email' },
    { day: 'Day 3', event: 'App Installed', detail: 'Browsed savings products, viewed rates', completeness: 38, icon: 'app' },
    { day: 'Day 5', event: 'KYC Started', detail: 'Abandoned at document upload step', completeness: 45, icon: 'kyc' },
    { day: 'Day 7', event: 'Projected', detail: 'Push reminder for KYC completion', completeness: 55, icon: 'push', projected: true },
  ],

  timeline: [
    { date: 'Today', type: 'AI Signal', label: 'KYC drop-off detected — advisor follow-up triggered via WhatsApp', icon: 'ai', color: 'purple' },
    { date: '2 days ago', type: 'App', label: 'Started KYC, abandoned at document upload step', icon: 'app', color: 'orange' },
    { date: '4 days ago', type: 'App', label: 'App installed, browsed savings products and rates', icon: 'app', color: 'orange' },
    { date: '6 days ago', type: 'Email', label: 'Opened welcome email, clicked "Download App"', icon: 'email', color: 'green' },
    { date: '7 days ago', type: 'Lead Form', label: 'Submitted lead form from Instagram ad landing page', icon: 'form', color: 'blue' },
    { date: '7 days ago', type: 'Ad Click', label: 'Clicked Instagram ad — "Tabungan Digital" campaign', icon: 'ad', color: 'pink' },
  ],
};

export const idDecisioning = {
  eligibilityRules: [
    { rule: 'Age 18+', passed: true },
    { rule: 'Indonesia Resident', passed: true },
    { rule: 'No existing account', passed: true },
    { rule: 'Consent captured', passed: true },
    { rule: 'OJK compliant', passed: true },
  ],
  ranking: [
    { factor: 'Predicted LTV', weight: 35, value: 0.62, label: 'Moderate' },
    { factor: 'Acquisition cost efficiency', weight: 30, value: 0.78, label: 'Good' },
    { factor: 'Product fit', weight: 20, value: 0.85, label: 'High' },
    { factor: 'Channel responsiveness', weight: 15, value: 0.7, label: 'Social' },
  ],
  winningOffer: {
    name: 'Tabungan Digital Starter',
    tier: 'STARTER',
    benefits: ['0% admin fee for 6 months', 'Cashback on first 3 transactions', 'Instant virtual debit card'],
    status: 'Available for Budi',
  },
};

export const idMetrics = {
  funnel: [
    { stage: 'Ad Impressions', value: 50000, pct: 100 },
    { stage: 'Ad Clicks', value: 8200, pct: 16.4 },
    { stage: 'Leads Captured', value: 3100, pct: 6.2 },
    { stage: 'App Installs', value: 1850, pct: 3.7 },
    { stage: 'KYC Complete', value: 920, pct: 1.84 },
    { stage: 'First Deposit', value: 680, pct: 1.36 },
  ],
  dropoffInsight: '50% of drop-offs occur at KYC document upload step. Mobile camera quality on mid-range Android devices is the primary friction point.',
  channelAttribution: [
    { channel: 'Instagram', pct: 42, color: '#E1306C' },
    { channel: 'Google', pct: 28, color: '#4285F4' },
    { channel: 'TikTok', pct: 18, color: '#000000' },
    { channel: 'Referral', pct: 12, color: '#12805C' },
  ],
  aiInsight: {
    finding: 'Prospects who receive a WhatsApp KYC reminder within 24h of abandonment complete at 2.4x the rate of email reminders.',
    recommendation: 'Shift channel weight for KYC drop-off segment from email to WhatsApp.',
    impact: '+185 additional activated accounts per month',
  },
};
