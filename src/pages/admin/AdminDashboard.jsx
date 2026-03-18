import React from 'react';
import { Card, Badge } from '../../components/ui/Card';
import { overall, scoreColor, grade, getInsights } from '../../context/AppDataContext';

export const AdminDashboard = ({ page, setPage, soldiers, battalions, applications, sosAlerts, onTriggerSOS }) => {
  const activeSOS = sosAlerts?.filter(s => s.status === 'active') || [];
  
  const avg = (arr, fn) => arr.length ? Math.round(arr.reduce((a, b) => a + fn(b), 0) / arr.length * 10) / 10 : 0;
  const avgScore = avg(soldiers, s => overall(s.scores));
  const pendingApps = applications?.filter(a => a.status === 'Under Review')?.length || 0;

  return (
    <div className="space-y-6">
      {/* Active SOS Alerts */}
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

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <div className="glass rounded-xl p-4">
          <p className="text-xs font-bold uppercase tracking-wider text-white/50 mb-1">Total Agniveers</p>
          <p className="text-2xl font-bold text-white">{soldiers.length}</p>
          <p className="text-xs text-white/40">Across all battalions</p>
        </div>
        <div className="glass rounded-xl p-4 border-l-4 border-[#FFB800]">
          <p className="text-xs font-bold uppercase tracking-wider text-white/50 mb-1">Active Duty</p>
          <p className="text-2xl font-bold text-[#FFB800]">{soldiers.filter(s => s.status === 'active').length}</p>
          <p className="text-xs text-white/40">{soldiers.filter(s => s.status === 'on_leave').length} on leave</p>
        </div>
        <div className="glass rounded-xl p-4 border-l-4 border-[#00FF88]">
          <p className="text-xs font-bold uppercase tracking-wider text-white/50 mb-1">Avg. Performance</p>
          <p className="text-2xl font-bold text-[#00FF88]">{avgScore}</p>
          <p className="text-xs text-white/40">Out of 100</p>
        </div>
        <div className="glass rounded-xl p-4 border-l-4 border-[#00C2FF]">
          <p className="text-xs font-bold uppercase tracking-wider text-white/50 mb-1">Active Battalions</p>
          <p className="text-2xl font-bold text-white">{battalions.length}</p>
        </div>
        <div className="glass rounded-xl p-4 border-l-4 border-red-500">
          <p className="text-xs font-bold uppercase tracking-wider text-white/50 mb-1">Pending Applications</p>
          <p className="text-2xl font-bold text-red-400">{pendingApps}</p>
          <p className="text-xs text-white/40">Need review</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Battalion Performance */}
        <Card title="Battalion Performance" icon="🏛️" action={
          <button onClick={() => setPage('admin-battalions')} className="text-xs text-[#00C2FF] hover:underline">View All</button>
        }>
          <div className="space-y-4">
            {battalions.map(b => {
              const bsoldiers = soldiers.filter(s => s.battalionId === b.id);
              const sc = bsoldiers.length ? Math.round(bsoldiers.reduce((a, s) => a + overall(s.scores), 0) / bsoldiers.length * 10) / 10 : 0;
              return (
                <div
                  key={b.id}
                  onClick={() => setPage(`bat_${b.id}`)}
                  className="p-3 rounded-lg bg-white/5 border border-white/10 cursor-pointer hover:bg-white/10 transition-colors"
                  style={{ borderLeftColor: b.color, borderLeftWidth: '4px' }}
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <p className="font-semibold text-white">{b.name}</p>
                      <p className="text-xs text-white/50">{b.code} · {bsoldiers.length} Soldiers · {b.location}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-bold" style={{ color: scoreColor(sc) }}>{sc}</p>
                      <Badge type={grade(sc).c} text={grade(sc).l} />
                    </div>
                  </div>
                  <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{
                        width: `${sc}%`,
                        backgroundColor: scoreColor(sc)
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </Card>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Top 5 Performers */}
          <Card title="Top 5 Performers" subtitle="This month">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-2 text-xs font-bold uppercase tracking-wider text-white/50">#</th>
                  <th className="text-left py-2 text-xs font-bold uppercase tracking-wider text-white/50">Soldier</th>
                  <th className="text-left py-2 text-xs font-bold uppercase tracking-wider text-white/50">Battalion</th>
                  <th className="text-left py-2 text-xs font-bold uppercase tracking-wider text-white/50">Score</th>
                </tr>
              </thead>
              <tbody>
                {[...soldiers].sort((a, b) => overall(b.scores) - overall(a.scores)).slice(0, 5).map((s, i) => {
                  const sc = overall(s.scores);
                  const bat = battalions.find(b => b.id === s.battalionId);
                  return (
                    <tr
                      key={i}
                      onClick={() => setPage(`sol_${s.id}`)}
                      className="border-b border-white/5 hover:bg-white/5 cursor-pointer transition-colors"
                    >
                      <td className="py-2 font-bold">{i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : `#${i + 1}`}</td>
                      <td className="py-2 font-medium">{s.name}</td>
                      <td className="py-2 text-white/50">{bat?.code}</td>
                      <td className="py-2 font-bold" style={{ color: scoreColor(sc) }}>{sc}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Card>

          {/* Needs Attention */}
          <Card title="⚠️ Needs Attention" subtitle="Score < 75">
            {[...soldiers].filter(s => overall(s.scores) < 75).sort((a, b) => overall(a.scores) - overall(b.scores)).slice(0, 5).map((s, i) => {
              const sc = overall(s.scores);
              const bat = battalions.find(b => b.id === s.battalionId);
              const ins = getInsights(s.scores);
              return (
                <div
                  key={i}
                  onClick={() => setPage(`sol_${s.id}`)}
                  className="flex items-center gap-4 py-2 border-b border-white/5 last:border-0 hover:bg-white/5 cursor-pointer transition-colors"
                >
                  <span className="font-medium flex-1">{s.name}</span>
                  <span className="text-white/50 text-sm">{bat?.code}</span>
                  <span className="font-bold text-red-400">{sc}</span>
                  <Badge type="red" text={ins.improvements[0]?.label || '—'} />
                </div>
              );
            })}
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
