import DemoLayout from '../../components/layout/DemoLayout';
import { sgDecisioning } from '../../data/sarah';

export default function SGDecisioning() {
  const { eligibilityRules, ranking, winningOffer } = sgDecisioning;

  return (
    <DemoLayout flow="sg">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Title */}
        <div className="bg-bg-card rounded-xl border border-border p-4 flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-text-primary">Intelligent Offer Decisioning</h2>
            <p className="text-sm text-text-secondary">Rules → AI Ranking → Personalized offer in real time</p>
          </div>
          <span className="text-xs bg-green-50 text-green-700 px-3 py-1.5 rounded-full font-medium flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
            Evaluated in &lt;100ms
          </span>
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
                      className="absolute inset-y-0 left-0 bg-gradient-to-r from-adobe-blue to-blue-400 rounded-full transition-all duration-1000"
                      style={{ width: `${factor.value * 100}%` }}
                    />
                  </div>
                  <div className="text-right mt-0.5">
                    <span className="text-xs text-adobe-blue font-medium">{factor.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Winning Offer */}
          <div className="bg-bg-card rounded-xl border-2 border-adobe-red p-6 relative">
            <div className="absolute -top-3 left-4">
              <span className="bg-adobe-red text-white text-xs font-bold px-3 py-1 rounded-full">WINNING OFFER</span>
            </div>
            <div className="mt-3">
              <span className="text-xs font-bold text-adobe-red">{winningOffer.tier}</span>
              <h3 className="text-xl font-bold text-text-primary mt-1 mb-4">{winningOffer.name}</h3>
              <div className="space-y-2.5 mb-5">
                {winningOffer.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-adobe-red" />
                    <span className="text-sm text-text-primary">{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg px-4 py-3 text-center">
                <span className="text-sm font-semibold text-green-700">{winningOffer.status}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Narrator callout */}
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-start gap-3">
          <span className="text-lg">💬</span>
          <p className="text-sm text-red-900">
            <strong>"Not the card your team decided to push this quarter. The platform chose the best card for Sarah at this moment."</strong>
          </p>
        </div>
      </div>
    </DemoLayout>
  );
}
