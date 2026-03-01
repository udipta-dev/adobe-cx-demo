import { useLocation } from 'react-router-dom';

const tabConfig = {
  // RT-CDP profile pages
  '/sg/profile': { tabs: ['Detail', 'Attributes', 'Events', 'Audience membership'], active: 'Detail' },
  '/sg/unified-profile': { tabs: ['Detail', 'Attributes', 'Events', 'Audience membership'], active: 'Detail' },
  '/id/profile': { tabs: ['Detail', 'Attributes', 'Events', 'Audience membership'], active: 'Detail' },
  '/id/progressive-profile': { tabs: ['Detail', 'Attributes', 'Events', 'Audience membership'], active: 'Events' },
  // Journey pages
  '/sg/journey': { tabs: ['Journey canvas', 'Properties', 'Alerts'], active: 'Journey canvas' },
  '/id/journey': { tabs: ['Journey canvas', 'Properties', 'Alerts'], active: 'Journey canvas' },
  // Decisioning pages
  '/sg/decisioning': { tabs: ['Overview', 'Offers', 'Decisions', 'Simulations'], active: 'Overview' },
  '/id/decisioning': { tabs: ['Overview', 'Offers', 'Decisions', 'Simulations'], active: 'Overview' },
  // Analytics pages
  '/sg/analytics': { tabs: ['Freeform', 'Blank', 'Data view'], active: 'Freeform' },
  '/id/analytics': { tabs: ['Freeform', 'Blank', 'Data view'], active: 'Freeform' },
};

export default function TabRow() {
  const location = useLocation();
  const config = tabConfig[location.pathname];

  if (!config) return null;

  return (
    <div className="bg-bg-card border-b border-border px-5 flex items-end gap-0 shrink-0">
      {config.tabs.map((tab) => {
        const isActive = tab === config.active;
        return (
          <button
            key={tab}
            className={`px-4 py-2.5 text-sm transition-colors cursor-default border-b-2 ${
              isActive
                ? 'text-adobe-blue font-medium border-adobe-blue'
                : 'text-text-secondary border-transparent'
            }`}
          >
            {tab}
          </button>
        );
      })}
    </div>
  );
}
