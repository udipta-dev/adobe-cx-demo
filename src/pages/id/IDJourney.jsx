import DemoLayout from '../../components/layout/DemoLayout';

const nodes = [
  { id: 'entry', label: 'Lead Form', sublabel: 'Form submission', x: 30, y: 150, pct: '100%', count: '3,100', icon: 'trigger', active: true },
  { id: 'welcome', label: 'Welcome Email', sublabel: 'Immediate send', x: 200, y: 150, pct: '92%', count: '2,852', icon: 'action', active: true },
  { id: 'wait1', label: 'Wait 24h', sublabel: 'App download nudge', x: 370, y: 150, pct: '78%', count: '2,418', icon: 'wait', active: true },
  { id: 'appcheck', label: 'App Installed?', sublabel: 'Check device', x: 540, y: 150, pct: '60%', count: '1,860', icon: 'condition', active: true },
  { id: 'onboard', label: 'In-App Onboarding', sublabel: 'Tour + KYC prompt', x: 710, y: 70, pct: '47%', count: '1,457', icon: 'action', active: true, persona: true },
  { id: 'retarget', label: 'Retarget Email', sublabel: 'Download reminder', x: 710, y: 260, pct: '13%', count: '403', icon: 'action' },
  { id: 'kyc', label: 'KYC Complete?', sublabel: 'Document check', x: 880, y: 70, pct: '30%', count: '930', icon: 'condition', active: true },
  { id: 'deposit', label: 'First Deposit', sublabel: 'Incentive + card', x: 1050, y: 10, pct: '22%', count: '682', icon: 'action' },
  { id: 'advisor', label: 'Advisor Follow-up', sublabel: 'WhatsApp / call', x: 1050, y: 150, pct: '17%', count: '527', icon: 'action', active: true, persona: true },
];

const edges = [
  { from: 'entry', to: 'welcome', active: true, pct: '92%' },
  { from: 'welcome', to: 'wait1', active: true, pct: '78%' },
  { from: 'wait1', to: 'appcheck', active: true, pct: '60%' },
  { from: 'appcheck', to: 'onboard', active: true, pct: '47%' },
  { from: 'appcheck', to: 'retarget', pct: '13%' },
  { from: 'onboard', to: 'kyc', active: true, pct: '30%' },
  { from: 'kyc', to: 'deposit', pct: '22%' },
  { from: 'kyc', to: 'advisor', active: true, pct: '17%' },
];

const iconPaths = {
  trigger: 'M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z',
  condition: 'M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z',
  action: 'M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5',
  wait: 'M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z',
};

const iconColors = {
  trigger: '#7C3AED',
  condition: '#F59E0B',
  action: '#12805C',
  wait: '#6B7280',
};

