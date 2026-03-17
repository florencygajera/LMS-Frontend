import React, { useState, useEffect } from 'react';
import { MainLayout } from './components/layout';
import { LandingPage } from './pages/LandingPage';
import { LoginPage } from './pages/LoginPage';
import { StatCard, Card, Badge, ProgressBar, ScoreBadge } from './components/ui/Card';
import { Table } from './components/ui/Table';
import { useAppData, overall, scoreColor } from './context/AppDataContext';

// Admin Dashboard Component
const AdminDashboard = ({ page, setPage, soldiers, battalions, applications, sosAlerts }) => {
  const activeSOS = sosAlerts?.filter(s => s.status === 'active') || [];
  const avg = (arr, fn) => arr.length ? Math.round(arr.reduce((a, b) => a + fn(b), 0) / arr.length * 10) / 10 : 0;
  const avgScore = avg(soldiers, s => overall(s.scores));
  const pendingApps = applications?.filter(a => a.status === 'Under Review')?.length || 0;

  return (
    <div className="space-y-6">
      {activeSOS.map(s => (
        <div key={s.id} className="glass rounded-xl p-4 border-l-4 border-red-500 bg-red-500/10 flex items-center gap-4">
          <span className="text-2xl">🚨</span>
          <div className="flex-1">
            <div className="text-red-400 font-semibold">Active SOS - {s.id} · {s.type} · {s.battalionName}</div>
            <div className="text-sm text-white/60">{s.message} · {s.triggeredAt}</div>
          </div>
          <button onClick={() => setPage('admin-sos')} className="px-4 py-2 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30 transition-colors text-sm font-medium">
            Manage
          </button>
        </div>
      ))}

      <div>
        <h1 className="text-2xl font-bold text-white">Command Overview</h1>
        <p className="text-white/50">Agnipath Scheme · Real-time Dashboard</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <StatCard label="Total Agniveers" value={soldiers.length} icon="👥" color="blue" />
        <StatCard label="Active Duty" value={soldiers.filter(s => s.status === 'active').length} icon="💪" color="green" />
        <StatCard label="Avg. Performance" value={avgScore} icon="📊" color="purple" />
        <StatCard label="Active Battalions" value={battalions.length} icon="🏛️" color="orange" />
        <StatCard label="Pending Applications" value={pendingApps} icon="📋" color="red" />
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <Card title="Battalion Performance" icon="🏛️" action={
          <button onClick={() => setPage('admin-battalions')} className="text-xs text-[#00C2FF] hover:underline">View All</button>
        }>
          <div className="space-y-4">
            {battalions.map(b => {
              const bsoldiers = soldiers.filter(s => s.battalionId === b.id);
              const sc = bsoldiers.length ? avg(bsoldiers, s => overall(s.scores)) : 0;
              return (
                <div 
                  key={b.id} 
                  onClick={() => setPage(`bat_${b.id}`)}
                  className="glass rounded-lg p-4 cursor-pointer hover:bg-white/5 transition-colors border-l-4"
                  style={{ borderLeftColor: b.color || '#00C2FF' }}
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <div className="font-semibold text-white">{b.name}</div>
                      <div className="text-xs text-white/40">{b.code} · {bsoldiers.length} Soldiers · {b.location}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold" style={{ color: scoreColor(sc) }}>{sc}</div>
                      <ScoreBadge score={sc} />
                    </div>
                  </div>
                  <ProgressBar value={sc} max={100} color={sc >= 85 ? 'green' : sc >= 70 ? 'orange' : 'red'} />
                </div>
              );
            })}
          </div>
        </Card>

        <Card title="Top 5 Performers" icon="🏆" subtitle="This month">
          <Table
            headers={['#', 'Soldier', 'Battalion', 'Score']}
            data={soldiers
              .slice()
              .sort((a, b) => overall(b.scores) - overall(a.scores))
              .slice(0, 5)
              .map((s, i) => {
                const sc = overall(s.scores);
                const bat = battalions.find(b => b.id === s.battalionId);
                return [
                  i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : `#${i + 1}`,
                  s.name,
                  bat?.code || '-',
                  <span className="font-bold" style={{ color: scoreColor(sc) }}>{sc}</span>
                ];
              })}
          />
        </Card>
      </div>
    </div>
  );
};

