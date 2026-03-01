import DemoLayout from '../../components/layout/DemoLayout';
import { budi } from '../../data/budi';

export default function BudiProfile() {
  return (
    <DemoLayout flow="id">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Profile Header Card */}
        <div className="bg-bg-card rounded-xl border border-border p-6">
          <div className="flex items-start gap-6">
            {/* Avatar */}
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center text-white text-2xl font-semibold shrink-0">
              {budi.initials}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-1">
                <h2 className="text-2xl font-semibold text-text-primary">{budi.name}</h2>
                <span className="text-xs bg-emerald-50 text-emerald-700 px-2.5 py-0.5 rounded-full font-medium">{budi.location}</span>
                <span className="text-xs bg-gray-100 text-text-secondary px-2.5 py-0.5 rounded-full">Age {budi.age}</span>
                <span className="text-xs bg-amber-50 text-amber-700 px-2.5 py-0.5 rounded-full font-medium">NEW PROSPECT</span>
              </div>
              <p className="text-text-secondary text-sm mb-4">{budi.accountType} — {budi.tenure}</p>

              {/* Key stats grid */}
              <div className="grid grid-cols-4 gap-4">
                <div className="bg-bg-primary rounded-lg p-3">
                  <div className="text-xs text-text-secondary mb-0.5">Source</div>
                  <div className="text-sm font-medium text-text-primary">Instagram Ad</div>
                </div>
                <div className="bg-bg-primary rounded-lg p-3">
                  <div className="text-xs text-text-secondary mb-0.5">Digital Activity</div>
                  <div className="text-sm font-medium text-text-primary">{budi.digitalBehavior}</div>
                </div>
                <div className="bg-bg-primary rounded-lg p-3">
                  <div className="text-xs text-text-secondary mb-0.5">Status</div>
                  <div className="text-sm font-medium text-amber-600">KYC Incomplete</div>
                </div>
                <div className="bg-bg-primary rounded-lg p-3">
                  <div className="text-xs text-text-secondary mb-0.5">Regulatory</div>
                  <div className="text-sm font-medium text-green-600 flex items-center gap-1">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                    OJK Compliant
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {/* Propensity Score */}
          <div className="bg-bg-card rounded-xl border border-border p-6">
            <h3 className="text-sm font-medium text-text-secondary mb-4">Acquisition Likelihood</h3>
            <div className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-3">
                <svg className="w-32 h-32 -rotate-90" viewBox="0 0 120 120">
                  <circle cx="60" cy="60" r="50" fill="none" stroke="#E1E1E1" strokeWidth="10" />
                  <circle cx="60" cy="60" r="50" fill="none" stroke="#E68619" strokeWidth="10"
                    strokeDasharray={`${budi.propensityScore * 314} 314`}
                    strokeLinecap="round" />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-3xl font-bold text-text-primary">{budi.propensityScore}</span>
                  <span className="text-xs font-medium text-warning">{budi.propensityLabel}</span>
                </div>
              </div>
              <p className="text-sm font-medium text-text-primary">{budi.propensityProduct}</p>
              <p className="text-xs text-text-secondary mt-1">Fewer signals — score will improve with more data</p>
            </div>
          </div>

          {/* Quick Attributes */}
          <div className="bg-bg-card rounded-xl border border-border p-6">
            <h3 className="text-sm font-medium text-text-secondary mb-4">Key Attributes</h3>
            <div className="space-y-3">
              {[
                ['Segment', budi.segment],
                ['Lifecycle', budi.lifecycle],
                ['Channel Pref', budi.channelPref],
                ['Products', `${budi.productsHeld} (${budi.productName})`],
                ['Tenure', budi.tenure],
              ].map(([label, value]) => (
                <div key={label} className="flex justify-between items-center">
                  <span className="text-sm text-text-secondary">{label}</span>
                  <span className="text-sm font-medium text-text-primary">{value}</span>
                </div>
              ))}
              <div className="flex justify-between items-center">
                <span className="text-sm text-text-secondary">Consent</span>
                <div className="flex gap-1.5">
                  {Object.entries(budi.consent).map(([ch, ok]) => (
                    <span key={ch} className={`text-xs px-2 py-0.5 rounded-full ${ok ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                      {ch.charAt(0).toUpperCase() + ch.slice(1)} {ok ? '\u2713' : '\u2717'}
                    </span>
                  ))}
                </div>
              </div>
              {/* Profile completeness */}
              <div className="pt-3 border-t border-border">
                <div className="flex justify-between items-center mb-1.5">
                  <span className="text-sm text-text-secondary">Profile Completeness</span>
                  <span className="text-sm font-medium text-amber-600">{budi.profileCompleteness}%</span>
                </div>
                <div className="relative h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="absolute inset-y-0 left-0 bg-amber-500 rounded-full" style={{ width: `${budi.profileCompleteness}%` }} />
                </div>
              </div>
            </div>
          </div>

          {/* Data Sources */}
          <div className="bg-bg-card rounded-xl border border-border p-6">
            <h3 className="text-sm font-medium text-text-secondary mb-4">Data Sources</h3>
            <div className="space-y-3">
              {budi.dataSources.map((ds) => (
                <div key={ds.name} className="flex items-start gap-3">
                  <div className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${
                    ds.color === 'pink' ? 'bg-pink-500' :
                    ds.color === 'blue' ? 'bg-blue-500' :
                    ds.color === 'green' ? 'bg-green-500' :
                    'bg-orange-500'
                  }`} />
                  <div>
                    <div className="text-sm font-medium text-text-primary">{ds.name}</div>
                    <div className="text-xs text-text-secondary">{ds.description}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 bg-gray-50 rounded-lg p-3 text-center">
              <p className="text-xs text-text-secondary">Fewer sources than mature markets — profile builds progressively</p>
            </div>
          </div>
        </div>

        {/* Narrator callout */}
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 flex items-start gap-3">
          <span className="text-lg">💬</span>
          <p className="text-sm text-emerald-900">
            <strong>"In emerging markets, you start with less data. The platform doesn't wait for a complete picture — it works with what it has and gets smarter with every interaction."</strong>
          </p>
        </div>
      </div>
    </DemoLayout>
  );
}
