import { useNavigate } from 'react-router-dom';
import DemoLayout from '../../components/layout/DemoLayout';

const agents = [
  { name: 'Journey Agent', description: 'Optimizes journey paths, timing, and channel selection based on performance data', status: 'active', category: 'Orchestration' },
  { name: 'Audience Agent', description: 'Build audiences using natural language — no SQL, no manual segment building', status: 'featured', category: 'Data' },
  { name: 'Data Insights Agent', description: 'Surfaces patterns and anomalies across customer data automatically', status: 'active', category: 'Data' },
  { name: 'Content Production Agent', description: 'Generates compliant content variants for FSI at scale across markets', status: 'active', category: 'Content' },
  { name: 'Product Advisor Agent', description: 'Recommends next-best products based on customer context and business rules', status: 'active', category: 'Decisioning' },
  { name: 'Experimentation Agent', description: 'Designs and runs A/B tests, automatically allocates traffic to winners', status: 'active', category: 'Optimization' },
  { name: 'Site Optimization Agent', description: 'Personalizes web experiences in real time based on visitor behavior', status: 'active', category: 'Content' },
  { name: 'LLM Optimization Agent', description: 'Optimizes AI model performance and prompt engineering across the platform', status: 'active', category: 'AI' },
  { name: 'Data Engineering Agent', description: 'Automates data pipeline creation, schema mapping, and quality checks', status: 'active', category: 'Data' },
  { name: 'Workflow Optimization Agent', description: 'Streamlines marketing operations and reduces manual workflow steps', status: 'active', category: 'Optimization' },
  { name: 'Product Support Agent', description: 'AI-powered customer support with full context from unified profiles', status: 'active', category: 'Service' },
  { name: 'Account Qualification Agent', description: 'Scores and qualifies accounts for sales outreach based on engagement signals', status: 'active', category: 'Data' },
];

const categoryColors = {
  Orchestration: 'bg-blue-100 text-blue-700',
  Data: 'bg-purple-100 text-purple-700',
  Content: 'bg-pink-100 text-pink-700',
  Decisioning: 'bg-amber-100 text-amber-700',
  Optimization: 'bg-green-100 text-green-700',
  AI: 'bg-red-100 text-red-700',
  Service: 'bg-teal-100 text-teal-700',
};

export default function AgentOverview() {
  const navigate = useNavigate();

  return (
    <DemoLayout flow="agents">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-6 text-white">
          <div className="flex items-center gap-2 mb-1 text-white/70 text-xs font-medium">
            EXPERIENCE PLATFORM AGENT ORCHESTRATOR
          </div>
          <h2 className="text-2xl font-semibold mb-2">Purpose-Built AI Agents</h2>
          <p className="text-white/80 text-sm max-w-2xl">
            Multi-agent collaboration powered by a reasoning engine grounded in your customer data. Each agent is purpose-built for a specific capability domain.
          </p>
        </div>

        {/* Agent Grid */}
        <div className="grid grid-cols-3 gap-4">
          {agents.map((agent) => {
            const isFeatured = agent.status === 'featured';
            return (
              <button
                key={agent.name}
                {...(isFeatured ? { 'data-coach': 'audience-agent' } : {})}
                onClick={() => isFeatured && navigate('/agents/audience')}
                className={`text-left rounded-xl border p-5 transition-all ${
                  isFeatured
                    ? 'bg-gradient-to-br from-purple-50 to-blue-50 border-purple-300 ring-2 ring-purple-200 hover:ring-purple-400 cursor-pointer'
                    : 'bg-bg-card border-border hover:border-gray-300 cursor-default'
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                      isFeatured ? 'bg-purple-600' : 'bg-gray-100'
                    }`}>
                      <svg className={`w-4 h-4 ${isFeatured ? 'text-white' : 'text-text-secondary'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z" />
                      </svg>
                    </div>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full ${categoryColors[agent.category]}`}>
                      {agent.category}
                    </span>
                  </div>
                  {isFeatured && (
                    <span className="text-[10px] bg-purple-600 text-white px-2 py-0.5 rounded-full animate-pulse">
                      CLICK TO DEMO
                    </span>
                  )}
                  {!isFeatured && (
                    <div className="w-2 h-2 rounded-full bg-green-400 mt-1" title="Active" />
                  )}
                </div>
                <h3 className={`text-sm font-semibold mb-1 ${isFeatured ? 'text-purple-900' : 'text-text-primary'}`}>{agent.name}</h3>
                <p className="text-xs text-text-secondary">{agent.description}</p>
              </button>
            );
          })}
        </div>

        {/* Narrator callout */}
        <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 flex items-start gap-3">
          <span className="text-lg">💬</span>
          <p className="text-sm text-purple-900">
            <strong>"These aren't generic AI features bolted on. Each agent is purpose-built for a specific CX capability, grounded in your actual customer data, and they collaborate through a shared reasoning engine."</strong>
          </p>
        </div>
      </div>
    </DemoLayout>
  );
}