// Placeholder Components
const CandidatePortal = ({ page, setPage }) => (
  <div className="text-white p-6">
    <h1 className="text-2xl font-bold mb-4">Candidate Portal</h1>
    <p className="text-white/60">Welcome to the Candidate Portal</p>
  </div>
);

const SoldierPortal = ({ page, setPage, soldiers, battalions }) => {
  const s = soldiers[0] || {};
  const sc = overall(s.scores || {});
  
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Welcome, {s.name?.split(' ')[0] || 'Soldier'}</h1>
        <p className="text-white/50">{new Date().toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard label="Overall Score" value={sc} icon="📊" color="blue" />
        <StatCard label="Global Rank" value="#12" icon="🏆" color="purple" />
        <StatCard label="Attendance" value={s.scores?.attendance || 0} icon="✅" color="green" />
        <StatCard label="Status" value="Active" icon="💪" color="orange" />
      </div>
    </div>
  );
};

const TrainerPortal = ({ page, setPage }) => (
  <div className="text-white p-6">
    <h1 className="text-2xl font-bold mb-4">Trainer Portal</h1>
    <p className="text-white/60">Trainer dashboard coming soon</p>
  </div>
);

const DoctorPortal = () => (
  <div className="text-white p-6">
    <h1 className="text-2xl font-bold mb-4">Medical Portal</h1>
    <p className="text-white/60">Medical dashboard coming soon</p>
  </div>
);

// Main App
function App() {
  const [page, setPage] = useState('home');
  const [user, setUser] = useState(null);
  const { soldiers, battalions, applications, sosAlerts } = useAppData();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  const adminPages = ['admin', 'admin-battalions', 'admin-soldiers', 'admin-rankings', 'admin-applications', 'admin-sos', 'admin-agniassist', 'admin-ml', 'admin-audit'];
  const isAdmin = adminPages.includes(page) || page.startsWith('bat_') || page.startsWith('sol_');
  const showSidebar = user && !['home', 'login', 'register'].includes(page);

  const renderContent = () => {
    switch (page) {
      case 'home':
      case 'about':
      case 'recruitment':
      case 'results':
        return <LandingPage setPage={setPage} />;
      case 'login':
        return <LoginPage mode="login" setPage={setPage} setUser={setUser} />;
      case 'register':
        return <LoginPage mode="register" setPage={setPage} setUser={setUser} />;
      case 'candidate':
      case 'status':
      case 'admitcard':
        return <CandidatePortal page={page} setPage={setPage} />;
      case 'soldier':
      case 'training':
      case 'schedule':
      case 'medical':
      case 'equipment':
      case 'stipend':
      case 'soldier-ai':
      case 'soldier-insights':
      case 'soldier-docs':
        return <SoldierPortal page={page} setPage={setPage} soldiers={soldiers} battalions={battalions} />;
      case isAdmin:
        return <AdminDashboard page={page} setPage={setPage} soldiers={soldiers} battalions={battalions} applications={applications} sosAlerts={sosAlerts} />;
      case 'trainer':
      case 'upload':
        return <TrainerPortal page={page} setPage={setPage} />;
      case 'doctor':
        return <DoctorPortal />;
      default:
        return <LandingPage setPage={setPage} />;
    }
  };

  if (['home', 'login', 'register'].includes(page)) {
    return renderContent();
  }

  return (
    <MainLayout page={page} setPage={setPage} user={user} setUser={setUser} sosAlerts={sosAlerts} showSidebar={showSidebar}>
      {renderContent()}
    </MainLayout>
  );
}

export default App;
