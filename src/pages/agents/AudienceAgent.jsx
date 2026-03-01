import { useState, useEffect } from 'react';
import DemoLayout from '../../components/layout/DemoLayout';

const steps = [
  { label: 'Parsing natural language intent...', duration: 800 },
  { label: 'Mapping to XDM schema fields...', duration: 600 },
  { label: 'Applying segment rules & consent filters...', duration: 700 },
  { label: 'Estimating audience size...', duration: 500 },
];

const sampleProfiles = [
  { name: 'Sarah Tan', age: 32, segment: 'High-Value Savings', propensity: 0.82, channel: 'Mobile' },
  { name: 'David Lim', age: 41, segment: 'High-Value Savings', propensity: 0.78, channel: 'Email' },
  { name: 'Michelle Wong', age: 35, segment: 'High-Value Savings', propensity: 0.75, channel: 'Mobile' },
  { name: 'James Ong', age: 29, segment: 'High-Value Savings', propensity: 0.71, channel: 'Web' },
  { name: 'Rachel Koh', age: 38, segment: 'High-Value Savings', propensity: 0.69, channel: 'Mobile' },
];

export default function AudienceAgent() {
  const [started, setStarted] = useState(false);
  const [currentStep, setCurrentStep] = useState(-1);
  const [done, setDone] = useState(false);

  const query = 'Find high-value savings customers in Singapore aged 28-45 who browsed credit cards in the last 30 days and have not been contacted in the past 2 weeks';

  useEffect(() => {
    if (!started) return;

    let stepIndex = 0;
    let totalDelay = 0;

    steps.forEach((step, i) => {
      totalDelay += step.duration;
      setTimeout(() => {
        setCurrentStep(i);
      }, totalDelay);
    });

    totalDelay += 600;
    setTimeout(() => {
      setDone(true);
    }, totalDelay);
  }, [started]);

  return (
    <DemoLayout flow="agents">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="bg-bg-card rounded-xl border border-border p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-purple-600 flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
              </svg>
            </div>
            <div>
              <h2 className="text-base font-semibold text-text-primary">Audience Agent</h2>
              <p className="text-xs text-text-secondary">Natural language audience builder — no SQL, no manual rules</p>
            </div>
          </div>
          <span className="text-xs bg-purple-50 text-purple-700 px-2.5 py-1 rounded-full">AI-Powered</span>
        </div>

        <div className="grid grid-cols-2 gap-6" style={{ minHeight: 500 }}>
          {/* Left: Chat interface */}
          <div className="bg-bg-card rounded-xl border border-border flex flex-col">
            <div className="px-5 py-3 border-b border-border">
              <span className="text-sm font-medium text-text-primary">Marketer Input</span>
            </div>
            <div className="flex-1 p-5 flex flex-col">
              {/* Chat bubble */}
              <div className="bg-bg-primary rounded-xl p-4 mb-4">
                <p className="text-sm text-text-primary leading-relaxed">{query}</p>
              </div>

              {!started && (
                <button
                  onClick={() => setStarted(true)}
                  className="mx-auto mt-4 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium px-6 py-2.5 rounded-lg transition-colors cursor-pointer flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                  </svg>
                  Run Agent
                </button>
              )}

              {started && (
                <div className="mt-4 text-xs text-text-secondary">
                  <span className="text-purple-600 font-medium">Tip:</span> Marketers describe what they want in plain English. The agent translates to XDM-based segment rules automatically.
                </div>
              )}
            </div>
          </div>

          {/* Right: Processing + Results */}
          <div className="bg-bg-card rounded-xl border border-border flex flex-col">
            <div className="px-5 py-3 border-b border-border">
              <span className="text-sm font-medium text-text-primary">Agent Processing</span>
            </div>
            <div className="flex-1 p-5">
              {!started && (
                <div className="h-full flex items-center justify-center text-text-secondary text-sm">
                  Click "Run Agent" to start
                </div>
              )}

              {started && (
                <div className="space-y-4">
                  {/* Steps */}
                  <div className="space-y-3">
                    {steps.map((step, i) => (
                      <div key={i} className={`flex items-center gap-3 transition-opacity duration-300 ${
                        i <= currentStep ? 'opacity-100' : 'opacity-30'
                      }`}>
                        {i <= currentStep ? (
                          <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                            <svg className="w-3.5 h-3.5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                            </svg>
                          </div>
                        ) : (
                          <div className="w-5 h-5 rounded-full bg-gray-100 shrink-0" />
                        )}
                        <span className="text-sm text-text-primary">{step.label}</span>
                      </div>
                    ))}
                  </div>

                  {/* Results */}
                  {done && (
                    <div className="mt-6 space-y-4 animate-fadeIn">
                      {/* Result summary */}
                      <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                          </svg>
                          <span className="text-sm font-semibold text-green-800">Audience Created</span>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <div className="text-2xl font-bold text-green-800">2,340</div>
                            <div className="text-xs text-green-600">Profiles match</div>
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-green-800">2,180</div>
                            <div className="text-xs text-green-600">Consent-eligible reach</div>
                          </div>
                        </div>
                      </div>

                      {/* Sample profiles */}
                      <div>
                        <h4 className="text-xs font-medium text-text-secondary mb-2">Sample Profiles</h4>
                        <div className="space-y-1.5">
                          {sampleProfiles.map((p, i) => (
                            <div key={i} className="flex items-center justify-between bg-bg-primary rounded-lg px-3 py-2 text-xs">
                              <div className="flex items-center gap-2">
                                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white text-[8px] font-bold">
                                  {p.name.split(' ').map(n => n[0]).join('')}
                                </div>
                                <span className="font-medium text-text-primary">{p.name}</span>
                                <span className="text-text-secondary">Age {p.age}</span>
                              </div>
                              <div className="flex items-center gap-3">
                                <span className="text-purple-600 font-medium">{p.propensity}</span>
                                <span className="text-text-secondary">{p.channel}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Narrator callout */}
        <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 flex items-start gap-3">
          <span className="text-lg">💬</span>
          <p className="text-sm text-purple-900">
            <strong>"What used to take a data analyst 2 hours to build as a SQL query, a marketer can now do in 10 seconds with natural language. The agent understands the data model and applies consent filters automatically."</strong>
          </p>
        </div>
      </div>
    </DemoLayout>
  );
}
