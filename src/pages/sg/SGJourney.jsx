import DemoLayout from '../../components/layout/DemoLayout';

const nodes = [
  { id: 'entry', label: 'ENTRY', sublabel: 'Propensity score\ncrosses 0.80', x: 60, y: 200, type: 'trigger', active: true },
  { id: 'check', label: 'CHECK', sublabel: 'Channel\npreference', x: 250, y: 200, type: 'condition', active: true },
  { id: 'inapp', label: 'IN-APP', sublabel: 'Personalized card\noffer with rate', x: 440, y: 120, type: 'action', active: true, highlight: true },
  { id: 'email', label: 'EMAIL', sublabel: 'Detailed card\nbenefits + CTA', x: 440, y: 300, type: 'action' },
  { id: 'engaged', label: 'ENGAGED?', sublabel: 'Within\n48 hours?', x: 630, y: 120, type: 'condition', active: true },
  { id: 'app', label: 'APPLICATION', sublabel: 'Deep-link to\npre-filled form', x: 820, y: 60, type: 'action', active: true, highlight: true },
  { id: 'push', label: 'PUSH', sublabel: 'Last-chance offer\nwith urgency', x: 820, y: 200, type: 'action' },
  { id: 'wait', label: 'WAIT 48H', sublabel: 'No response\nfallback path', x: 630, y: 260, type: 'wait' },
];

const edges = [
  { from: 'entry', to: 'check', label: '', active: true },
  { from: 'check', to: 'inapp', label: 'Mobile\npreferred', active: true },
  { from: 'check', to: 'email', label: 'Email\npreferred' },
  { from: 'inapp', to: 'engaged', label: '', active: true },
  { from: 'email', to: 'wait', label: '' },
  { from: 'engaged', to: 'app', label: 'Yes \u2713', active: true },
  { from: 'engaged', to: 'push', label: 'No \u2717' },
  { from: 'wait', to: 'push', label: '' },
];

function getNodeColor(type, active, highlight) {
  if (highlight) return { bg: 'bg-adobe-blue', text: 'text-white', border: 'border-adobe-blue' };
  if (active) {
    switch (type) {
      case 'trigger': return { bg: 'bg-purple-600', text: 'text-white', border: 'border-purple-600' };
      case 'condition': return { bg: 'bg-amber-500', text: 'text-white', border: 'border-amber-500' };
      case 'action': return { bg: 'bg-adobe-blue', text: 'text-white', border: 'border-adobe-blue' };
      default: return { bg: 'bg-gray-500', text: 'text-white', border: 'border-gray-500' };
    }
  }
  return { bg: 'bg-white', text: 'text-text-secondary', border: 'border-border' };
}

export default function SGJourney() {
  return (
    <DemoLayout flow="sg">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Journey Title */}
        <div className="bg-bg-card rounded-xl border border-border p-6">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <h2 className="text-lg font-semibold text-text-primary">Credit Card Cross-Sell Journey</h2>
            </div>
            <span className="text-xs bg-green-50 text-green-700 px-3 py-1 rounded-full font-medium">LIVE</span>
          </div>
          <p className="text-sm text-text-secondary">Automatically triggered when propensity score crosses 0.80. Sarah's path is highlighted below.</p>
        </div>

        {/* Journey Canvas */}
        <div className="bg-bg-card rounded-xl border border-border p-6 overflow-x-auto">
          <div className="relative" style={{ width: 960, height: 380 }}>
            {/* SVG Edges */}
            <svg className="absolute inset-0" width="960" height="380" style={{ zIndex: 0 }}>
              {edges.map((edge, i) => {
                const from = nodes.find(n => n.id === edge.from);
                const to = nodes.find(n => n.id === edge.to);
                const x1 = from.x + 75;
                const y1 = from.y + 25;
                const x2 = to.x;
                const y2 = to.y + 25;
                const midX = (x1 + x2) / 2;
                return (
                  <g key={i}>
                    <path
                      d={`M ${x1} ${y1} C ${midX} ${y1}, ${midX} ${y2}, ${x2} ${y2}`}
                      fill="none"
                      stroke={edge.active ? '#1473E6' : '#D1D5DB'}
                      strokeWidth={edge.active ? 2.5 : 1.5}
                      strokeDasharray={edge.active ? '' : '6 4'}
                    />
                    {/* Arrow */}
                    <circle cx={x2 - 2} cy={y2} r={3} fill={edge.active ? '#1473E6' : '#D1D5DB'} />
                    {/* Label */}
                    {edge.label && (
                      <text x={midX} y={(y1 + y2) / 2 - 6} textAnchor="middle" className="text-[10px]" fill={edge.active ? '#1473E6' : '#9CA3AF'}>
                        {edge.label.split('\n').map((line, li) => (
                          <tspan key={li} x={midX} dy={li === 0 ? 0 : 12}>{line}</tspan>
                        ))}
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
                  className={`absolute rounded-lg border-2 ${colors.border} ${colors.bg} px-3 py-2 w-[150px] text-center shadow-sm`}
                  style={{ left: node.x, top: node.y, zIndex: 1 }}
                >
                  <div className={`text-xs font-bold ${colors.text} mb-0.5`}>{node.label}</div>
                  <div className={`text-[10px] ${node.active ? 'text-white/80' : 'text-text-secondary'} whitespace-pre-line leading-tight`}>
                    {node.sublabel}
                  </div>
                  {node.highlight && (
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white" />
                  )}
                </div>
              );
            })}

            {/* Sarah indicator */}
            <div className="absolute flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-3 py-1" style={{ left: 750, top: 10, zIndex: 2 }}>
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white text-[10px] font-bold">ST</div>
              <span className="text-xs text-blue-700 font-medium">Sarah's path</span>
            </div>
          </div>
        </div>

        {/* Drop-off path callout */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
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
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 flex items-start gap-3">
          <span className="text-lg">💬</span>
          <p className="text-sm text-blue-900">
            <strong>"This journey runs 24/7 without a marketer touching it. Your team designs once, the platform executes for every customer."</strong>
          </p>
        </div>
      </div>
    </DemoLayout>
  );
}
