import { useCoach } from '../context/CoachContext';

const groupColors = {
  intro: { bg: 'bg-blue-50', border: 'border-blue-300', accent: 'bg-blue-500', text: 'text-blue-700', label: 'Introduction' },
  sg: { bg: 'bg-blue-50', border: 'border-blue-300', accent: 'bg-blue-500', text: 'text-blue-700', label: 'Singapore Flow' },
  id: { bg: 'bg-emerald-50', border: 'border-emerald-300', accent: 'bg-emerald-500', text: 'text-emerald-700', label: 'Indonesia Flow' },
  agents: { bg: 'bg-purple-50', border: 'border-purple-300', accent: 'bg-purple-500', text: 'text-purple-700', label: 'AI Agents' },
};

export default function CoachOverlay() {
  const {
    coachMode,
    toggleCoachMode,
    currentStep,
    currentStepIndex,
    totalSteps,
    goToNextStep,
    goToPrevStep,
    isFirstStep,
    isLastStep,
  } = useCoach();

  const group = currentStep ? groupColors[currentStep.stepGroup] || groupColors.intro : groupColors.intro;

  return (
    <>
      {/* ── Toggle Pill ── Always visible */}
      <button
        onClick={toggleCoachMode}
        className={`fixed bottom-4 right-4 z-[9999] flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium shadow-lg transition-all cursor-pointer ${
          coachMode
            ? 'bg-blue-600 text-white hover:bg-blue-700'
            : 'bg-white/90 text-gray-600 hover:bg-white border border-gray-200'
        }`}
        style={{ backdropFilter: 'blur(8px)' }}
      >
        <span className="text-base">{coachMode ? '🎓' : '🎓'}</span>
        Coach {coachMode ? 'ON' : 'OFF'}
      </button>

      {/* ── Coach Panel ── Only when coach mode is active */}
      {coachMode && currentStep && (
        <div
          className="fixed bottom-16 right-4 z-[9998] w-[400px] max-h-[calc(100vh-120px)] overflow-y-auto"
          style={{ backdropFilter: 'blur(8px)' }}
        >
          <div className={`bg-white rounded-xl shadow-2xl border ${group.border} overflow-hidden`}>
            {/* Header bar */}
            <div className={`${group.accent} px-4 py-2.5 flex items-center justify-between`}>
              <div className="flex items-center gap-2">
                <span className="text-white text-xs font-bold">{group.label}</span>
              </div>
              <span className="text-white/90 text-xs font-medium">
                Step {currentStepIndex + 1} of {totalSteps}
              </span>
            </div>

            {/* Progress bar */}
            <div className="h-1 bg-gray-100">
              <div
                className={`h-full ${group.accent} transition-all duration-500`}
                style={{ width: `${((currentStepIndex + 1) / totalSteps) * 100}%` }}
              />
            </div>

            {/* Content */}
            <div className="p-4 space-y-3">
              {/* Title */}
              <h3 className="text-sm font-bold text-gray-900">{currentStep.title}</h3>

              {/* Talking points */}
              <div className="space-y-2">
                {currentStep.points.map((point, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <div className={`w-5 h-5 rounded-full ${group.bg} flex items-center justify-center shrink-0 mt-0.5`}>
                      <span className={`text-[10px] font-bold ${group.text}`}>{i + 1}</span>
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>

              {/* Next action callout */}
              <div className={`${group.bg} rounded-lg p-3 flex items-start gap-2`}>
                <span className="text-base mt-0.5">👉</span>
                <p className={`text-sm font-medium ${group.text}`}>{currentStep.nextAction}</p>
              </div>
            </div>

            {/* Footer nav buttons */}
            <div className="px-4 py-3 border-t border-gray-100 flex items-center justify-between bg-gray-50/50">
              <button
                onClick={goToPrevStep}
                disabled={isFirstStep}
                className={`flex items-center gap-1 text-xs font-medium px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                  isFirstStep
                    ? 'text-gray-300 cursor-default'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
                Back
              </button>

              <div className="flex items-center gap-1">
                {Array.from({ length: totalSteps }, (_, i) => (
                  <div
                    key={i}
                    className={`h-1 rounded-full transition-all ${
                      i === currentStepIndex
                        ? `w-4 ${group.accent}`
                        : i < currentStepIndex
                          ? `w-1.5 ${group.accent} opacity-40`
                          : 'w-1.5 bg-gray-200'
                    }`}
                  />
                ))}
              </div>

              {!isLastStep ? (
                <button
                  onClick={goToNextStep}
                  className={`flex items-center gap-1 text-xs font-medium px-3 py-1.5 rounded-lg text-white ${group.accent} hover:opacity-90 transition-colors cursor-pointer`}
                >
                  Next
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                  </svg>
                </button>
              ) : (
                <span className="text-xs font-medium text-green-600 px-3 py-1.5">
                  ✅ Complete!
                </span>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
