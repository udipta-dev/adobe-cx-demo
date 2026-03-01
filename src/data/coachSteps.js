/**
 * Coach Mode: 17-step guided walkthrough of the entire demo.
 *
 * Each step maps to a route, provides talking points for the presenter,
 * and tells them what to click next to advance.
 */
export const coachSteps = [
  // ─── DEMO HUB → PLATFORM OVERVIEW ───
  {
    route: '/',
    stepGroup: 'intro',
    title: 'Demo Hub — Opening',
    points: [
      '"Let me show you how Adobe Experience Platform transforms customer engagement for a large APAC bank."',
      'Two-market story: Singapore (deepen existing customers) and Indonesia (acquire new ones).',
      'Start with the platform architecture to set context.',
    ],
    nextAction: 'Click "One Adobe Platform" to begin',
    nextRoute: '/platform',
    highlightSelector: '[data-coach="platform-btn"]',
  },
  {
    route: '/platform',
    stepGroup: 'intro',
    title: 'Platform Overview — The Full Stack',
    points: [
      '"This is the full stack — 6 layers from data collection to AI agents."',
      'Blue badges = NEW capabilities we\'re proposing. Gray = already DEPLOYED in their stack.',
      'Highlight the AI Agent layer at the bottom — newest addition.',
      'The feedback loop at the bottom: every interaction makes the platform smarter.',
    ],
    nextAction: 'Click "Back to Hub" (top right)',
    nextRoute: '/',
    highlightSelector: '[data-coach="back-to-hub"]',
  },

  // ─── SG CROSS-SELL FLOW ───
  {
    route: '/',
    stepGroup: 'sg',
    title: 'Demo Hub — Start Singapore Flow',
    points: [
      '"Now let\'s see this in action. Starting with Singapore — a mature market."',
      'Sarah Tan is our persona: 32, existing savings customer, prime for credit card cross-sell.',
    ],
    nextAction: 'Click the "Singapore" card',
    nextRoute: '/sg/profile',
    highlightSelector: '[data-coach="sg-card"]',
  },
  {
    route: '/sg/profile',
    stepGroup: 'sg',
    title: 'Sarah\'s Profile — Real-Time CDP',
    points: [
      '"This is Sarah\'s profile in Real-Time CDP — one unified view across all touchpoints."',
      'Notice the data sources panel — 5 different sources feeding into one profile.',
      'Propensity score is 0.82 — HIGH — flagged by AI, no analyst ran a query.',
      'She browsed credit cards 2x, opened rewards emails, AND visited a branch.',
    ],
    nextAction: 'Click "Next" to see the full profile',
    nextRoute: '/sg/unified-profile',
    highlightSelector: '[data-coach="next-btn"]',
  },
  {
    route: '/sg/unified-profile',
    stepGroup: 'sg',
    title: 'Unified Profile Deep Dive — RT-CDP',
    points: [
      '"Identity resolution merged 4 different IDs into one golden profile."',
      'The behavioral timeline shows the signals that drove the AI score from 0.71 to 0.82.',
      'Key: she browsed credit cards, engaged with rewards email, AND had a branch visit — cross-channel signals.',
    ],
    nextAction: 'Click "Next" to see the journey',
    nextRoute: '/sg/journey',
    highlightSelector: '[data-coach="next-btn"]',
  },
  {
    route: '/sg/journey',
    stepGroup: 'sg',
    title: 'Cross-Sell Journey — Journey Optimizer',
    points: [
      '"The platform acts. This journey triggered when her score crossed 0.80."',
      'Channel preference check — Sarah is mobile-first, so she gets an in-app message.',
      'Fallback paths: no engagement in 48h → push notification. Still nothing → branch advisor alert.',
      'This is real-time orchestration, not a batch campaign.',
    ],
    nextAction: 'Click "Next" to see decisioning',
    nextRoute: '/sg/decisioning',
    highlightSelector: '[data-coach="next-btn"]',
  },
  {
    route: '/sg/decisioning',
    stepGroup: 'sg',
    title: 'Offer Decisioning — AJO',
    points: [
      '"Before sending any offer, the platform runs through eligibility AND AI ranking."',
      'All 7 eligibility rules passed — age, residency, income, consent, cooling-off period.',
      'AI ranked Premium Cashback Card highest: propensity (40%), margin (25%), channel fit (20%).',
      'This decision happens in under 100ms — real-time, not batch.',
    ],
    nextAction: 'Click "Next" to see analytics',
    nextRoute: '/sg/analytics',
    highlightSelector: '[data-coach="next-btn"]',
  },
  {
    route: '/sg/analytics',
    stepGroup: 'sg',
    title: 'Journey Analytics — Customer Journey Analytics',
    points: [
      '"CJA shows the full funnel: 12,450 entered → 1,520 activated — 12.2% conversion."',
      'Drop-off insight: 42% at income verification, mobile 2.3x worse than desktop.',
      'AI-surfaced insight: branch advisor alerts after mobile drop-off → 3x conversion.',
      '"This feeds back into the journey — the platform gets smarter with every interaction."',
    ],
    nextAction: 'Click "Back to Hub" to continue to Indonesia',
    nextRoute: '/',
    highlightSelector: '[data-coach="hub-btn"]',
  },

  // ─── ID ACQUISITION FLOW ───
  {
    route: '/',
    stepGroup: 'id',
    title: 'Demo Hub — Start Indonesia Flow',
    points: [
      '"Now let\'s contrast with Indonesia — an emerging market, completely different challenge."',
      'Budi Santoso is a new prospect. We\'re acquiring, not deepening.',
    ],
    nextAction: 'Click the "Indonesia" card',
    nextRoute: '/id/profile',
    highlightSelector: '[data-coach="id-card"]',
  },
  {
    route: '/id/profile',
    stepGroup: 'id',
    title: 'Budi\'s Profile — Real-Time CDP',
    points: [
      '"Budi clicked an Instagram ad 7 days ago. Much less data than Sarah."',
      'Profile completeness is only 45% — but the platform works with what it has.',
      'OJK regulatory compliance baked in. Same platform, different data maturity.',
    ],
    nextAction: 'Click "Next" to see profile building',
    nextRoute: '/id/progressive-profile',
    highlightSelector: '[data-coach="next-btn"]',
  },
  {
    route: '/id/progressive-profile',
    stepGroup: 'id',
    title: 'Progressive Profile — RT-CDP',
    points: [
      '"This shows how the profile builds over time — from just a cookie to a rich prospect."',
      'Day 0: ad click → Day 5: KYC started but abandoned at document upload → Day 7: advisor follow-up.',
      '"The platform doesn\'t wait for a complete picture to start personalizing."',
    ],
    nextAction: 'Click "Next" to see the journey',
    nextRoute: '/id/journey',
    highlightSelector: '[data-coach="next-btn"]',
  },
  {
    route: '/id/journey',
    stepGroup: 'id',
    title: 'Acquisition Journey — Journey Optimizer',
    points: [
      '"Different journey structure — acquisition, not cross-sell."',
      'Entry is lead form submission, not a propensity score.',
      'Budi is currently at KYC abandonment — WhatsApp advisor follow-up was triggered.',
      'Notice: WhatsApp is a key channel in Indonesia, not available in SG flow.',
    ],
    nextAction: 'Click "Next" to see decisioning',
    nextRoute: '/id/decisioning',
    highlightSelector: '[data-coach="next-btn"]',
  },
  {
    route: '/id/decisioning',
    stepGroup: 'id',
    title: 'Acquisition Decisioning — AJO',
    points: [
      '"Simpler eligibility — 5 rules including OJK compliance for Indonesia."',
      'AI ranking weights predicted LTV highest (35%) since this is acquisition.',
      'Winning offer: Tabungan Digital Starter — 0% admin fee for 6 months.',
    ],
    nextAction: 'Click "Next" to see analytics',
    nextRoute: '/id/analytics',
    highlightSelector: '[data-coach="next-btn"]',
  },
  {
    route: '/id/analytics',
    stepGroup: 'id',
    title: 'Acquisition Analytics — CJA',
    points: [
      '"Full acquisition funnel: 50K impressions → 680 first deposits."',
      'AI insight: WhatsApp KYC reminders convert 2.4x vs email.',
      '"Same CJA platform, different KPIs. No configuration changes needed."',
    ],
    nextAction: 'Click "Back to Hub" to continue to AI Agents',
    nextRoute: '/',
    highlightSelector: '[data-coach="hub-btn"]',
  },

  // ─── AI AGENTS ───
  {
    route: '/',
    stepGroup: 'agents',
    title: 'Demo Hub — Start AI Agents',
    points: [
      '"Finally, let\'s look at the AI Agents layer — the newest capability."',
    ],
    nextAction: 'Click the "AI Agents" card',
    nextRoute: '/agents/overview',
    highlightSelector: '[data-coach="agents-card"]',
  },
  {
    route: '/agents/overview',
    stepGroup: 'agents',
    title: 'Agent Orchestrator',
    points: [
      '"12 purpose-built agents, each specialized for a CX domain."',
      'These aren\'t generic AI bolted on — they\'re grounded in your actual customer data.',
      'They collaborate through a shared reasoning engine.',
    ],
    nextAction: 'Click the "Audience Agent" tile (pulsing)',
    nextRoute: '/agents/audience',
    highlightSelector: '[data-coach="audience-agent"]',
  },
  {
    route: '/agents/audience',
    stepGroup: 'agents',
    title: 'Audience Agent — The Wow Moment',
    points: [
      '"A marketer types what they want in plain English."',
      'Click "Run Agent" — watch it parse intent, map to schema, apply rules, estimate size.',
      '2,340 profiles match, 2,180 consent-eligible. What took 2 hours now takes 10 seconds.',
      'Wrap up: "One platform across Singapore and Indonesia. Same architecture, different strategies. AI that gets smarter with every interaction."',
    ],
    nextAction: 'Demo complete! Click "Run Agent" if you haven\'t already',
    nextRoute: null,
    highlightSelector: null,
  },
];
