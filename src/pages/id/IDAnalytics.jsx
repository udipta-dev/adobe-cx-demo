import DemoLayout from '../../components/layout/DemoLayout';
import { idMetrics } from '../../data/budi';

export default function IDAnalytics() {
  const maxFunnelValue = idMetrics.funnel[0].value;

  return (
    <DemoLayout flow="id">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Title */}
        <div className="bg-bg-card rounded-xl border border-border p-4">
          <h2 className="text-lg font-semibold text-text-primary">Acquisition Campaign Performance</h2>
          <p className="text-sm text-text-secondary">Full-funnel from ad impression to first deposit, with AI optimization insights</p>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {/* Funnel */}
          <div className="bg-bg-card rounded-xl border border-border p-6">
            <h3 className="text-sm font-medium text-text-secondary mb-5">Acquisition Funnel</h3>
            <div className="space-y-3">
              {idMetrics.funnel.map((step, i) => (
                <div key={i}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm text-text-primary">{step.stage}</span>
                    <span className="text-sm font-semibold text-text-primary">
                      {step.value.toLocaleString()}
                      <span className="text-xs text-text-secondary font-normal ml-1">({step.pct}%)</span>
                    </span>
                  </div>
                  <div className="relative h-7 bg-gray-50 rounded overflow-hidden">
                    <div
                      className="absolute inset-y-0 left-0 bg-gradient-to-r from-emerald-600 to-emerald-400 rounded"
                      style={{ width: `${(step.value / maxFunnelValue) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 bg-amber-50 border border-amber-200 rounded-lg p-3 flex items-start gap-2">
              <span className="text-sm">⚠️</span>
              <div>
                <p className="text-xs font-medium text-amber-900 mb-0.5">Drop-off Insight</p>
                <p className="text-xs text-amber-800">{idMetrics.dropoffInsight}</p>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-6">
            {/* Channel Attribution */}
            <div className="bg-bg-card rounded-xl border border-border p-6">
              <h3 className="text-sm font-medium text-text-secondary mb-5">Channel Attribution</h3>
              <div className="space-y-3">
                {idMetrics.channelAttribution.map((ch, i) => (
                  <div key={i}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm text-text-primary">{ch.channel}</span>
                      <span className="text-sm font-semibold text-text-primary">{ch.pct}%</span>
                    </div>
                    <div className="relative h-3 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="absolute inset-y-0 left-0 rounded-full"
                        style={{ width: `${ch.pct}%`, backgroundColor: ch.color }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Insight */}
            <div className="bg-gradient-to-br from-purple-50 to-emerald-50 rounded-xl border border-purple-200 p-6">
              <div className="flex items-center gap-2 mb-3">
                <svg className="w-5 h-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z" />
                </svg>
                <h3 className="text-sm font-semibold text-purple-900">AI-Surfaced Insight</h3>
              </div>
              <p className="text-sm text-purple-900 mb-3">{idMetrics.aiInsight.finding}</p>
              <div className="bg-white/60 rounded-lg p-3 mb-3">
                <p className="text-xs font-medium text-purple-700 mb-1">Recommendation</p>
                <p className="text-sm text-text-primary">{idMetrics.aiInsight.recommendation}</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-green-700 bg-green-50 px-2.5 py-1 rounded-full">
                  Estimated uplift: {idMetrics.aiInsight.impact}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Narrator callout */}
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 flex items-start gap-3">
          <span className="text-lg">💬</span>
          <p className="text-sm text-emerald-900">
            <strong>"Same analytics platform, different KPIs. In SG you measure cross-sell conversion. In Indonesia you measure acquisition cost and activation rate. CJA handles both without configuration changes."</strong>
          </p>
        </div>
      </div>
    </DemoLayout>
  );
}
