import DemoLayout from '../../components/layout/DemoLayout';

const nodes = [
  { id: 'entry', label: 'Propensity Trigger', sublabel: 'Score crosses 0.80', x: 30, y: 160, pct: '100%', count: '1,520', icon: 'trigger', active: true },
  { id: 'check', label: 'Channel Check', sublabel: 'Preference lookup', x: 220, y: 160, pct: '100%', count: '1,520', icon: 'condition', active: true },
  { id: 'inapp', label: 'In-App Offer', sublabel: 'Card offer + rate', x: 410, y: 70, pct: '68%', count: '1,034', icon: 'action', active: true, persona: true },
  { id: 'email', label: 'Email Campaign', sublabel: 'Card benefits + CTA', x: 410, y: 280, pct: '32%', count: '486', icon: 'action' },
  { id: 'engaged', label: 'Engaged?', sublabel: 'Within 48 hours', x: 600, y: 70, pct: '74%', count: '765', icon: 'condition', active: true },
  { id: 'app', label: 'Application', sublabel: 'Pre-filled form', x: 790, y: 20, pct: '51%', count: '390', icon: 'action', active: true, persona: true },
  { id: 'push', label: 'Push Fallback', sublabel: 'Urgency offer', x: 790, y: 170, pct: '26%', count: '199', icon: 'action' },
  { id: 'wait', label: 'Wait 48h', sublabel: 'Fallback path', x: 600, y: 280, pct: '45%', count: '219', icon: 'wait' },
];

const edges = [
  { from: 'entry', to: 'check', active: true, pct: '100%' },
  { from: 'check', to: 'inapp', active: true, pct: '68%' },
  { from: 'check', to: 'email', pct: '32%' },
  { from: 'inapp', to: 'engaged', active: true, pct: '74%' },
  { from: 'email', to: 'wait', pct: '45%' },
  { from: 'engaged', to: 'app', active: true, pct: '51%' },
  { from: 'engaged', to: 'push', pct: '26%' },
  { from: 'wait', to: 'push', pct: '22%' },
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

export default function SGJourney() {
  return (
    <DemoLayout flow="sg">
      <div className="max-w-6xl mx-auto space-y-5 animate-fadeIn">
        {/* Journey Title */}
        <div className="bg-bg-card rounded-lg border border-border p-5">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <h2 className="text-lg font-semibold text-text-primary">Credit Card Cross-Sell Journey</h2>
            </div>
            <span className="text-xs bg-green-50 text-green-700 px-3 py-1 rounded-full font-medium">LIVE</span>
          </div>
          <p className="text-sm text-text-secondary">Automatically triggered when propensity score crosses 0.80. Sarah's path is highlighted below.</p>
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
        <div className="bg-blue-50 border border-blue-100 rounded-lg px-4 py-2.5 flex items-center gap-2">
          <svg className="w-4 h-4 text-adobe-blue shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
          </svg>
          <span className="text-xs text-blue-800">The path with the highest conversion rate is <strong>In-App → Engaged → Application</strong> at <strong>51%</strong>.</span>
        </div>

        {/* Journey Canvas - CJA style */}
        <div className="bg-bg-card rounded-lg border border-border p-6 overflow-x-auto">
          <div className="relative" style={{ width: 960, height: 370 }}>
            {/* SVG Edges - Sankey style thick paths */}
            <svg className="absolute inset-0" width="960" height="370" style={{ zIndex: 0 }}>
              <defs>
                <linearGradient id="activeGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#C8D8E8" />
                  <stop offset="100%" stopColor="#D4E2EF" />
                </linearGradient>
                <linearGradient id="inactiveGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#E8E8E8" />
                  <stop offset="100%" stopColor="#EFEFEF" />
                </linearGradient>
              </defs>
              {edges.map((edge, i) => {
                const from = nodes.find(n => n.id === edge.from);
                const to = nodes.find(n => n.id === edge.to);
                const x1 = from.x + 160;
                const y1 = from.y + 48;
                const x2 = to.x;
                const y2 = to.y + 48;
                const midX = (x1 + x2) / 2;
                const thickness = edge.active ? 12 : 6;
                const halfT = thickness / 2;
                return (
                  <g key={i}>
                    {/* Thick flowing path */}
                    <path
                      d={`M ${x1} ${y1 - halfT} C ${midX} ${y1 - halfT}, ${midX} ${y2 - halfT}, ${x2} ${y2 - halfT} L ${x2} ${y2 + halfT} C ${midX} ${y2 + halfT}, ${midX} ${y1 + halfT}, ${x1} ${y1 + halfT} Z`}
                      fill={edge.active ? 'url(#activeGrad)' : 'url(#inactiveGrad)'}
                      opacity={0.7}
                    />
                    {/* Label on path */}
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

            {/* Node cards - CJA style: white bg, icon, title, divider, metric */}
            {nodes.map((node) => (
              <div
                key={node.id}
                className={`absolute bg-white rounded-lg border shadow-sm w-[155px] ${node.active ? 'border-gray-200' : 'border-gray-100'}`}
                style={{ left: node.x, top: node.y, zIndex: 1 }}
              >
                {/* Fallout bar */}
                {node.pct !== '100%' && (
                  <div
                    className="absolute -right-1.5 top-1/4 w-1.5 rounded-full bg-red-400"
                    style={{ height: `${Math.max(10, (100 - parseInt(node.pct)) * 0.5)}px` }}
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
                {/* Persona indicator */}
                {node.persona && (
                  <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white text-[7px] font-bold border-2 border-white z-10">ST</div>
                )}
              </div>
            ))}

            {/* Sarah path indicator */}
            <div className="absolute flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-3 py-1" style={{ left: 720, top: 330, zIndex: 2 }}>
              <div className="w-5 h-5 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white text-[8px] font-bold">ST</div>
              <span className="text-[10px] text-blue-700 font-medium">Sarah's path</span>
            </div>
          </div>
        </div>

        {/* Drop-off path callout */}
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <span className="text-lg">⚠️</span>
            <div>
              <p className="text-sm font-medium text-amber-900 mb-1">Application Drop-off Path</p>
              <p className="text-sm text-amber-800">
                If Sarah starts the application but abandons at income verification, the journey triggers a <strong>branch advisor alert</strong> with her context. The advisor can follow up with a personalized call within 24 hours.
              </p>
            </div>
          </div>
        </div>

        {/* Narrator callout */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-start gap-3">
          <span className="text-lg">💬</span>
          <p className="text-sm text-blue-900">
            <strong>"This journey runs 24/7 without a marketer touching it. Your team designs once, the platform executes for every customer."</strong>
          </p>
        </div>
      </div>
    </DemoLayout>
  );
}
