import { useDemoNav } from '../../hooks/useDemoNav';

export default function DemoNav() {
  const { getCurrentFlow, getCurrentIndex, goNext, goPrev, goHome } = useDemoNav();
  const flow = getCurrentFlow();
  const idx = getCurrentIndex();

  if (!flow) return null;

  const isFirst = idx === 0;
  const isLast = idx === flow.routes.length - 1;

  return (
    <div className="h-12 bg-bg-card border-t border-border flex items-center justify-between px-6 shrink-0">
      <button
        onClick={isFirst ? goHome : goPrev}
        className="flex items-center gap-1.5 text-sm text-text-secondary hover:text-text-primary transition-colors cursor-pointer"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
        {isFirst ? 'Demo Hub' : 'Previous'}
      </button>

      <span className="text-xs text-text-secondary">
        {idx + 1} / {flow.routes.length}
      </span>

      <button
        data-coach={isLast ? 'hub-btn' : 'next-btn'}
        onClick={isLast ? goHome : goNext}
        className="flex items-center gap-1.5 text-sm text-adobe-blue hover:text-adobe-blue-dark font-medium transition-colors cursor-pointer"
      >
        {isLast ? 'Back to Hub' : 'Next'}
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
      </button>
    </div>
  );
}
