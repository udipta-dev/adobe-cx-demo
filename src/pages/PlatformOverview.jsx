import { useNavigate } from 'react-router-dom';

const layers = [
  {
    name: 'Data Collection & Ingestion',
    description: 'Capture customer signals from every touchpoint into a unified data layer',
    color: 'from-blue-600 to-blue-800',
    tools: [
      { name: 'AEM', role: 'Web content & interactions', status: 'deployed', link: null },
      { name: 'Adobe Analytics', role: 'Behavioral data & conversion tracking', status: 'deployed', link: null },
      { name: 'AEP Web/Mobile SDK', role: 'Real-time event streaming from apps', status: 'new', link: null },
      { name: 'In-house CDP', role: 'CRM & core banking data (to be migrated)', status: 'legacy', link: null },
    ],
  },
  {
    name: 'Unified Profile & Intelligence',
    description: 'Resolve identities, build real-time profiles, and score with AI',
    color: 'from-purple-600 to-purple-800',
    tools: [
      { name: 'Real-Time CDP', role: 'Identity resolution, unified profiles, segments', status: 'new', link: '/sg/profile' },
      { name: 'AI/ML Models', role: 'Propensity scoring, predictive audiences', status: 'new', link: '/sg/unified-profile' },
      { name: 'Data Governance', role: 'Consent management, data usage policies', status: 'new', link: null },
    ],
  },
  {
    name: 'Decisioning & Orchestration',
    description: 'Choose the right action, content, and channel for each customer in real time',
    color: 'from-adobe-red to-red-800',
    tools: [
      { name: 'Journey Optimizer (AJO)', role: 'Multi-step journey orchestration across channels', status: 'new', link: '/sg/journey' },
      { name: 'Offer Decisioning', role: 'Eligibility rules + AI ranking = best offer', status: 'new', link: '/sg/decisioning' },
      { name: 'Adobe Target', role: 'A/B testing & web personalization', status: 'deployed', link: null },
    ],
  },
  {
    name: 'Content & Experience',
    description: 'Create, manage, and deliver personalized content at scale',
    color: 'from-pink-600 to-pink-800',
    tools: [
      { name: 'AEM Sites', role: 'Web experience management', status: 'deployed', link: null },
      { name: 'GenStudio', role: 'AI-powered content production for FSI compliance', status: 'new', link: null },
      { name: 'AEM Assets', role: 'Digital asset management', status: 'deployed', link: null },
    ],
  },
  {
    name: 'Measurement & Optimization',
    description: 'Full-funnel attribution and AI-surfaced insights that feed back into decisioning',
    color: 'from-emerald-600 to-emerald-800',
    tools: [
      { name: 'Customer Journey Analytics', role: 'Cross-channel funnel analysis & attribution', status: 'new', link: '/sg/analytics' },
      { name: 'AI Insights', role: 'Automated anomaly detection & recommendations', status: 'new', link: '/sg/analytics' },
    ],
  },
  {
    name: 'AI Agent Layer',
    description: 'Purpose-built agents that automate and augment marketing operations',
    color: 'from-indigo-600 to-indigo-800',
    tools: [
      { name: 'Agent Orchestrator', role: 'Multi-agent collaboration with reasoning engine', status: 'new', link: '/agents/overview' },
      { name: 'Audience Agent', role: 'Natural language segment building', status: 'new', link: '/agents/audience' },
      { name: 'Journey Agent', role: 'Automated journey optimization', status: 'new', link: null },
      { name: 'Content Production Agent', role: 'FSI-compliant content at scale', status: 'new', link: null },
    ],
  },
];

const statusConfig = {
  deployed: { label: 'DEPLOYED', className: 'bg-gray-700 text-gray-300 border-gray-600' },
  new: { label: 'NEW', className: 'bg-blue-900/50 text-blue-300 border-blue-700' },
  legacy: { label: 'LEGACY', className: 'bg-amber-900/50 text-amber-300 border-amber-700' },
};

export default function PlatformOverview() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#1B1B1F' }}>
      {/* Header */}
      <header className="px-8 py-6 border-b border-white/10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate('/')}>
            <div className="w-10 h-10 bg-adobe-red rounded-lg flex items-center justify-center">
              <span className="text-white text-lg font-bold">A</span>
            </div>
            <div>
              <h1 className="text-white text-xl font-semibold">One Adobe Platform</h1>
              <p className="text-white/50 text-sm">How every tool contributes to the customer experience</p>
            </div>
          </div>
          <button
            data-coach="back-to-hub"
            onClick={() => navigate('/')}
            className="text-white/50 hover:text-white/80 text-sm flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
            </svg>
            Back to Hub
          </button>
        </div>
      </header>

      {/* Legend */}
      <div className="px-8 py-4 flex items-center gap-6 border-b border-white/5">
        <span className="text-xs text-white/40">Legend:</span>
        <div className="flex items-center gap-2">
          <span className="text-[9px] font-semibold px-2 py-0.5 rounded border bg-gray-700 text-gray-300 border-gray-600">DEPLOYED</span>
          <span className="text-xs text-white/50">Already in customer's stack</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[9px] font-semibold px-2 py-0.5 rounded border bg-blue-900/50 text-blue-300 border-blue-700">NEW</span>
          <span className="text-xs text-white/50">Being proposed in this engagement</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[9px] font-semibold px-2 py-0.5 rounded border bg-amber-900/50 text-amber-300 border-amber-700">LEGACY</span>
          <span className="text-xs text-white/50">To be replaced (Unica / in-house CDP)</span>
        </div>
      </div>

      {/* Layers */}
      <div className="px-8 py-6 space-y-4 max-w-6xl mx-auto">
        {layers.map((layer, li) => (
          <div key={li} className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
            {/* Layer header */}
            <div className={`bg-gradient-to-r ${layer.color} px-5 py-3`}>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-white text-sm font-semibold">{layer.name}</h3>
                  <p className="text-white/70 text-xs">{layer.description}</p>
                </div>
                {/* Down arrow connecting layers */}
                {li < layers.length - 1 && (
                  <div className="text-white/30 text-xs">feeds ↓</div>
                )}
              </div>
            </div>

            {/* Tools grid */}
            <div className="p-4 grid grid-cols-4 gap-3">
              {layer.tools.map((tool, ti) => {
                const sc = statusConfig[tool.status];
                const isClickable = !!tool.link;
                return (
                  <div
                    key={ti}
                    onClick={() => isClickable && navigate(tool.link)}
                    className={`rounded-lg border border-white/10 p-3 transition-all ${
                      isClickable ? 'hover:bg-white/10 hover:border-white/25 cursor-pointer' : ''
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-sm font-medium text-white">{tool.name}</span>
                      <span className={`text-[8px] font-bold px-1.5 py-0.5 rounded border ${sc.className}`}>
                        {sc.label}
                      </span>
                    </div>
                    <p className="text-[11px] text-white/50">{tool.role}</p>
                    {isClickable && (
                      <div className="mt-2 text-[10px] text-adobe-blue flex items-center gap-1">
                        See in demo →
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        {/* Feedback loop indicator */}
        <div className="text-center py-4">
          <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-6 py-2">
            <span className="text-white/40 text-xs">↻</span>
            <span className="text-white/50 text-xs">Every interaction feeds back into the profile — the platform gets smarter with every customer touchpoint</span>
            <span className="text-white/40 text-xs">↻</span>
          </div>
        </div>
      </div>
    </div>
  );
}
