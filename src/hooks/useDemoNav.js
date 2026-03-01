import { useEffect, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const flowRoutes = {
  sg: [
    '/sg/profile',
    '/sg/unified-profile',
    '/sg/journey',
    '/sg/decisioning',
    '/sg/analytics',
  ],
  id: [
    '/id/profile',
    '/id/progressive-profile',
    '/id/journey',
    '/id/decisioning',
    '/id/analytics',
  ],
  agents: [
    '/agents/overview',
    '/agents/audience',
  ],
};

export function useDemoNav() {
  const navigate = useNavigate();
  const location = useLocation();

  const getCurrentFlow = useCallback(() => {
    for (const [flow, routes] of Object.entries(flowRoutes)) {
      if (routes.some(r => location.pathname === r)) return { flow, routes };
    }
    return null;
  }, [location.pathname]);

  const getCurrentIndex = useCallback(() => {
    const current = getCurrentFlow();
    if (!current) return -1;
    return current.routes.indexOf(location.pathname);
  }, [getCurrentFlow, location.pathname]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

      const current = getCurrentFlow();
      const idx = getCurrentIndex();

      if (e.key === 'Escape') {
        e.preventDefault();
        navigate('/');
        return;
      }

      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        if (current && idx < current.routes.length - 1) {
          e.preventDefault();
          navigate(current.routes[idx + 1]);
        }
        return;
      }

      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        if (current && idx > 0) {
          e.preventDefault();
          navigate(current.routes[idx - 1]);
        }
        return;
      }

      // Number keys 1-5 jump to specific screen in flow
      const num = parseInt(e.key);
      if (num >= 1 && num <= 9 && current) {
        const targetIdx = num - 1;
        if (targetIdx < current.routes.length) {
          e.preventDefault();
          navigate(current.routes[targetIdx]);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [getCurrentFlow, getCurrentIndex, navigate]);

  return {
    getCurrentFlow,
    getCurrentIndex,
    flowRoutes,
    goNext: () => {
      const current = getCurrentFlow();
      const idx = getCurrentIndex();
      if (current && idx < current.routes.length - 1) {
        navigate(current.routes[idx + 1]);
      }
    },
    goPrev: () => {
      const current = getCurrentFlow();
      const idx = getCurrentIndex();
      if (current && idx > 0) {
        navigate(current.routes[idx - 1]);
      }
    },
    goHome: () => navigate('/'),
  };
}
