import DemoLayout from '../../components/layout/DemoLayout';
import { idDecisioning } from '../../data/budi';

export default function IDDecisioning() {
  const { eligibilityRules, ranking, winningOffer } = idDecisioning;

  return (
    <DemoLayout flow="id">
      <div className="max-w-6xl mx-auto space-y-5 animate-fadeIn">
        {/* Title bar */}
        <div className="bg-bg-card rounded-lg border border-border p-5 flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-text-primary">Acquisition Offer Decisioning</h2>
            <p className="text-sm text-text-secondary">Optimized for acquisition cost efficiency and predicted lifetime value</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs bg-green-50 text-green-700 px-3 py-1.5 rounded-full font-medium flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
              OJK Compliant
            </span>
          </div>
        </div>

        {/* Decision pipeline indicator */}
        <div className="bg-bg-card rounded-lg border border-border px-5 py-3">
          <div className="flex items-center justify-between">
            {[
              { step: '1', label: 'Eligible Offers', desc: 'Rules & constraints', done: true },
              { step: '2', label: 'AI Ranking', desc: 'Ranking formula', done: true },
              { step: '3', label: 'Winning Offer', desc: 'Personalized selection', done: false },
            ].map((s, i) => (
              <div key={i} className="flex items-center gap-3 flex-1">
                <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-xs font-bold ${
                  s.done ? 'bg-green-100 text-green-600' : 'bg-emerald-600 text-white'
                }`}>
                  {s.done ? (
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                  ) : s.step}
                </div>
                <div>
                  <div className="text-xs font-medium text-text-primary">{s.label}</div>
                  <div className="text-[10px] text-text-secondary">{s.desc}</div>
                </div>
                {i < 2 && (
                  <div className="flex-1 h-px bg-border mx-3" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Three columns */}
        <div className="grid grid-cols-3 gap-5">
          {/* Eligibility Rules */}
          <div className="bg-bg-card rounded-lg border border-border p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xs font-semibold text-text-secondary uppercase tracking-wide">Decision Rules</h3>
              <span className="text-xs bg-green-50 text-green-700 px-2 py-0.5 rounded font-medium">
                {eligibilityRules.filter(r => r.passed).length}/{eligibilityRules.length} passed
              </span>
            </div>
            <div className="space-y-2.5">
              {eligibilityRules.map((rule, i) => (
                <div key={i} className="flex items-center gap-3 py-1.5 border-b border-gray-50 last:border-0">
                  <div className={`w-5 h-5 rounded flex items-center justify-center shrink-0 ${
                    rule.passed ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                  }`}>
                    {rule.passed ? (
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                    ) : (
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                      </svg>
                    )}
                  </div>
                  <span className="text-sm text-text-primary">{rule.rule}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-3">
              <p className="text-[10px] text-blue-800">
                <strong>vs SG:</strong> 5 rules vs 7 — simpler eligibility for acquisition. Regulatory check is OJK, not MAS.
              </p>
            </div>
          </div>

          {/* AI Ranking */}
          <div className="bg-bg-card rounded-lg border border-border p-5">
            <h3 className="text-xs font-semibold text-text-secondary uppercase tracking-wide mb-4">AI Ranking Formula</h3>
            <div className="space-y-4">
              {ranking.map((factor, i) => (
                <div key={i}>
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-sm text-text-primary">{factor.factor}</span>
                    <span className="text-[10px] text-text-secondary bg-bg-primary px-1.5 py-0.5 rounded">Weight: {factor.weight}%</span>
                  </div>
                  <div className="relative h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="absolute inset-y-0 left-0 bg-gradient-to-r from-emerald-600 to-emerald-400 rounded-full"
                      style={{ width: `${factor.value * 100}%` }}
                    />
                  </div>
                  <div className="text-right mt-0.5">
                    <span className="text-[10px] text-emerald-600 font-medium">{factor.label}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-3">
              <p className="text-[10px] text-blue-800">
                <strong>vs SG:</strong> Weighted toward LTV & acquisition cost, not propensity & margin.
              </p>
            </div>
          </div>

          {/* Winning Offer */}
          <div className="bg-bg-card rounded-lg border-2 border-emerald-500 p-5 relative">
            <div className="absolute -top-2.5 left-4">
              <span className="bg-emerald-600 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wide">Winning Offer</span>
            </div>
            <div className="mt-2">
              <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-wide">{winningOffer.tier}</span>
              <h3 className="text-lg font-bold text-text-primary mt-1 mb-3">{winningOffer.name}</h3>
              <div className="space-y-2 mb-4">
                {winningOffer.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                    <span className="text-sm text-text-primary">{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="bg-emerald-50 border border-emerald-200 rounded-lg px-4 py-2.5 text-center">
                <span className="text-sm font-semibold text-emerald-700">{winningOffer.status}</span>
              </div>
              <div className="mt-3 pt-3 border-t border-border">
                <div className="flex justify-between text-[10px] text-text-secondary">
                  <span>Placement: In-App Banner</span>
                  <span>Collection: Acquisition</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Narrator callout */}
        <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 flex items-start gap-3">
          <span className="text-lg">💬</span>
          <p className="text-sm text-emerald-900">
            <strong>"The AI doesn't just change the offer — it changes the entire optimization strategy. In SG it maximizes cross-sell margin. In Indonesia it minimizes acquisition cost while protecting LTV."</strong>
          </p>
        </div>
      </div>
    </DemoLayout>
  );
}
