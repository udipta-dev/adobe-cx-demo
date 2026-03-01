import DemoLayout from '../../components/layout/DemoLayout';
import { idDecisioning } from '../../data/budi';

export default function IDDecisioning() {
  const { eligibilityRules, ranking, winningOffer } = idDecisioning;

  return (
    <DemoLayout flow="id">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Title */}
        <div className="bg-bg-card rounded-xl border border-border p-4 flex items-center justify-between">
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

        {/* Three columns */}
        <div className="grid grid-cols-3 gap-6">
          {/* Eligibility Rules */}
          <div className="bg-bg-card rounded-xl border border-border p-6">
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-sm font-medium text-text-secondary">Eligibility Rules</h3>
              <span className="text-xs bg-green-50 text-green-700 px-2 py-0.5 rounded-full font-medium">
                {eligibilityRules.filter(r => r.passed).length}/{eligibilityRules.length} passed
              </span>
            </div>
            <div className="space-y-3">
              {eligibilityRules.map((rule, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${
                    rule.passed ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                  }`}>
                    {rule.passed ? (
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                    ) : (
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                      </svg>
                    )}
                  </div>
                  <span className="text-sm text-text-primary">{rule.rule}</span>
                </div>
              ))}
            </div>
            <div className="mt-5 bg-blue-50 border border-blue-200 rounded-lg p-3">
              <p className="text-xs text-blue-800">
                <strong>vs SG:</strong> 5 rules vs 7 — simpler eligibility for acquisition. Regulatory check is OJK, not MAS.
              </p>
            </div>
          </div>

          {/* AI Ranking */}
          <div className="bg-bg-card rounded-xl border border-border p-6">
            <h3 className="text-sm font-medium text-text-secondary mb-5">AI Ranking Strategy</h3>
            <div className="space-y-5">
              {ranking.map((factor, i) => (
                <div key={i}>
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-sm text-text-primary">{factor.factor}</span>
                    <span className="text-xs text-text-secondary">Weight: {factor.weight}%</span>
                  </div>
                  <div className="relative h-2.5 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="absolute inset-y-0 left-0 bg-gradient-to-r from-emerald-600 to-emerald-400 rounded-full"
                      style={{ width: `${factor.value * 100}%` }}
                    />
                  </div>
                  <div className="text-right mt-0.5">
                    <span className="text-xs text-emerald-600 font-medium">{factor.label}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-5 bg-blue-50 border border-blue-200 rounded-lg p-3">
              <p className="text-xs text-blue-800">
                <strong>vs SG:</strong> Weighted toward LTV & acquisition cost, not propensity & margin. Different objective, different AI strategy.
              </p>
            </div>
          </div>

          {/* Winning Offer */}
          <div className="bg-bg-card rounded-xl border-2 border-emerald-500 p-6 relative">
            <div className="absolute -top-3 left-4">
              <span className="bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full">WINNING OFFER</span>
            </div>
            <div className="mt-3">
              <span className="text-xs font-bold text-emerald-600">{winningOffer.tier}</span>
              <h3 className="text-xl font-bold text-text-primary mt-1 mb-4">{winningOffer.name}</h3>
              <div className="space-y-2.5 mb-5">
                {winningOffer.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span className="text-sm text-text-primary">{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="bg-emerald-50 border border-emerald-200 rounded-lg px-4 py-3 text-center">
                <span className="text-sm font-semibold text-emerald-700">{winningOffer.status}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Narrator callout */}
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 flex items-start gap-3">
          <span className="text-lg">💬</span>
          <p className="text-sm text-emerald-900">
            <strong>"The AI doesn't just change the offer — it changes the entire optimization strategy. In SG it maximizes cross-sell margin. In Indonesia it minimizes acquisition cost while protecting LTV."</strong>
          </p>
        </div>
      </div>
    </DemoLayout>
  );
}
