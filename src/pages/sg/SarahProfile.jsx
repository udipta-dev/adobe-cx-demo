import DemoLayout from '../../components/layout/DemoLayout';
import { sarah } from '../../data/sarah';

export default function SarahProfile() {
  return (
    <DemoLayout flow="sg">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Profile Header Card */}
        <div className="bg-bg-card rounded-xl border border-border p-6">
          <div className="flex items-start gap-6">
            {/* Avatar */}
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white text-2xl font-semibold shrink-0">
              {sarah.initials}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-1">
                <h2 className="text-2xl font-semibold text-text-primary">{sarah.name}</h2>
                <span className="text-xs bg-blue-50 text-blue-700 px-2.5 py-0.5 rounded-full font-medium">{sarah.location}</span>
                <span className="text-xs bg-gray-100 text-text-secondary px-2.5 py-0.5 rounded-full">Age {sarah.age}</span>
              </div>
              <p className="text-text-secondary text-sm mb-4">{sarah.accountType} — {sarah.tenure}</p>

              {/* Key stats grid */}
              <div className="grid grid-cols-4 gap-4">
                <div className="bg-bg-primary rounded-lg p-3">
                  <div className="text-xs text-text-secondary mb-0.5">Balance</div>
                  <div className="text-lg font-semibold text-text-primary">{sarah.balance}</div>
                </div>
                <div className="bg-bg-primary rounded-lg p-3">
                  <div className="text-xs text-text-secondary mb-0.5">Digital Activity</div>
                  <div className="text-sm font-medium text-text-primary">{sarah.digitalBehavior}</div>
                </div>
                <div className="bg-bg-primary rounded-lg p-3">
                  <div className="text-xs text-text-secondary mb-0.5">Recent Behavior</div>
                  <div className="text-sm font-medium text-text-primary">{sarah.recentActivity}</div>
                </div>
                <div className="bg-bg-primary rounded-lg p-3">
                  <div className="text-xs text-text-secondary mb-0.5">Branch</div>
                  <div className="text-sm font-medium text-text-primary">{sarah.branchActivity}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {/* Propensity Score */}
          <div className="bg-bg-card rounded-xl border border-border p-6">
            <h3 className="text-sm font-medium text-text-secondary mb-4">AI Propensity Score</h3>
            <div className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-3">
                <svg className="w-32 h-32 -rotate-90" viewBox="0 0 120 120">
                  <circle cx="60" cy="60" r="50" fill="none" stroke="#E1E1E1" strokeWidth="10" />
                  <circle cx="60" cy="60" r="50" fill="none" stroke="#E34850" strokeWidth="10"
                    strokeDasharray={`${sarah.propensityScore * 314} 314`}
                    strokeLinecap="round" />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-3xl font-bold text-text-primary">{sarah.propensityScore}</span>
                  <span className="text-xs font-medium text-adobe-red">{sarah.propensityLabel}</span>
                </div>
              </div>
              <p className="text-sm font-medium text-text-primary">{sarah.propensityProduct}</p>
            </div>
          </div>

          {/* Quick Attributes */}
          <div className="bg-bg-card rounded-xl border border-border p-6">
            <h3 className="text-sm font-medium text-text-secondary mb-4">Key Attributes</h3>
            <div className="space-y-3">
              {[
                ['Segment', sarah.segment],
                ['Lifecycle', sarah.lifecycle],
                ['Channel Pref', sarah.channelPref],
                ['Products', `${sarah.productsHeld} (${sarah.productName})`],
                ['Tenure', sarah.tenure],
              ].map(([label, value]) => (
                <div key={label} className="flex justify-between items-center">
                  <span className="text-sm text-text-secondary">{label}</span>
                  <span className="text-sm font-medium text-text-primary">{value}</span>
                </div>
              ))}
              <div className="flex justify-between items-center">
                <span className="text-sm text-text-secondary">Consent</span>
                <div className="flex gap-1.5">
                  {Object.entries(sarah.consent).map(([ch, ok]) => (
                    <span key={ch} className={`text-xs px-2 py-0.5 rounded-full ${ok ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                      {ch.charAt(0).toUpperCase() + ch.slice(1)} {ok ? '\u2713' : '\u2717'}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Data Sources */}
          <div className="bg-bg-card rounded-xl border border-border p-6">
            <h3 className="text-sm font-medium text-text-secondary mb-4">Data Sources Feeding Profile</h3>
            <div className="space-y-3">
              {sarah.dataSources.map((ds) => (
                <div key={ds.name} className="flex items-start gap-3">
                  <div className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${
                    ds.color === 'blue' ? 'bg-blue-500' :
                    ds.color === 'purple' ? 'bg-purple-500' :
                    ds.color === 'green' ? 'bg-green-500' :
                    ds.color === 'orange' ? 'bg-orange-500' :
                    'bg-red-500'
                  }`} />
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-text-primary">{ds.name}</span>
                      <span className={`text-[9px] font-semibold px-1.5 py-0.5 rounded ${
                        ds.stack === 'existing'
                          ? 'bg-gray-100 text-gray-600 border border-gray-200'
                          : 'bg-blue-50 text-adobe-blue border border-blue-200'
                      }`}>
                        {ds.stack === 'existing' ? 'DEPLOYED' : 'NEW'} — {ds.tool}
                      </span>
                    </div>
                    <div className="text-xs text-text-secondary">{ds.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Narrator callout */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 flex items-start gap-3">
          <span className="text-lg">💬</span>
          <p className="text-sm text-blue-900">
            <strong>"Right now your teams make decisions on partial data. This is what it looks like when you see the whole customer."</strong>
          </p>
        </div>
      </div>
    </DemoLayout>
  );
}
