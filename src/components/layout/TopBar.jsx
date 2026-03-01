import { useLocation } from 'react-router-dom';
import { useDemoNav } from '../../hooks/useDemoNav';

const pageTitles = {
  '/sg/profile': { title: 'Customer Profile', subtitle: 'Sarah Tan — Singapore Cross-Sell', product: 'Real-Time CDP' },
  '/sg/unified-profile': { title: 'Unified Profile', subtitle: 'Identity Resolution & Behavioral Timeline', product: 'Real-Time CDP' },
  '/sg/journey': { title: 'Cross-Sell Journey', subtitle: 'Credit Card Journey — Propensity Triggered', product: 'Journey Optimizer' },
  '/sg/decisioning': { title: 'Offer Decisioning', subtitle: 'AI-Powered Offer Selection', product: 'Journey Optimizer' },
  '/sg/analytics': { title: 'Journey Analytics', subtitle: 'Cross-Sell Performance & Insights', product: 'Customer Journey Analytics' },
  '/id/profile': { title: 'Prospect Profile', subtitle: 'Budi Santoso — Indonesia Acquisition', product: 'Real-Time CDP' },
  '/id/progressive-profile': { title: 'Progressive Profile', subtitle: 'Profile Building Over Time', product: 'Real-Time CDP' },
  '/id/journey': { title: 'Acquisition Journey', subtitle: 'Digital Savings Onboarding', product: 'Journey Optimizer' },
  '/id/decisioning': { title: 'Offer Decisioning', subtitle: 'Acquisition Offer Selection', product: 'Journey Optimizer' },
  '/id/analytics': { title: 'Acquisition Analytics', subtitle: 'Campaign Performance & Insights', product: 'Customer Journey Analytics' },
  '/agents/overview': { title: 'AI Agent Orchestrator', subtitle: 'Purpose-Built Agents for Experience Platform', product: 'Experience Platform' },
  '/agents/audience': { title: 'Audience Agent', subtitle: 'Natural Language Segment Builder', product: 'Experience Platform' },
  '/markets': { title: 'Market Overview', subtitle: 'Three-Market Strategy', product: 'Experience Platform' },
};

export default function TopBar() {
  const location = useLocation();
  const { getCurrentFlow, getCurrentIndex } = useDemoNav();
  const page = pageTitles[location.pathname];
  const flow = getCurrentFlow();
  const idx = getCurrentIndex();

  if (!page) return null;

  return (
    <header className="h-14 bg-bg-card border-b border-border flex items-center justify-between px-6 shrink-0">
      <div className="flex items-center gap-4">
        <div>
          <h1 className="text-base font-semibold text-text-primary leading-tight">{page.title}</h1>
          <p className="text-xs text-text-secondary leading-tight">{page.subtitle}</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        {flow && (
          <div className="flex items-center gap-1.5">
            {flow.routes.map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full transition-colors ${
                  i === idx ? 'bg-adobe-blue' : i < idx ? 'bg-adobe-blue/40' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        )}
        <span className="text-xs text-text-secondary bg-bg-primary px-2.5 py-1 rounded-full">{page.product}</span>
      </div>
    </header>
  );
}
