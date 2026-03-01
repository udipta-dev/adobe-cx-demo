import DemoLayout from '../../components/layout/DemoLayout';
import { budi } from '../../data/budi';

export default function BudiProfile() {
  return (
    <DemoLayout flow="id">
      <div className="max-w-6xl mx-auto space-y-5 animate-fadeIn">
        {/* Three-column AEP-style cards */}
        <div className="grid grid-cols-3 gap-5">
          {/* Column 1: Customer Profile */}
          <div className="bg-bg-card rounded-lg border border-border p-5">
            <h3 className="text-xs font-semibold text-text-secondary uppercase tracking-wide mb-4">Prospect profile</h3>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center text-white text-lg font-semibold shrink-0">
                {budi.initials}
              </div>
              <div>
                <h2 className="text-lg font-semibold text-text-primary">{budi.name}</h2>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="text-xs bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded font-medium">{budi.location}</span>
                  <span className="text-xs text-text-secondary">Age {budi.age}</span>
                  <span className="text-xs bg-amber-50 text-amber-700 px-2 py-0.5 rounded font-medium">NEW</span>
                </div>
              </div>
            </div>
            <div className="space-y-2.5 text-sm">
              <div className="flex justify-between">
                <span className="text-text-secondary">Source</span>
                <span className="text-text-primary font-medium">Instagram Ad</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-secondary">Status</span>
                <span className="text-amber-600 font-medium">KYC Incomplete</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-secondary">Regulatory</span>
                <span className="text-green-600 font-medium flex items-center gap-1">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                  OJK
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-secondary">Segment</span>
                <span className="text-text-primary font-medium">{budi.segment}</span>
              </div>
            </div>

            {/* Propensity Score inline */}
            <div className="mt-4 pt-4 border-t border-border">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-text-secondary uppercase tracking-wide">Acquisition Likelihood</span>
                <span className="text-xs font-semibold bg-warning/10 text-warning px-2 py-0.5 rounded">{budi.propensityLabel}</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="relative w-16 h-16">
                  <svg className="w-16 h-16 -rotate-90" viewBox="0 0 120 120">
                    <circle cx="60" cy="60" r="50" fill="none" stroke="#E1E1E1" strokeWidth="10" />
                    <circle cx="60" cy="60" r="50" fill="none" stroke="#E68619" strokeWidth="10"
                      strokeDasharray={`${budi.propensityScore * 314} 314`}
                      strokeLinecap="round" />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-lg font-bold text-text-primary">{budi.propensityScore}</span>
                  </div>
                </div>
                <div>
                  <div className="text-sm font-medium text-text-primary">{budi.propensityProduct}</div>
                  <div className="text-xs text-text-secondary mt-0.5">Score improves with more data</div>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Basic Attributes */}
          <div className="bg-bg-card rounded-lg border border-border p-5">
            <h3 className="text-xs font-semibold text-text-secondary uppercase tracking-wide mb-4">Basic Attributes</h3>
            <div className="space-y-3 text-sm">
              {[
                ['First Name', budi.name.split(' ')[0]],
                ['Last Name', budi.name.split(' ')[1]],
                ['Personal Email', budi.email || 'budi.santoso@gmail.com'],
                ['Channel Pref', budi.channelPref],
                ['Products Held', `${budi.productsHeld} (${budi.productName})`],
                ['Lifecycle', budi.lifecycle],
                ['Digital Activity', budi.digitalBehavior],
                ['Tenure', budi.tenure],
              ].map(([label, value]) => (
                <div key={label} className="flex justify-between items-start gap-4">
                  <span className="text-text-secondary shrink-0">{label}</span>
                  <span className="text-text-primary text-right">{value}</span>
                </div>
              ))}
              {/* Consent row */}
              <div className="pt-2 border-t border-border">
                <span className="text-text-secondary text-xs block mb-2">Consent Status</span>
                <div className="flex gap-1.5 flex-wrap">
                  {Object.entries(budi.consent).map(([ch, ok]) => (
                    <span key={ch} className={`text-xs px-2 py-0.5 rounded ${ok ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                      {ch.charAt(0).toUpperCase() + ch.slice(1)} {ok ? '\u2713' : '\u2717'}
                    </span>
                  ))}
                </div>
              </div>
              {/* Profile completeness */}
              <div className="pt-2 border-t border-border">
                <div className="flex justify-between items-center mb-1.5">
                  <span className="text-text-secondary">Profile Completeness</span>
                  <span className="font-medium text-amber-600">{budi.profileCompleteness}%</span>
                </div>
                <div className="relative h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <div className="absolute inset-y-0 left-0 bg-amber-500 rounded-full" style={{ width: `${budi.profileCompleteness}%` }} />
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: Data Sources */}
          <div className="bg-bg-card rounded-lg border border-border p-5">
            <h3 className="text-xs font-semibold text-text-secondary uppercase tracking-wide mb-4">Data sources</h3>
            <div className="space-y-3">
              {budi.dataSources.map((ds) => (
                <div key={ds.name} className="flex items-start gap-3">
                  <div className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${
                    ds.color === 'pink' ? 'bg-pink-500' :
                    ds.color === 'blue' ? 'bg-blue-500' :
                    ds.color === 'green' ? 'bg-green-500' :
                    'bg-orange-500'
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
                    <div className="text-xs text-text-secondary mt-0.5">{ds.description}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 bg-gray-50 rounded-lg p-3 text-center">
              <p className="text-xs text-text-secondary">Fewer sources than mature markets — profile builds progressively</p>
            </div>
            <div className="mt-3 pt-3 border-t border-border">
              <button className="text-xs text-adobe-blue font-medium hover:underline cursor-default">View identity graph</button>
            </div>
          </div>
        </div>

        {/* Narrator callout */}
        <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 flex items-start gap-3">
          <span className="text-lg">💬</span>
          <p className="text-sm text-emerald-900">
            <strong>"In emerging markets, you start with less data. The platform doesn't wait for a complete picture — it works with what it has and gets smarter with every interaction."</strong>
          </p>
        </div>
      </div>
    </DemoLayout>
  );
}
