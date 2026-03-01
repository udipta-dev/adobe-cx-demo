import { useNavigate } from 'react-router-dom';

const flows = [
  {
    id: 'sg',
    title: 'Singapore',
    subtitle: 'Cross-Sell Journey',
    description: 'Existing savings customer identified for credit card cross-sell via AI propensity scoring',
    persona: 'Sarah Tan, 32',
    path: '/sg/profile',
    color: 'from-blue-600 to-blue-800',
    tag: 'Deepen',
    screens: 5,
  },
  {
    id: 'id',
    title: 'Indonesia',
    subtitle: 'Acquisition Journey',
    description: 'New prospect from Instagram ad through digital savings onboarding and KYC completion',
    persona: 'Budi Santoso, 28',
    path: '/id/profile',
    color: 'from-emerald-600 to-emerald-800',
    tag: 'Acquire',
    screens: 5,
  },
  {
    id: 'agents',
    title: 'AI Agents',
    subtitle: 'Agent Orchestrator',
    description: 'Purpose-built AI agents that make marketers faster — natural language segmentation in action',
    persona: null,
    path: '/agents/overview',
    color: 'from-purple-600 to-purple-800',
    tag: 'AI',
    screens: 2,
  },
  {
    id: 'markets',
    title: 'Market Overview',
    subtitle: 'Three-Market Strategy',
    description: 'Singapore, Malaysia/Indonesia, and Greater Bay Area — one platform across all markets',
    persona: null,
    path: '/markets',
    color: 'from-gray-600 to-gray-800',
    tag: 'Strategy',
    screens: 1,
  },
];

export default function DemoHub() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-sidebar flex flex-col">
      {/* Header */}
      <header className="px-8 py-6 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-adobe-red rounded-lg flex items-center justify-center">
            <span className="text-white text-lg font-bold">A</span>
          </div>
          <div>
            <h1 className="text-white text-xl font-semibold">Adobe Experience Platform</h1>
            <p className="text-white/50 text-sm">Customer-Centric Engagement Demo</p>
          </div>
        </div>
      </header>

      {/* Main content */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="max-w-5xl w-full">
          {/* Title area */}
          <div className="text-center mb-10">
            <h2 className="text-white text-3xl font-light mb-2">
              From Campaigns to <span className="font-semibold">Customer-Centric Engagement</span>
            </h2>
            <p className="text-white/50 text-base">
              Select a demo flow to explore
            </p>
          </div>

          {/* Platform Overview - full width */}
          <button
            onClick={() => navigate('/platform')}
            className="group w-full bg-gradient-to-r from-adobe-red/10 to-purple-900/20 hover:from-adobe-red/20 hover:to-purple-900/30 border border-adobe-red/30 hover:border-adobe-red/50 rounded-xl p-5 text-left transition-all cursor-pointer mb-5 flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-adobe-red/20 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-adobe-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L12 12.75l-5.571-3m11.142 0 4.179 2.25L12 17.25l-9.75-5.25 4.179-2.25m11.142 0 4.179 2.25L12 21.75l-9.75-5.25 4.179-2.25" />
                </svg>
              </div>
              <div>
                <span className="inline-block text-[10px] font-medium px-2 py-0.5 rounded-full bg-adobe-red/20 text-adobe-red mb-1">START HERE</span>
                <h3 className="text-white text-lg font-semibold">One Adobe Platform</h3>
                <p className="text-white/50 text-sm">See how every tool — existing and new — works together across the stack</p>
              </div>
            </div>
            <svg className="w-5 h-5 text-white/30 group-hover:text-white/60 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </button>

          {/* Flow cards */}
          <div className="grid grid-cols-2 gap-5">
            {flows.map((flow) => (
              <button
                key={flow.id}
                onClick={() => navigate(flow.path)}
                className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/25 rounded-xl p-6 text-left transition-all cursor-pointer"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className={`inline-block text-xs font-medium px-2.5 py-1 rounded-full bg-gradient-to-r ${flow.color} text-white mb-3`}>
                      {flow.tag}
                    </span>
                    <h3 className="text-white text-lg font-semibold">{flow.title}</h3>
                    <p className="text-white/70 text-sm">{flow.subtitle}</p>
                  </div>
                  <svg className="w-5 h-5 text-white/30 group-hover:text-white/60 transition-colors mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                  </svg>
                </div>
                <p className="text-white/40 text-sm mb-3">{flow.description}</p>
                <div className="flex items-center justify-between">
                  {flow.persona && (
                    <span className="text-white/50 text-xs">
                      Persona: {flow.persona}
                    </span>
                  )}
                  <span className="text-white/30 text-xs ml-auto">
                    {flow.screens} {flow.screens === 1 ? 'screen' : 'screens'}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Keyboard hints */}
          <div className="text-center mt-8 text-white/25 text-xs">
            Use arrow keys to navigate within flows | ESC to return here | Number keys to jump to screens
          </div>
        </div>
      </div>
    </div>
  );
}
