import DemoLayout from '../../components/layout/DemoLayout';
import { sgMetrics } from '../../data/sarah';

/* CJA-style freeform-table workspace for Singapore cross-sell analytics */

const maxFunnelValue = sgMetrics.funnel[0].value;

export default function SGAnalytics() {
  return (
    <DemoLayout flow="sg">
      <div className="max-w-[1200px] mx-auto space-y-5 animate-fadeIn">

        {/* ── CJA Workspace Header ── */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <h2 className="text-base font-semibold text-text-primary">Cross-Sell Journey Performance</h2>
            <span className="text-[10px] bg-blue-50 text-adobe-blue px-2 py-0.5 rounded font-medium">Auto-refresh: 15 min</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-text-secondary">
            <span className="px-2.5 py-1 bg-bg-card border border-border rounded">Data view: <strong className="text-text-primary">SG Production</strong></span>
            <span className="px-2.5 py-1 bg-bg-card border border-border rounded">Last 30 days</span>
          </div>
        </div>

        {/* ── Main two-panel layout ── */}
        <div className="grid grid-cols-[1fr_340px] gap-5">

          {/* LEFT — Freeform Table Panel */}
          <div className="space-y-5">

            {/* Panel 1: Cross-Sell Funnel — Freeform Table */}
            <div className="bg-bg-card rounded-lg border border-border overflow-hidden">
              {/* Panel header */}
              <div className="flex items-center justify-between px-4 py-2.5 border-b border-border bg-gray-50/60">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 0 1-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0 1 12 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M13.125 12h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125M20.625 12c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5M12 14.625v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 14.625c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m0 0v1.5c0 .621-.504 1.125-1.125 1.125" />
                  </svg>
                  <span className="text-xs font-semibold text-text-primary">Freeform Table</span>
                  <span className="text-[10px] text-text-secondary">— Cross-Sell Funnel</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <button className="p-1 hover:bg-gray-100 rounded text-text-secondary"><svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5-3L16.5 18m0 0L12 13.5m4.5 4.5V6" /></svg></button>
                  <button className="p-1 hover:bg-gray-100 rounded text-text-secondary"><svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" /></svg></button>
                </div>
              </div>

              {/* Table header */}
              <div className="grid grid-cols-[1fr_100px_80px_80px] gap-0 px-4 py-2 border-b border-border text-[11px] font-semibold text-text-secondary uppercase tracking-wider">
                <span>Stage</span>
                <span className="text-right">People</span>
                <span className="text-right">Conv %</span>
                <span className="text-right">Drop-off</span>
              </div>

              {/* Table rows */}
              {sgMetrics.funnel.map((step, i) => {
                const barW = (step.value / maxFunnelValue) * 100;
                const prevValue = i > 0 ? sgMetrics.funnel[i - 1].value : step.value;
                const dropoff = i > 0 ? prevValue - step.value : 0;
                const dropPct = i > 0 ? ((dropoff / prevValue) * 100).toFixed(1) : '—';
                return (
                  <div
                    key={i}
                    className={`grid grid-cols-[1fr_100px_80px_80px] gap-0 px-4 py-2.5 border-b border-border/50 items-center ${i === 0 ? 'bg-blue-50/30' : 'hover:bg-gray-50/50'}`}
                  >
                    {/* Stage name + inline bar */}
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-text-primary font-medium w-[140px] shrink-0">{step.stage}</span>
                      <div className="flex-1 h-4 bg-gray-100 rounded-sm overflow-hidden">
                        <div
                          className="h-full rounded-sm"
                          style={{ width: `${barW}%`, backgroundColor: '#4AC0C0' }}
                        />
                      </div>
                    </div>
                    <span className="text-sm text-text-primary text-right font-medium tabular-nums">{step.value.toLocaleString()}</span>
                    <span className="text-sm text-text-primary text-right tabular-nums">{step.pct}%</span>
                    <span className={`text-sm text-right tabular-nums ${i > 0 ? 'text-red-600' : 'text-text-secondary'}`}>
                      {i > 0 ? `−${dropPct}%` : '—'}
                    </span>
                  </div>
                );
              })}

              {/* Summary row */}
              <div className="px-4 py-2.5 bg-gray-50/80 flex items-center justify-between">
                <span className="text-[11px] font-semibold text-text-secondary">Overall Conversion</span>
                <span className="text-sm font-bold text-text-primary">{sgMetrics.funnel[sgMetrics.funnel.length - 1].pct}%</span>
              </div>
            </div>

            {/* Panel 2: Channel Attribution — Freeform Table */}
            <div className="bg-bg-card rounded-lg border border-border overflow-hidden">
              <div className="flex items-center justify-between px-4 py-2.5 border-b border-border bg-gray-50/60">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                  </svg>
                  <span className="text-xs font-semibold text-text-primary">Freeform Table</span>
                  <span className="text-[10px] text-text-secondary">— Channel Attribution</span>
                </div>
              </div>

              {/* Table header */}
              <div className="grid grid-cols-[1fr_80px_80px] gap-0 px-4 py-2 border-b border-border text-[11px] font-semibold text-text-secondary uppercase tracking-wider">
                <span>Channel</span>
                <span className="text-right">Share</span>
                <span className="text-right">Trend</span>
              </div>

              {sgMetrics.channelAttribution.map((ch, i) => (
                <div key={i} className="grid grid-cols-[1fr_80px_80px] gap-0 px-4 py-2.5 border-b border-border/50 items-center hover:bg-gray-50/50">
                  <div className="flex items-center gap-3">
                    <div className="w-2.5 h-2.5 rounded-sm shrink-0" style={{ backgroundColor: ch.color }} />
                    <span className="text-sm text-text-primary font-medium w-[120px] shrink-0">{ch.channel}</span>
                    <div className="flex-1 h-4 bg-gray-100 rounded-sm overflow-hidden">
                      <div
                        className="h-full rounded-sm"
                        style={{ width: `${ch.pct}%`, backgroundColor: '#4AC0C0' }}
                      />
                    </div>
                  </div>
                  <span className="text-sm text-text-primary text-right font-medium tabular-nums">{ch.pct}%</span>
                  <span className="text-[11px] text-right">
                    {i === 0 ? <span className="text-green-600">+3.2%</span> :
                     i === 1 ? <span className="text-red-500">-1.8%</span> :
                     i === 2 ? <span className="text-green-600">+0.9%</span> :
                     <span className="text-text-secondary">+0.4%</span>}
                  </span>
                </div>
              ))}
            </div>

            {/* Drop-off Insight row */}
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 flex items-start gap-2">
              <svg className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
              </svg>
              <div>
                <p className="text-xs font-semibold text-amber-900 mb-0.5">Anomaly Detected</p>
                <p className="text-xs text-amber-800">{sgMetrics.dropoffInsight}</p>
              </div>
            </div>
          </div>

          {/* RIGHT — Insight Panel + Summary */}
          <div className="space-y-5">

            {/* Quick Stats */}
            <div className="bg-bg-card rounded-lg border border-border p-4 space-y-3">
              <h4 className="text-[11px] font-semibold text-text-secondary uppercase tracking-wider">Summary Metrics</h4>
              {[
                { label: 'Journey Entered', value: '12,450', sub: 'last 30d' },
                { label: 'Cards Activated', value: '1,520', sub: '12.2% conv.' },
                { label: 'Avg. Days to Convert', value: '6.3', sub: '−0.8d vs prior' },
                { label: 'Revenue Impact', value: 'SGD 2.1M', sub: 'annual projected' },
              ].map((m, i) => (
                <div key={i} className="flex items-baseline justify-between">
                  <span className="text-xs text-text-secondary">{m.label}</span>
                  <div className="text-right">
                    <span className="text-sm font-semibold text-text-primary">{m.value}</span>
                    <span className="text-[10px] text-text-secondary ml-1">{m.sub}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* AI Insight */}
            <div className="bg-bg-card rounded-lg border border-border overflow-hidden">
              <div className="px-4 py-2.5 border-b border-border bg-purple-50/60 flex items-center gap-2">
                <svg className="w-4 h-4 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z" />
                </svg>
                <span className="text-xs font-semibold text-purple-900">AI-Surfaced Insight</span>
              </div>
              <div className="p-4 space-y-3">
                <p className="text-sm text-text-primary leading-relaxed">{sgMetrics.aiInsight.finding}</p>
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-[10px] font-semibold text-text-secondary uppercase tracking-wider mb-1">Recommendation</p>
                  <p className="text-xs text-text-primary">{sgMetrics.aiInsight.recommendation}</p>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  <span className="text-xs font-medium text-green-700">{sgMetrics.aiInsight.impact}</span>
                </div>
              </div>
            </div>

            {/* Component rail – cosmetic */}
            <div className="bg-bg-card rounded-lg border border-border p-3">
              <h4 className="text-[10px] font-semibold text-text-secondary uppercase tracking-wider mb-2">Components</h4>
              <div className="space-y-1">
                {['People', 'Sessions', 'Events', 'Revenue', 'Conversion Rate', 'Avg. Order Value'].map((c) => (
                  <div key={c} className="text-xs text-text-primary px-2 py-1.5 rounded hover:bg-gray-50 cursor-default flex items-center gap-2">
                    <div className="w-3 h-3 border border-border rounded-sm" />
                    {c}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Narrator callout */}
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 flex items-start gap-3">
          <span className="text-lg">💬</span>
          <p className="text-sm text-purple-900">
            <strong>"The platform tells you to shift channel mix — without waiting for a quarterly review. The AI detected that branch advisor alerts drive 3x conversion on mobile drop-offs."</strong>
          </p>
        </div>
      </div>
    </DemoLayout>
  );
}
