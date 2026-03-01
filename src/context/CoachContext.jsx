import { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { coachSteps } from '../data/coachSteps';

const CoachContext = createContext(null);

export function CoachProvider({ children }) {
  const [coachMode, setCoachMode] = useState(() => {
    try {
      return localStorage.getItem('coachMode') === 'true';
    } catch {
      return false;
    }
  });

  // Track which "visit" to the Demo Hub we're on so we show the right step
  // Steps with the same route (e.g. '/' appears 4 times) are disambiguated
  // by tracking the coachStepIndex explicitly.
  const [coachStepIndex, setCoachStepIndex] = useState(0);

  const location = useLocation();
  const navigate = useNavigate();

  // Persist coach mode to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('coachMode', coachMode.toString());
    } catch { /* ignore */ }
  }, [coachMode]);

  // When the route changes, find the best matching step
  useEffect(() => {
    if (!coachMode) return;

    const currentRoute = location.pathname;
    const currentStep = coachSteps[coachStepIndex];

    // If current step already matches route, stay put
    if (currentStep && currentStep.route === currentRoute) return;

    // Otherwise, find the next step matching this route (searching forward first)
    // This handles when the user navigates manually
    let bestIdx = -1;

    // First, search forward from current position
    for (let i = coachStepIndex + 1; i < coachSteps.length; i++) {
      if (coachSteps[i].route === currentRoute) {
        bestIdx = i;
        break;
      }
    }

    // If not found forward, search backward
    if (bestIdx === -1) {
      for (let i = coachStepIndex - 1; i >= 0; i--) {
        if (coachSteps[i].route === currentRoute) {
          bestIdx = i;
          break;
        }
      }
    }

    // If still not found (e.g. /markets which has no coach step), keep current index
    if (bestIdx !== -1) {
      setCoachStepIndex(bestIdx);
    }
  }, [location.pathname, coachMode]);

  const toggleCoachMode = useCallback(() => {
    setCoachMode(prev => !prev);
  }, []);

  const goToNextStep = useCallback(() => {
    if (coachStepIndex < coachSteps.length - 1) {
      const nextStep = coachSteps[coachStepIndex + 1];
      setCoachStepIndex(coachStepIndex + 1);
      if (nextStep.route !== location.pathname) {
        navigate(nextStep.route);
      }
    }
  }, [coachStepIndex, location.pathname, navigate]);

  const goToPrevStep = useCallback(() => {
    if (coachStepIndex > 0) {
      const prevStep = coachSteps[coachStepIndex - 1];
      setCoachStepIndex(coachStepIndex - 1);
      if (prevStep.route !== location.pathname) {
        navigate(prevStep.route);
      }
    }
  }, [coachStepIndex, location.pathname, navigate]);

  const currentStep = coachSteps[coachStepIndex] || null;

  // Apply highlight class to the target element
  useEffect(() => {
    if (!coachMode || !currentStep?.highlightSelector) return;

    // Small delay to ensure DOM is rendered
    const timer = setTimeout(() => {
      const el = document.querySelector(currentStep.highlightSelector);
      if (el) {
        el.classList.add('coach-highlight');
      }
    }, 100);

    return () => {
      clearTimeout(timer);
      // Clean up all highlights
      document.querySelectorAll('.coach-highlight').forEach(el => {
        el.classList.remove('coach-highlight');
      });
    };
  }, [coachMode, currentStep, location.pathname]);

  return (
    <CoachContext.Provider
      value={{
        coachMode,
        toggleCoachMode,
        currentStep,
        currentStepIndex: coachStepIndex,
        totalSteps: coachSteps.length,
        goToNextStep,
        goToPrevStep,
        isFirstStep: coachStepIndex === 0,
        isLastStep: coachStepIndex === coachSteps.length - 1,
      }}
    >
      {children}
    </CoachContext.Provider>
  );
}

export function useCoach() {
  const ctx = useContext(CoachContext);
  if (!ctx) throw new Error('useCoach must be used within CoachProvider');
  return ctx;
}
