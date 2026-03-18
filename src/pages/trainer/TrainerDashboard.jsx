import React from 'react';
import { Card, Badge } from '../../components/ui/Card';
import { overall, scoreColor, grade } from '../../context/AppDataContext';

export const TrainerDashboard = ({ soldiers, battalion }) => {
  const batSoldiers = soldiers.filter(s => s.battalionId === battalion.id);
  const avgScore = batSoldiers.length 
    ? Math.round(batSoldiers.reduce((a, s) => a + overall(s.scores), 0) / batSoldiers.length * 10) / 10 
    : 0;
  const above85 = batSoldiers.filter(s => overall(s.scores) >= 85).length;
  const passRate = batSoldiers.length 
    ? Math.round(batSoldiers.filter(s => overall(s.scores) >= 70).length / batSoldiers.length * 100) 
    : 0;

  const stats = [
    { label: 'Soldiers', value: batSoldiers.length },
    { label: 'Avg. Score', value: avgScore },
    { label: 'Above 85', value: above85 },
    { label: 'Pass Rate', value: `${passRate}%` }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Trainer Dashboard</h1>
        <p className="text-white/50">{battalion.name}</p>
      </div>

      {/* Stats */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <div key={i} className="glass rounded-xl p-4">
            <p className="text-xs font-bold uppercase tracking-wider text-white/50 mb-1">{stat.label}</p>
            <p className="text-2xl font-bold text-white">{stat.value}</p>
          </div>
        ))}
      </div>

      <Card title={`Soldier Scores — ${battalion.name}`}>
        <div className="space-y-3">
          {batSoldiers.map((soldier, i) => {
            const sc = overall(soldier.scores);
            return (
              <div key={i} className="flex items-center gap-4 py-2 border-b border-white/5 last:border-0">
                <div className="flex-1 font-medium text-sm">{soldier.name}</div>
                <div className="w-32 h-2 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${sc}%`,
                      backgroundColor: scoreColor(sc)
                    }}
                  />
                </div>
                <div className="w-10 text-right font-bold" style={{ color: scoreColor(sc) }}>
                  {sc}
                </div>
                <Badge type={grade(sc).c} text={grade(sc).l} />
              </div>
            );
          })}
        </div>
      </Card>
    </div>
  );
};

export default TrainerDashboard;
