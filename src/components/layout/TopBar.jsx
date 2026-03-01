import { useLocation } from 'react-router-dom';
import { useDemoNav } from '../../hooks/useDemoNav';

const pageTitles = {
  '/sg/profile': { title: 'Customer Profile', breadcrumb: ['Profiles', 'Sarah Tan'], subtitle: 'Sarah Tan — Singapore Cross-Sell', product: 'Real-Time CDP' },
  '/sg/unified-profile': { title: 'Unified Profile', breadcrumb: ['Profiles', 'Sarah Tan', 'Detail'], subtitle: 'Identity Resolution & Behavioral Timeline', product: 'Real-Time CDP' },
  '/sg/journey': { title: 'Cross-Sell Journey', breadcrumb: ['Journeys', 'Credit Card Cross-Sell'], subtitle: 'Credit Card Journey — Propensity Triggered', product: 'Journey Optimizer' },
  '/sg/decisioning': { title: 'Offer Decisioning', breadcrumb: ['Decisioning', 'Credit Card Offers'], subtitle: 'AI-Powered Offer Selection', product: 'Journey Optimizer' },
  '/sg/analytics': { title: 'Journey Analytics', breadcrumb: ['Projects', 'Cross-Sell Performance'], subtitle: 'Cross-Sell Performance & Insights', product: 'Customer Journey Analytics' },
  '/id/profile': { title: 'Prospect Profile', breadcrumb: ['Profiles', 'Budi Santoso'], subtitle: 'Budi Santoso — Indonesia Acquisition', product: 'Real-Time CDP' },
  '/id/progressive-profile': { title: 'Progressive Profile', breadcrumb: ['Profiles', 'Budi Santoso', 'Detail'], subtitle: 'Profile Building Over Time', product: 'Real-Time CDP' },
  '/id/journey': { title: 'Acquisition Journey', breadcrumb: ['Journeys', 'Digital Savings Onboarding'], subtitle: 'Digital Savings Onboarding', product: 'Journey Optimizer' },
  '/id/decisioning': { title: 'Offer Decisioning', breadcrumb: ['Decisioning', 'Acquisition Offers'], subtitle: 'Acquisition Offer Selection', product: 'Journey Optimizer' },
  '/id/analytics': { title: 'Acquisition Analytics', breadcrumb: ['Projects', 'Acquisition Performance'], subtitle: 'Campaign Performance & Insights', product: 'Customer Journey Analytics' },
  '/agents/overview': { title: 'AI Agent Orchestrator', breadcrumb: ['AI Agents'], subtitle: 'Purpose-Built Agents for Experience Platform', product: 'Experience Platform' },
  '/agents/audience': { title: 'Audience Agent', breadcrumb: ['AI Agents', 'Audience Agent'], subtitle: 'Natural Language Segment Builder', product: 'Experience Platform' },
  '/markets': { title: 'Market Overview', breadcrumb: ['Market Overview'], subtitle: 'Three-Market Strategy', product: 'Experience Platform' },
};

export default function TopBar() {
  const location = useLocation();
  const { getCurrentFlow, getCurrentIndex } = useDemoNav();
  const page = pageTitles[location.pathname];
  const flow = getCurrentFlow();
  const idx = getCurrentIndex();

  if (!page) return null;

  return (
    <header className="h-12 bg-bg-card border-b border-border flex items-center justify-between px-5 shrink-0">
      {/* Left: breadcrumb */}
      <div className="flex items-center gap-1.5 text-sm">
        {page.breadcrumb.map((crumb, i) => (
          <span key={i} className="flex items-center gap-1.5">
            {i > 0 && <span className="text-text-secondary/40">/</span>}
            <span className={i === page.breadcrumb.length - 1 ? 'text-text-primary font-medium' : 'text-text-secondary'}>
              {crumb}
            </span>
          </span>
        ))}
      </div>

      {/* Center: search bar (cosmetic) */}
      <div className="flex items-center gap-2 bg-bg-primary border border-border rounded-md px-3 py-1.5 w-64">
        <svg className="w-4 h-4 text-text-secondary/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
        <span className="text-xs text-text-secondary/50">Search Experience Cloud</span>
      </div>

      {/* Right: env badge + progress + avatar */}
      <div className="flex items-center gap-3">
        {flow && (
          <div className="flex items-center gap-1.5">
            {flow.routes.map((_, i) => (
              <div
                key={i}
                className={`w-1.5 h-1.5 rounded-full transition-colors ${
                  i === idx ? 'bg-adobe-blue' : i < idx ? 'bg-adobe-blue/40' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        )}
        <div className="flex items-center gap-2">
          <span className="text-xs text-text-secondary">Demo System</span>
          <span className="text-[10px] font-semibold bg-adobe-red text-white px-2 py-0.5 rounded-full">Prod</span>
        </div>
        <div className="w-7 h-7 rounded-full bg-gray-300 flex items-center justify-center">
          <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0" />
          </svg>
        </div>
      </div>
    </header>
  );
}
