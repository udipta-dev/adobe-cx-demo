import { useNavigate } from 'react-router-dom';

const markets = [
  {
    id: 'sg',
    country: 'Singapore',
    flag: '🇸🇬',
    strategy: 'Cross-Sell & Deepen',
    dataMaturity: 'Mature',
    dataMaturityPct: 90,
    regulator: 'MAS',
    keyMetric: 'Revenue per customer +5%',
    persona: { name: 'Sarah Tan', age: 32, role: 'Existing Savings Customer', product: 'Credit Card Cross-Sell' },
    color: 'blue',
    clickable: true,
    path: '/sg/profile',
  },
  {
    id: 'id',
    country: 'Malaysia / Indonesia',
    flag: '🇲🇾 🇮🇩',
    strategy: 'Acquire & Onboard',
    dataMaturity: 'Growing',
    dataMaturityPct: 45,
    regulator: 'BNM / OJK',
    keyMetric: 'CPA reduction 20%',
    persona: { name: 'Budi Santoso', age: 28, role: 'New Digital Prospect', product: 'Digital Savings Account' },
    color: 'emerald',
    clickable: true,
    path: '/id/profile',
  },
  {
    id: 'gba',
    country: 'Greater Bay Area',
    flag: '🇭🇰 🇨🇳',
    strategy: 'Wealth Deepening',
    dataMaturity: 'Complex',
    dataMaturityPct: 65,
    regulator: 'HKMA / PBOC',
    keyMetric: 'AUM growth per client',
    persona: { name: 'Wei Chen', age: 45, role: 'Private Banking Client', product: 'Cross-Border Wealth Advisory' },
    color: 'amber',
    clickable: false,
    path: null,
  },
];

const colorMap = {
  blue: {
    gradient: 'from-blue-500 to-blue-700',
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    text: 'text-blue-700',
    bar: 'bg-blue-500',
    ring: 'ring-blue-200',
  },
  emerald: {
    gradient: 'from-emerald-500 to-emerald-700',
    bg: 'bg-emerald-50',
    border: 'border-emerald-200',
    text: 'text-emerald-700',
    bar: 'bg-emerald-500',
    ring: 'ring-emerald-200',
  },
  amber: {
    gradient: 'from-amber-500 to-amber-700',
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    text: 'text-amber-700',
    bar: 'bg-amber-500',
    ring: 'ring-amber-200',
  },
};

export default function MarketOverview() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#1B1B1F' }}>
      {/* Header */}
      <header className="px-8 py-6 border-b border-white/10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate('/')}>
            <div className="w-10 h-10 bg-adobe-red rounded-lg flex items-center justify-center">
              <span className="text-white text-lg font-bold">A</span>
            </div>
            <div>
              <h1 className="text-white text-xl font-semibold">Market Overview</h1>
              <p className="text-white/50 text-sm">One platform, three markets, three strategies</p>
            </div>
          </div>
          <button
            onClick={() => navigate('/')}
            className="text-white/50 hover:text-white/80 text-sm flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
            </svg>
            Back to Hub
          </button>
        </div>
      </header>

      {/* Content */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="max-w-6xl w-full">
          <div className="grid grid-cols-3 gap-6">
            {markets.map((market) => {
              const c = colorMap[market.color];
              return (
                <div
                  key={market.id}
                  onClick={() => market.clickable && navigate(market.path)}
                  className={`bg-white/5 border border-white/10 rounded-xl overflow-hidden transition-all ${
                    market.clickable ? 'hover:bg-white/10 hover:border-white/25 cursor-pointer' : 'opacity-80'
                  }`}
                >
                  {/* Header gradient */}
                  <div className={`bg-gradient-to-r ${c.gradient} px-6 py-4`}>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-2xl mr-2">{market.flag}</span>
                        <h3 className="text-white text-lg font-semibold inline">{market.country}</h3>
                      </div>
                      {!market.clickable && (
                        <span className="text-xs bg-white/20 text-white px-2.5 py-0.5 rounded-full">Phase 2</span>
                      )}
                    </div>
                    <p className="text-white/80 text-sm mt-1">{market.strategy}</p>
                  </div>

                  {/* Body */}
                  <div className="p-6 space-y-4">
                    {/* Data maturity */}
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-white/50">Data Maturity</span>
                        <span className="text-white/70 font-medium">{market.dataMaturity}</span>
                      </div>
                      <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <div className={`h-full ${c.bar} rounded-full`} style={{ width: `${market.dataMaturityPct}%` }} />
                      </div>
                    </div>

                    {/* Regulator */}
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-white/50">Regulator</span>
                      <span className="text-xs text-white/70 font-medium">{market.regulator}</span>
                    </div>

                    {/* Key metric */}
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-white/50">Key Metric</span>
                      <span className="text-xs text-white/70 font-medium">{market.keyMetric}</span>
                    </div>

                    {/* Persona preview */}
                    <div className="bg-white/5 rounded-lg p-3 mt-3">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${c.gradient} flex items-center justify-center text-white text-xs font-bold shrink-0`}>
                          {market.persona.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <div className="text-sm text-white font-medium">{market.persona.name}, {market.persona.age}</div>
                          <div className="text-xs text-white/50">{market.persona.role}</div>
                          <div className="text-xs text-white/40">{market.persona.product}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom narrative */}
          <div className="mt-8 text-center">
            <p className="text-white/40 text-sm max-w-2xl mx-auto">
              The same platform handles mature cross-sell in Singapore, digital acquisition in Indonesia, and cross-border wealth deepening in Greater Bay Area — each with market-specific regulatory compliance, channel strategies, and optimization goals.
            </p>
          </div>

          {/* Keyboard hint */}
          <div className="text-center mt-4 text-white/20 text-xs">
            Click a market card to explore its demo flow | ESC to return to Hub
          </div>
        </div>
      </div>
    </div>
  );
}
