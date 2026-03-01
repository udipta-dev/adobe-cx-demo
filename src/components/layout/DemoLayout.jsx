import Sidebar from './Sidebar';
import TopBar from './TopBar';
import TabRow from './TabRow';
import DemoNav from './DemoNav';

export default function DemoLayout({ flow, children }) {
  return (
    <div className="flex h-screen bg-bg-primary overflow-hidden">
      <Sidebar flow={flow} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopBar />
        <TabRow />
        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
        <DemoNav />
      </div>
    </div>
  );
}