export default function IDJourney() {
  return (
    <DemoLayout flow="id">
      <div className="max-w-7xl mx-auto space-y-5 animate-fadeIn">
        {/* Journey Title */}
        <div className="bg-bg-card rounded-lg border border-border p-5">
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

        {/* Controls toolbar */}
        <div className="bg-bg-card rounded-lg border border-border px-5 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-xs text-text-secondary">Primary Metric:</span>
              <span className="text-xs font-medium text-text-primary bg-bg-primary px-2 py-1 rounded">Events</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-text-secondary">Container:</span>
              <span className="text-xs font-medium text-text-primary bg-bg-primary px-2 py-1 rounded">Person</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-xs text-text-secondary">Percentage value</span>
              <span className="text-xs text-text-primary bg-bg-primary px-2 py-1 rounded">Percent of start node ▾</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-text-secondary">Show fallout</span>
              <div className="w-8 h-4 bg-adobe-blue rounded-full relative">
                <div className="w-3 h-3 bg-white rounded-full absolute right-0.5 top-0.5" />
              </div>
            </div>
          </div>
        </div>

        {/* Insight caption */}
        <div className="bg-emerald-50 border border-emerald-100 rounded-lg px-4 py-2.5 flex items-center gap-2">
          <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
          </svg>
          <span className="text-xs text-emerald-800">The biggest drop-off is at <strong>KYC document upload</strong> — 50% of in-app users abandon here. WhatsApp follow-up recovers <strong>17%</strong>.</span>
        </div>

        {/* Journey Canvas - CJA style */}
        <div className="bg-bg-card rounded-lg border border-border p-6 overflow-x-auto">
          <div className="relative" style={{ width: 1220, height: 350 }}>
            {/* SVG Edges */}
            <svg className="absolute inset-0" width="1220" height="350" style={{ zIndex: 0 }}>
              <defs>
                <linearGradient id="activeGradId" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#B8D8CE" />
                  <stop offset="100%" stopColor="#C8E2D6" />
                </linearGradient>
                <linearGradient id="inactiveGradId" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#E8E8E8" />
                  <stop offset="100%" stopColor="#EFEFEF" />
                </linearGradient>
              </defs>
              {edges.map((edge, i) => {
                const from = nodes.find(n => n.id === edge.from);
                const to = nodes.find(n => n.id === edge.to);
                const x1 = from.x + 155;
                const y1 = from.y + 48;
                const x2 = to.x;
                const y2 = to.y + 48;
                const midX = (x1 + x2) / 2;
                const thickness = edge.active ? 10 : 5;
                const halfT = thickness / 2;
                return (
                  <g key={i}>
                    <path
                      d={`M ${x1} ${y1 - halfT} C ${midX} ${y1 - halfT}, ${midX} ${y2 - halfT}, ${x2} ${y2 - halfT} L ${x2} ${y2 + halfT} C ${midX} ${y2 + halfT}, ${midX} ${y1 + halfT}, ${x1} ${y1 + halfT} Z`}
                      fill={edge.active ? 'url(#activeGradId)' : 'url(#inactiveGradId)'}
                      opacity={0.7}
                    />
                    {edge.pct && (
                      <g>
                        <rect x={midX - 22} y={(y1 + y2) / 2 - 10} width="44" height="18" rx="9" fill={edge.active ? '#2C2C2C' : '#9CA3AF'} />
                        <text x={midX} y={(y1 + y2) / 2 + 3} textAnchor="middle" fill="white" style={{ fontSize: '9px', fontWeight: 600 }}>
                          {edge.pct}
                        </text>
                      </g>
                    )}
                  </g>
                );
              })}
            </svg>

            {/* Node cards */}
            {nodes.map((node) => (
              <div
                key={node.id}
                className={`absolute bg-white rounded-lg border shadow-sm w-[150px] ${node.active ? 'border-gray-200' : 'border-gray-100'}`}
                style={{ left: node.x, top: node.y, zIndex: 1 }}
              >
                {node.pct !== '100%' && (
                  <div
                    className="absolute -right-1.5 top-1/4 w-1.5 rounded-full bg-red-400"
                    style={{ height: `${Math.max(8, (100 - parseInt(node.pct)) * 0.4)}px` }}
                  />
                )}
                <div className="px-3 pt-3 pb-2">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: `${iconColors[node.icon]}20` }}>
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke={iconColors[node.icon]} strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d={iconPaths[node.icon]} />
                      </svg>
                    </div>
                    <span className="text-xs font-semibold text-text-primary leading-tight">{node.label}</span>
                  </div>
                  <div className="text-[10px] text-text-secondary ml-7">{node.sublabel}</div>
                </div>
                <div className="border-t border-gray-100 px-3 py-2 flex items-baseline justify-between">
                  <span className={`text-base font-bold ${node.active ? 'text-text-primary' : 'text-text-secondary'}`}>{node.pct}</span>
                  <span className="text-[10px] text-text-secondary">{node.count}</span>
                </div>
                {node.persona && (
                  <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center text-white text-[7px] font-bold border-2 border-white z-10">BS</div>
                )}
              </div>
            ))}

            {/* Budi indicator */}
            <div className="absolute flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-full px-3 py-1" style={{ left: 960, top: 310, zIndex: 2 }}>
              <div className="w-5 h-5 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center text-white text-[8px] font-bold">BS</div>
              <span className="text-[10px] text-emerald-700 font-medium">Budi is here</span>
            </div>
          </div>
        </div>

        {/* Key differences + drop-off */}
        <div className="grid grid-cols-2 gap-5">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="text-xs font-semibold text-blue-900 mb-2">How This Differs from SG</h4>
            <ul className="space-y-1.5 text-xs text-blue-800">
              <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">•</span>Entry is lead form submission, not propensity score</li>
              <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">•</span>Journey focuses on onboarding, not cross-sell</li>
              <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">•</span>KYC gate is the critical conversion point</li>
              <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">•</span>WhatsApp as advisor channel (vs. branch in SG)</li>
            </ul>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 flex items-start gap-3">
            <span className="text-lg">⚠️</span>
            <div>
              <p className="text-sm font-medium text-amber-900 mb-1">KYC Drop-off Path</p>
              <p className="text-sm text-amber-800">
                Budi started KYC but abandoned at document upload. The platform triggers an <strong>advisor follow-up via WhatsApp</strong> — the preferred channel in Indonesia.
              </p>
            </div>
          </div>
        </div>

        {/* Narrator callout */}
        <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 flex items-start gap-3">
          <span className="text-lg">💬</span>
          <p className="text-sm text-emerald-900">
            <strong>"Same platform, completely different journey. Acquisition in Indonesia requires different triggers, different channels, different conversion gates — but the orchestration engine is the same."</strong>
          </p>
        </div>
      </div>
    </DemoLayout>
  );
}
