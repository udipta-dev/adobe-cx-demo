export const sarah = {
  name: 'Sarah Tan',
  initials: 'ST',
  age: 32,
  location: 'Singapore',
  accountType: 'Premium Savings',
  tenure: '8 months',
  balance: 'SGD 45,000',
  digitalBehavior: 'Mobile app 3-4x / week',
  recentActivity: 'Browsed credit cards 2x last month',
  branchActivity: 'Fixed deposit inquiry (2 weeks ago)',
  propensityScore: 0.82,
  propensityLabel: 'HIGH',
  propensityProduct: 'Credit Card Cross-Sell',
  segment: 'High-Value Savings',
  lifecycle: 'Growth',
  channelPref: 'Mobile-first',
  productsHeld: 1,
  productName: 'Savings',
  consent: { email: true, push: true, sms: true },

  identities: [
    { type: 'Email', value: 'sarah.tan@email.sg', source: 'CRM' },
    { type: 'Mobile App ID', value: 'SG-MOB-44821', source: 'Mobile App' },
    { type: 'Branch CIF', value: 'CIF-2024-08-1192', source: 'Core Banking' },
    { type: 'Cookie ID', value: 'aep_3f8x92kl', source: 'Web' },
  ],

  dataSources: [
    { name: 'Core Banking (CRM)', description: 'Account details, balance, tenure, products held, branch interactions', color: 'blue' },
    { name: 'AEM Web Interactions', description: 'Credit card page views, rate comparisons, time on site, content engagement', color: 'purple' },
    { name: 'Mobile App Events', description: 'Login frequency, feature usage, in-app browsing, notification responses', color: 'green' },
    { name: 'Adobe Analytics', description: 'Session data, conversion funnels, campaign touchpoints, referral sources', color: 'orange' },
    { name: 'Consent & Governance', description: 'MAS-compliant consent records, channel preferences, data usage permissions', color: 'red' },
  ],

  timeline: [
    { date: 'Today', type: 'AI Signal', label: 'Propensity threshold crossed — score moved from 0.71 to 0.82', icon: 'ai', color: 'purple' },
    { date: '2 days ago', type: 'Web', label: 'Viewed credit card comparison page (3 min 42s) via mobile app', icon: 'web', color: 'blue' },
    { date: '5 days ago', type: 'Email', label: 'Opened rewards email, clicked \'Learn More\' on cashback card', icon: 'email', color: 'green' },
    { date: '2 weeks ago', type: 'Branch', label: 'Branch visit — fixed deposit inquiry, advisor noted card interest', icon: 'branch', color: 'orange' },
    { date: '3 weeks ago', type: 'Web', label: 'First credit card page visit via Google search (organic)', icon: 'web', color: 'blue' },
    { date: '1 month ago', type: 'Web', label: 'Viewed credit card comparison page (1 min 15s)', icon: 'web', color: 'blue' },
    { date: '3 months ago', type: 'CRM', label: 'Completed savings goal milestone — SGD 40K balance', icon: 'crm', color: 'teal' },
    { date: '8 months ago', type: 'CRM', label: 'Account opened — Premium Savings, digital onboarding', icon: 'crm', color: 'teal' },
  ],
};

export const sgDecisioning = {
  eligibilityRules: [
    { rule: 'Age 21-65', passed: true },
    { rule: 'SG Resident', passed: true },
    { rule: 'Min income SGD 30K', passed: true },
    { rule: 'No existing credit card', passed: true },
    { rule: 'Account tenure > 3 months', passed: true },
    { rule: 'Consent: marketing = true', passed: true },
    { rule: 'Not in cooling-off period', passed: true },
  ],
  ranking: [
    { factor: 'Propensity score', weight: 40, value: 0.82, label: '0.82' },
    { factor: 'Product margin', weight: 25, value: 0.85, label: 'High' },
    { factor: 'Channel affinity', weight: 20, value: 0.9, label: 'Mobile' },
    { factor: 'Offer freshness', weight: 15, value: 0.7, label: 'New' },
  ],
  winningOffer: {
    name: 'Premium Cashback Card',
    tier: 'PREMIUM',
    benefits: ['5% cashback on dining', '2% on transport', 'No annual fee (1st yr)'],
    status: 'Pre-approved for Sarah',
  },
};

export const sgMetrics = {
  funnel: [
    { stage: 'Journey Entered', value: 12450, pct: 100 },
    { stage: 'Offer Viewed', value: 8920, pct: 71.6 },
    { stage: 'App Started', value: 3210, pct: 25.8 },
    { stage: 'App Completed', value: 1840, pct: 14.8 },
    { stage: 'Card Activated', value: 1520, pct: 12.2 },
  ],
  dropoffInsight: '42% of drop-offs occur at income verification step. Mobile users abandon 2.3x more than desktop users at this stage.',
  channelAttribution: [
    { channel: 'In-App Message', pct: 38, color: '#1473E6' },
    { channel: 'Email', pct: 27, color: '#12805C' },
    { channel: 'Push Notification', pct: 19, color: '#E68619' },
    { channel: 'Branch Advisor', pct: 16, color: '#6E6E6E' },
  ],
  aiInsight: {
    finding: 'Customers who receive a branch advisor alert after a mobile application drop-off convert at 3x the rate of those who receive a second email.',
    recommendation: 'Increase advisor alert weight in journey decisioning for mobile drop-off segment.',
    impact: '+340 additional card activations per quarter',
  },
};
