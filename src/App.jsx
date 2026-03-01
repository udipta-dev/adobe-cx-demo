import { HashRouter, Routes, Route } from 'react-router-dom';
import { CoachProvider } from './context/CoachContext';
import CoachOverlay from './components/CoachOverlay';
import DemoHub from './pages/DemoHub';
import SarahProfile from './pages/sg/SarahProfile';
import SarahUnifiedProfile from './pages/sg/SarahUnifiedProfile';
import SGJourney from './pages/sg/SGJourney';
import SGDecisioning from './pages/sg/SGDecisioning';
import SGAnalytics from './pages/sg/SGAnalytics';
import BudiProfile from './pages/id/BudiProfile';
import BudiProgressiveProfile from './pages/id/BudiProgressiveProfile';
import IDJourney from './pages/id/IDJourney';
import IDDecisioning from './pages/id/IDDecisioning';
import IDAnalytics from './pages/id/IDAnalytics';
import AgentOverview from './pages/agents/AgentOverview';
import AudienceAgent from './pages/agents/AudienceAgent';
import MarketOverview from './pages/MarketOverview';
import PlatformOverview from './pages/PlatformOverview';

export default function App() {
  return (
    <HashRouter>
      <CoachProvider>
        <Routes>
          <Route path="/" element={<DemoHub />} />
          {/* Platform Overview */}
          <Route path="/platform" element={<PlatformOverview />} />
          {/* SG Cross-Sell Flow */}
          <Route path="/sg/profile" element={<SarahProfile />} />
          <Route path="/sg/unified-profile" element={<SarahUnifiedProfile />} />
          <Route path="/sg/journey" element={<SGJourney />} />
          <Route path="/sg/decisioning" element={<SGDecisioning />} />
          <Route path="/sg/analytics" element={<SGAnalytics />} />
          {/* ID Acquisition Flow */}
          <Route path="/id/profile" element={<BudiProfile />} />
          <Route path="/id/progressive-profile" element={<BudiProgressiveProfile />} />
          <Route path="/id/journey" element={<IDJourney />} />
          <Route path="/id/decisioning" element={<IDDecisioning />} />
          <Route path="/id/analytics" element={<IDAnalytics />} />
          {/* AI Agents */}
          <Route path="/agents/overview" element={<AgentOverview />} />
          <Route path="/agents/audience" element={<AudienceAgent />} />
          {/* Market Overview */}
          <Route path="/markets" element={<MarketOverview />} />
        </Routes>
        <CoachOverlay />
      </CoachProvider>
    </HashRouter>
  );
}
