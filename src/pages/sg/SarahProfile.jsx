import DemoLayout from '../../components/layout/DemoLayout';
import { sarah } from '../../data/sarah';

export default function SarahProfile() {
  return (
    <DemoLayout flow="sg">
      <div className="max-w-6xl mx-auto space-y-5 animate-fadeIn">
        {/* Three-column AEP-style cards */}
        <div className="grid grid-cols-3 gap-5">
          {/* Column 1: Customer Profile */}
          <div className="bg-bg-card rounded-lg border border-border p-5">
            <h3 className="text-xs font-semibold text-text-secondary uppercase tracking-wide mb-4">Customer profile</h3>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white text-lg font-semibold shrink-0">
                {sarah.initials}
              </div>
              <div>
                <h2 className="text-lg font-semibold text-text-primary">{sarah.name}</h2>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded font-medium">{sarah.location}</span>
                  <span className="text-xs text-text-secondary">Age {sarah.age}</span>
                </div>
              </div>
            </div>
            <div className="space-y-2.5 text-sm">
              <div className="flex justify-between">
                <span className="text-text-secondary">Account</span>
                <span className="text-text-primary font-medium">{sarah.accountType}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-secondary">Tenure</span>
                <span className="text-text-primary font-medium">{sarah.tenure}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-secondary">Balance</span>
                <span className="text-text-primary font-semibold">{sarah.balance}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-secondary">Segment</span>
                <span className="text-text-primary font-medium">{sarah.segment}</span>
              </div>
            </div>

            {/* Propensity Score inline */}
            <div className="mt-4 pt-4 border-t border-border">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-text-secondary uppercase tracking-wide">AI Propensity</span>
                <span className="text-xs font-semibold bg-adobe-red/10 text-adobe-red px-2 py-0.5 rounded">{sarah.propensityLabel}</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="relative w-16 h-16">
                  <svg className="w-16 h-16 -rotate-90" viewBox="0 0 120 120">
                    <circle cx="60" cy="60" r="50" fill="none" stroke="#E1E1E1" strokeWidth="10" />
                    <circle cx="60" cy="60" r="50" fill="none" stroke="#E34850" strokeWidth="10"
                      strokeDasharray={`${sarah.propensityScore * 314} 314`}
                      strokeLinecap="round" />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-lg font-bold text-text-primary">{sarah.propensityScore}</span>
                  </div>
                </div>
                <div>
                  <div className="text-sm font-medium text-text-primary">{sarah.propensityProduct}</div>
                  <div className="text-xs text-text-secondary mt-0.5">Cross-sell likelihood</div>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Basic Attributes */}
          <div className="bg-bg-card rounded-lg border border-border p-5">
            <h3 className="text-xs font-semibold text-text-secondary uppercase tracking-wide mb-4">Basic Attributes</h3>
            <div className="space-y-3 text-sm">
              {[
                ['First Name', sarah.name.split(' ')[0]],
                ['Last Name', sarah.name.split(' ')[1]],
                ['Personal Email', sarah.email || 'sarah.tan@gmail.com'],
                ['Channel Pref', sarah.channelPref],
                ['Products Held', `${sarah.productsHeld} (${sarah.productName})`],
                ['Lifecycle', sarah.lifecycle],
                ['Digital Activity', sarah.digitalBehavior],
                ['Recent Behavior', sarah.recentActivity],
                ['Branch Activity', sarah.branchActivity],
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
                  {Object.entries(sarah.consent).map(([ch, ok]) => (
                    <span key={ch} className={`text-xs px-2 py-0.5 rounded ${ok ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                      {ch.charAt(0).toUpperCase() + ch.slice(1)} {ok ? '\u2713' : '\u2717'}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: Data Sources / Linked Identities */}
          <div className="bg-bg-card rounded-lg border border-border p-5">
            <h3 className="text-xs font-semibold text-text-secondary uppercase tracking-wide mb-4">Data sources feeding profile</h3>
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
                    <div className="text-xs text-text-secondary mt-0.5">{ds.description}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-3 border-t border-border">
              <button className="text-xs text-adobe-blue font-medium hover:underline cursor-default">View identity graph</button>
            </div>
          </div>
        </div>

        {/* Narrator callout */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-start gap-3">
          <span className="text-lg">💬</span>
          <p className="text-sm text-blue-900">
            <strong>"Right now your teams make decisions on partial data. This is what it looks like when you see the whole customer."</strong>
          </p>
        </div>
      </div>
    </DemoLayout>
  );
}
