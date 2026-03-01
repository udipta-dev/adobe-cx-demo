import DemoLayout from '../../components/layout/DemoLayout';
import { sarah } from '../../data/sarah';

const typeColors = {
  'AI Signal': 'bg-purple-100 text-purple-700',
  'Web': 'bg-blue-100 text-blue-700',
  'Email': 'bg-green-100 text-green-700',
  'Branch': 'bg-orange-100 text-orange-700',
  'CRM': 'bg-teal-100 text-teal-700',
};

export default function SarahUnifiedProfile() {
  return (
    <DemoLayout flow="sg">
      <div className="max-w-6xl mx-auto space-y-5 animate-fadeIn">
        {/* Top: Identity + Attributes + Score */}
        <div className="grid grid-cols-3 gap-5">
          {/* Identity Resolution */}
          <div className="bg-bg-card rounded-lg border border-border p-5">
            <div className="flex items-center gap-2 mb-4">
              <h3 className="text-sm font-medium text-text-secondary">Identity Resolution</h3>
              <span className="text-xs bg-green-50 text-green-700 px-2 py-0.5 rounded-full">{sarah.identities.length} Sources Merged</span>
            </div>

            {/* Identity graph visualization */}
            <div className="relative flex flex-col items-center mb-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white font-semibold mb-3">
                {sarah.initials}
              </div>
              <div className="space-y-2 w-full">
                {sarah.identities.map((id, i) => (
                  <div key={i} className="flex items-center gap-2 bg-bg-primary rounded-lg px-3 py-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-adobe-blue" />
                    <div className="flex-1 min-w-0">
                      <div className="text-xs text-text-secondary">{id.type}</div>
                      <div className="text-sm font-mono text-text-primary truncate">{id.value}</div>
                    </div>
                    <span className="text-[10px] text-text-secondary">{id.source}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Key Attributes */}
          <div className="bg-bg-card rounded-lg border border-border p-5">
            <h3 className="text-sm font-medium text-text-secondary mb-4">Key Attributes</h3>
            <div className="space-y-3">
              {[
                ['Segment', sarah.segment, 'bg-blue-50 text-blue-700'],
                ['Lifecycle', sarah.lifecycle, 'bg-amber-50 text-amber-700'],
                ['Channel Pref', sarah.channelPref, 'bg-purple-50 text-purple-700'],
                ['Products', `${sarah.productsHeld} (${sarah.productName})`, ''],
                ['Tenure', sarah.tenure, ''],
              ].map(([label, value, badge]) => (
                <div key={label} className="flex justify-between items-center">
                  <span className="text-sm text-text-secondary">{label}</span>
                  {badge ? (
                    <span className={`text-xs px-2.5 py-0.5 rounded-full font-medium ${badge}`}>{value}</span>
                  ) : (
                    <span className="text-sm font-medium text-text-primary">{value}</span>
                  )}
                </div>
              ))}
              <div className="pt-2 border-t border-border">
                <div className="text-xs text-text-secondary mb-2">Consent Status</div>
                <div className="flex gap-2">
                  {Object.entries(sarah.consent).map(([ch, ok]) => (
                    <span key={ch} className={`text-xs px-2.5 py-1 rounded-md ${ok ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
                      {ch.charAt(0).toUpperCase() + ch.slice(1)} {ok ? '\u2713' : '\u2717'}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* AI Propensity Score */}
          <div className="bg-bg-card rounded-lg border border-border p-5">
            <h3 className="text-sm font-medium text-text-secondary mb-4">AI Propensity Score</h3>
            <div className="bg-gradient-to-br from-purple-50 to-red-50 rounded-lg p-5 text-center">
              <div className="text-xs text-text-secondary mb-2">{sarah.propensityProduct}</div>
              <div className="text-5xl font-bold text-text-primary mb-1">{sarah.propensityScore}</div>
              <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-adobe-red text-white">
                {sarah.propensityLabel}
              </span>
            </div>
            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-2 text-xs text-text-secondary">
                <div className="w-3 h-3 rounded-full bg-purple-400" />
                Built from behavioral signals across 5 data sources
              </div>
              <div className="flex items-center gap-2 text-xs text-text-secondary">
                <div className="w-3 h-3 rounded-full bg-orange-400" />
                Score moved from 0.71 → 0.82 today
              </div>
            </div>
          </div>
        </div>

        {/* Behavioral Events Timeline */}
        <div className="bg-bg-card rounded-lg border border-border p-5">
          <h3 className="text-sm font-medium text-text-secondary mb-5">Behavioral Events Timeline</h3>
          <div className="space-y-0">
            {sarah.timeline.map((event, i) => (
              <div key={i} className="flex items-start gap-4 relative">
                {/* Timeline line */}
                {i < sarah.timeline.length - 1 && (
                  <div className="absolute left-[19px] top-10 w-0.5 h-full bg-border" />
                )}
                {/* Date */}
                <div className="w-24 text-right shrink-0 pt-1">
                  <span className="text-xs text-text-secondary">{event.date}</span>
                </div>
                {/* Dot */}
                <div className={`w-3 h-3 rounded-full mt-1.5 shrink-0 ring-4 ring-bg-card z-10 ${
                  event.color === 'purple' ? 'bg-purple-500' :
                  event.color === 'blue' ? 'bg-blue-500' :
                  event.color === 'green' ? 'bg-green-500' :
                  event.color === 'orange' ? 'bg-orange-500' :
                  'bg-teal-500'
                }`} />
                {/* Content */}
                <div className="flex-1 pb-6">
                  <span className={`inline-block text-[10px] font-medium px-2 py-0.5 rounded-full mb-1 ${typeColors[event.type] || 'bg-gray-100 text-gray-700'}`}>
                    {event.type}
                  </span>
                  <p className="text-sm text-text-primary">{event.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Narrator callout */}
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 flex items-start gap-3">
          <span className="text-lg">💬</span>
          <p className="text-sm text-purple-900">
            <strong>"No analyst ran a query. The AI flagged Sarah based on her patterns across web browsing, email engagement, and branch visits."</strong>
          </p>
        </div>
      </div>
    </DemoLayout>
  );
}
