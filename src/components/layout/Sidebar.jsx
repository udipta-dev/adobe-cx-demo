import { useLocation, useNavigate } from 'react-router-dom';

const sidebarConfig = {
  sg: {
    product: 'Real-Time CDP',
    sections: [
      {
        label: 'CUSTOMER',
        items: [
          { label: 'Profiles', path: '/sg/profile', icon: 'person', matchPaths: ['/sg/profile', '/sg/unified-profile'] },
          { label: 'Audiences', path: null, icon: 'audience' },
          { label: 'Identities', path: null, icon: 'identity' },
        ],
      },
      {
        label: 'JOURNEYS',
        items: [
          { label: 'Journeys', path: '/sg/journey', icon: 'journey' },
          { label: 'Decisioning', path: '/sg/decisioning', icon: 'decision' },
        ],
      },
      {
        label: 'INSIGHTS',
        items: [
          { label: 'Analytics', path: '/sg/analytics', icon: 'analytics' },
        ],
      },
    ],
  },
  id: {
    product: 'Real-Time CDP',
    sections: [
      {
        label: 'CUSTOMER',
        items: [
          { label: 'Profiles', path: '/id/profile', icon: 'person', matchPaths: ['/id/profile', '/id/progressive-profile'] },
          { label: 'Audiences', path: null, icon: 'audience' },
          { label: 'Identities', path: null, icon: 'identity' },
        ],
      },
      {
        label: 'JOURNEYS',
        items: [
          { label: 'Journeys', path: '/id/journey', icon: 'journey' },
          { label: 'Decisioning', path: '/id/decisioning', icon: 'decision' },
        ],
      },
      {
        label: 'INSIGHTS',
        items: [
          { label: 'Analytics', path: '/id/analytics', icon: 'analytics' },
        ],
      },
    ],
  },
  agents: {
    product: 'Experience Platform',
    sections: [
      {
        label: 'AI AGENTS',
        items: [
          { label: 'Agent Overview', path: '/agents/overview', icon: 'agents' },
          { label: 'Audience Agent', path: '/agents/audience', icon: 'audience' },
        ],
      },
    ],
  },
};

const icons = {
  person: (
    <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0" />
    </svg>
  ),
  identity: (
    <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.864 4.243A7.5 7.5 0 0 1 19.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 0 0 4.5 10.5a48.667 48.667 0 0 0-1.106 8.334M12 3v.75m0 16.5V21m-4.773-1.684L7.5 19.5m9-15 .273-.816" />
    </svg>
  ),
  journey: (
    <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6Z" />
    </svg>
  ),
  decision: (
    <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
  ),
  analytics: (
    <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
    </svg>
  ),
  agents: (
    <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
    </svg>
  ),
  audience: (
    <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
    </svg>
  ),
  home: (
    <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
    </svg>
  ),
  workflows: (
    <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
    </svg>
  ),
  dashboards: (
    <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25a2.25 2.25 0 0 1-2.25-2.25v-2.25Z" />
    </svg>
  ),
};

export default function Sidebar({ flow }) {
  const location = useLocation();
  const navigate = useNavigate();
  const config = sidebarConfig[flow];
  if (!config) return null;

  const isActive = (item) => {
    if (item.matchPaths) return item.matchPaths.includes(location.pathname);
    return item.path === location.pathname;
  };

  return (
    <aside className="w-60 bg-sidebar h-screen flex flex-col border-r border-border shrink-0">
      {/* Adobe logo area — clickable to go home */}
      <div
        className="px-4 py-3 border-b border-border cursor-pointer hover:bg-sidebar-hover transition-colors"
        onClick={() => navigate('/')}
      >
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 bg-adobe-red rounded flex items-center justify-center">
            <span className="text-white text-xs font-bold">A</span>
          </div>
          <span className="text-sm font-semibold text-text-primary">Adobe Experience Platform</span>
        </div>
      </div>

      {/* Top nav items */}
      <div className="px-2 pt-3 pb-1 space-y-0.5">
        {[
          { label: 'Home', icon: 'home' },
          { label: 'Workflows', icon: 'workflows' },
          { label: 'Dashboards', icon: 'dashboards' },
        ].map((item) => (
          <button
            key={item.label}
            className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm text-sidebar-text hover:bg-sidebar-hover transition-colors text-left cursor-default"
          >
            <span className="text-sidebar-header">{icons[item.icon]}</span>
            {item.label}
          </button>
        ))}
      </div>

      {/* Sectioned nav */}
      <nav className="flex-1 py-2 px-2 space-y-4 overflow-y-auto">
        {config.sections.map((section) => (
          <div key={section.label}>
            <div className="px-3 py-1.5 text-[11px] font-semibold tracking-wider text-sidebar-header">
              {section.label}
            </div>
            <div className="space-y-0.5">
              {section.items.map((item) => {
                const active = isActive(item);
                return (
                  <button
                    key={item.label}
                    onClick={() => item.path && navigate(item.path)}
                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors text-left ${
                      active
                        ? 'text-sidebar-active bg-blue-50 font-medium border-l-3 border-sidebar-active'
                        : item.path
                          ? 'text-sidebar-text hover:bg-sidebar-hover cursor-pointer'
                          : 'text-sidebar-text/50 cursor-default'
                    }`}
                  >
                    <span className={active ? 'text-sidebar-active' : 'text-sidebar-header'}>{icons[item.icon]}</span>
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      {/* Bottom: back to hub */}
      <div className="px-2 py-3 border-t border-border">
        <button
          onClick={() => navigate('/')}
          className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm text-text-secondary hover:bg-sidebar-hover hover:text-text-primary transition-colors cursor-pointer"
        >
          <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
          </svg>
          Back to Demo Hub
        </button>
        <div className="px-3 mt-1 text-[10px] text-text-secondary/50">
          ESC = Hub | Arrow Keys = Navigate
        </div>
      </div>
    </aside>
  );
}
