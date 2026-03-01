import DemoLayout from '../../components/layout/DemoLayout';

const nodes = [
  { id: 'entry', label: 'ENTRY', sublabel: 'Lead form\nsubmission', x: 60, y: 180, type: 'trigger', active: true },
  { id: 'welcome', label: 'WELCOME\nEMAIL', sublabel: 'Immediate\nsend', x: 230, y: 180, type: 'action', active: true },
  { id: 'wait1', label: 'WAIT 24H', sublabel: 'App download\nnudge', x: 400, y: 180, type: 'wait', active: true },
  { id: 'appcheck', label: 'APP\nINSTALLED?', sublabel: '', x: 570, y: 180, type: 'condition', active: true },
  { id: 'onboard', label: 'IN-APP\nONBOARDING', sublabel: 'Product tour +\nKYC prompt', x: 740, y: 100, type: 'action', active: true, highlight: true },
  { id: 'retarget', label: 'RETARGET', sublabel: 'Email reminder\nto download', x: 740, y: 280, type: 'action' },
  { id: 'kyc', label: 'KYC\nCOMPLETE?', sublabel: '', x: 910, y: 100, type: 'condition', active: true },
  { id: 'deposit', label: 'FIRST\nDEPOSIT', sublabel: 'Incentive +\nvirtual card', x: 1080, y: 40, type: 'action' },
  { id: 'advisor', label: 'ADVISOR\nFOLLOW-UP', sublabel: 'WhatsApp /\ncall', x: 1080, y: 180, type: 'action', active: true, highlight: true },
];

const edges = [
  { from: 'entry', to: 'welcome', active: true },
  { from: 'welcome', to: 'wait1', active: true },
  { from: 'wait1', to: 'appcheck', active: true },
  { from: 'appcheck', to: 'onboard', label: 'Yes', active: true },
  { from: 'appcheck', to: 'retarget', label: 'No' },
  { from: 'onboard', to: 'kyc', active: true },
  { from: 'kyc', to: 'deposit', label: 'Yes' },
  { from: 'kyc', to: 'advisor', label: 'No', active: true },
];

function getNodeColor(type, active, highlight) {
  if (highlight) return { bg: 'bg-emerald-600', text: 'text-white', border: 'border-emerald-600' };
  if (active) {
    switch (type) {
      case 'trigger': return { bg: 'bg-purple-600', text: 'text-white', border: 'border-purple-600' };
      case 'condition': return { bg: 'bg-amber-500', text: 'text-white', border: 'border-amber-500' };
      case 'action': return { bg: 'bg-emerald-600', text: 'text-white', border: 'border-emerald-600' };
      case 'wait': return { bg: 'bg-gray-500', text: 'text-white', border: 'border-gray-500' };
      default: return { bg: 'bg-gray-500', text: 'text-white', border: 'border-gray-500' };
    }
  }
  return { bg: 'bg-white', text: 'text-text-secondary', border: 'border-border' };
}

export default function IDJourney() {
  return (
    <DemoLayout flow="id">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Journey Title */}
        <div className="bg-bg-card rounded-xl border border-border p-6">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <h2 className="text-lg font-semibold text-text-primary">Digital Savings Acquisition Journey</h2>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs bg-amber-50 text-amber-700 px-3 py-1 rounded-full font-medium">ACQUISITION</span>
              <span className="text-xs bg-green-50 text-green-700 px-3 py-1 rounded-full font-medium">LIVE</span>
            </div>
          </div>
          <p className="text-sm text-text-secondary">From Instagram ad click to first deposit. Budi's current position: KYC abandoned → advisor follow-up triggered.</p>
        </div>

        {/* Journey Canvas */}
        <div className="bg-bg-card rounded-xl border border-border p-6 overflow-x-auto">
          <div className="relative" style={{ width: 1220, height: 360 }}>
            {/* SVG Edges */}
            <svg className="absolute inset-0" width="1220" height="360" style={{ zIndex: 0 }}>
              {edges.map((edge, i) => {
                const from = nodes.find(n => n.id === edge.from);
                const to = nodes.find(n => n.id === edge.to);
                const x1 = from.x + 70;
                const y1 = from.y + 25;
                const x2 = to.x;
                const y2 = to.y + 25;
                const midX = (x1 + x2) / 2;
                return (
                  <g key={i}>
                    <path
                      d={`M ${x1} ${y1} C ${midX} ${y1}, ${midX} ${y2}, ${x2} ${y2}`}
                      fill="none"
                      stroke={edge.active ? '#12805C' : '#D1D5DB'}
                      strokeWidth={edge.active ? 2.5 : 1.5}
                      strokeDasharray={edge.active ? '' : '6 4'}
                    />
                    <circle cx={x2 - 2} cy={y2} r={3} fill={edge.active ? '#12805C' : '#D1D5DB'} />
                    {edge.label && (
                      <text x={midX} y={(y1 + y2) / 2 - 8} textAnchor="middle" className="text-[10px]" fill={edge.active ? '#12805C' : '#9CA3AF'}>
                        {edge.label}
                      </text>
                    )}
                  </g>
                );
              })}
            </svg>

            {/* Nodes */}
            {nodes.map((node) => {
              const colors = getNodeColor(node.type, node.active, node.highlight);
              return (
                <div
                  key={node.id}
                  className={`absolute rounded-lg border-2 ${colors.border} ${colors.bg} px-3 py-2 w-[140px] text-center shadow-sm`}
                  style={{ left: node.x, top: node.y, zIndex: 1 }}
                >
                  <div className={`text-[10px] font-bold ${colors.text} mb-0.5 whitespace-pre-line leading-tight`}>{node.label}</div>
                  <div className={`text-[9px] ${node.active ? 'text-white/80' : 'text-text-secondary'} whitespace-pre-line leading-tight`}>
                    {node.sublabel}
                  </div>
                  {node.highlight && (
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-amber-400 rounded-full border-2 border-white" />
                  )}
                </div>
              );
            })}

            {/* Budi indicator */}
            <div className="absolute flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-full px-3 py-1" style={{ left: 1000, top: 230, zIndex: 2 }}>
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center text-white text-[10px] font-bold">BS</div>
              <span className="text-xs text-emerald-700 font-medium">Budi is here</span>
            </div>
          </div>
        </div>

        {/* Key difference callout */}
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <h4 className="text-xs font-semibold text-blue-900 mb-2">How This Differs from SG</h4>
            <ul className="space-y-1.5 text-xs text-blue-800">
              <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">•</span>Entry is lead form submission, not propensity score</li>
              <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">•</span>Journey focuses on onboarding, not cross-sell</li>
              <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">•</span>KYC gate is the critical conversion point</li>
              <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">•</span>WhatsApp as advisor channel (vs. branch in SG)</li>
            </ul>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-start gap-3">
            <span className="text-lg">⚠️</span>
            <div>
              <p className="text-sm font-medium text-amber-900 mb-1">KYC Drop-off Path</p>
              <p className="text-sm text-amber-800">
                Budi started KYC but abandoned at document upload. The platform triggers an <strong>advisor follow-up via WhatsApp</strong> — the preferred channel in Indonesia for financial services.
              </p>
            </div>
          </div>
        </div>

        {/* Narrator callout */}
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 flex items-start gap-3">
          <span className="text-lg">💬</span>
          <p className="text-sm text-emerald-900">
            <strong>"Same platform, completely different journey. Acquisition in Indonesia requires different triggers, different channels, different conversion gates — but the orchestration engine is the same."</strong>
          </p>
        </div>
      </div>
    </DemoLayout>
  );
}
