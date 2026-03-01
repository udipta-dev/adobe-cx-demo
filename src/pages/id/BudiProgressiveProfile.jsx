import DemoLayout from '../../components/layout/DemoLayout';
import { budi } from '../../data/budi';

export default function BudiProgressiveProfile() {
  return (
    <DemoLayout flow="id">
      <div className="max-w-6xl mx-auto space-y-5 animate-fadeIn">
        <div className="grid grid-cols-3 gap-5">
          {/* Left: Progressive Timeline */}
          <div className="col-span-2 bg-bg-card rounded-lg border border-border p-5">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-sm font-medium text-text-secondary">Profile Building Over Time</h3>
              <span className="text-xs bg-amber-50 text-amber-700 px-2.5 py-0.5 rounded-full font-medium">
                Profile Completeness: {budi.profileCompleteness}%
              </span>
            </div>

            <div className="space-y-0">
              {budi.progressiveTimeline.map((step, i) => (
                <div key={i} className="flex items-start gap-4 relative">
                  {/* Timeline connector */}
                  {i < budi.progressiveTimeline.length - 1 && (
                    <div className={`absolute left-[55px] top-12 w-0.5 h-full ${step.projected ? 'border-l-2 border-dashed border-gray-300' : 'bg-emerald-200'}`} />
                  )}

                  {/* Day label */}
                  <div className="w-16 text-right shrink-0 pt-2">
                    <span className={`text-xs font-medium ${step.projected ? 'text-text-secondary italic' : 'text-text-primary'}`}>{step.day}</span>
                  </div>

                  {/* Dot */}
                  <div className={`w-4 h-4 rounded-full mt-2 shrink-0 z-10 ring-4 ring-bg-card ${
                    step.projected ? 'bg-gray-300 border-2 border-dashed border-gray-400' : 'bg-emerald-500'
                  }`} />

                  {/* Content card */}
                  <div className={`flex-1 rounded-lg border p-4 mb-4 ${
                    step.projected ? 'border-dashed border-gray-300 bg-gray-50' : 'border-border bg-bg-primary'
                  }`}>
                    <div className="flex items-center justify-between mb-1">
                      <span className={`text-sm font-semibold ${step.projected ? 'text-text-secondary' : 'text-text-primary'}`}>
                        {step.event}
                        {step.projected && <span className="text-xs font-normal text-text-secondary ml-2">(projected)</span>}
                      </span>
                      {/* Completeness badge */}
                      <div className="flex items-center gap-2">
                        <div className="w-16 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full bg-emerald-500 rounded-full transition-all" style={{ width: `${step.completeness}%` }} />
                        </div>
                        <span className="text-[10px] text-text-secondary">{step.completeness}%</span>
                      </div>
                    </div>
                    <p className={`text-xs ${step.projected ? 'text-text-secondary italic' : 'text-text-secondary'}`}>{step.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-5">
            {/* Identity Graph */}
            <div className="bg-bg-card rounded-lg border border-border p-5">
              <div className="flex items-center gap-2 mb-4">
                <h3 className="text-sm font-medium text-text-secondary">Identity Graph</h3>
                <span className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full">{budi.identities.length} IDs</span>
              </div>

              <div className="flex flex-col items-center mb-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center text-white font-semibold mb-3">
                  {budi.initials}
                </div>
                <div className="space-y-2 w-full">
                  {budi.identities.map((id, i) => (
                    <div key={i} className="flex items-center gap-2 bg-bg-primary rounded-lg px-3 py-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      <div className="flex-1 min-w-0">
                        <div className="text-xs text-text-secondary">{id.type}</div>
                        <div className="text-xs font-mono text-text-primary truncate">{id.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-3 text-center">
                <p className="text-[10px] text-text-secondary">Simpler than SG — no branch CIF yet. Identity graph grows as Budi interacts.</p>
              </div>
            </div>

            {/* Comparison card */}
            <div className="bg-gradient-to-br from-blue-50 to-emerald-50 rounded-lg border border-blue-200 p-5">
              <h4 className="text-xs font-semibold text-blue-900 mb-3">SG vs ID: Profile Maturity</h4>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-text-secondary">Sarah (SG)</span>
                    <span className="text-blue-700 font-medium">4 identities</span>
                  </div>
                  <div className="h-2 bg-blue-100 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 rounded-full" style={{ width: '90%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-text-secondary">Budi (ID)</span>
                    <span className="text-emerald-700 font-medium">3 identities</span>
                  </div>
                  <div className="h-2 bg-emerald-100 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500 rounded-full" style={{ width: '45%' }} />
                  </div>
                </div>
              </div>
              <p className="text-[10px] text-text-secondary mt-3">Same platform, different data maturity. The platform adapts.</p>
            </div>
          </div>
        </div>

        {/* Narrator callout */}
        <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 flex items-start gap-3">
          <span className="text-lg">💬</span>
          <p className="text-sm text-emerald-900">
            <strong>"Each interaction adds a new data point. The profile doesn't need to be complete to be useful — the platform starts personalizing from the very first touch."</strong>
          </p>
        </div>
      </div>
    </DemoLayout>
  );
}
