import React, { useState } from 'react';
import { Card, Badge, ProgressBar } from '../../components/ui/Card';
import { overall, scoreColor, grade, getInsights } from '../../context/AppDataContext';

export const SoldierDashboard = ({ soldier, battalion, allSoldiers }) => {
  const sc = overall(soldier.scores);
  const ins = getInsights(soldier.scores);
  
  // Calculate ranks
  const ranked = [...allSoldiers].sort((a, b) => overall(b.scores) - overall(a.scores));
  const globalRank = ranked.findIndex(x => x.id === soldier.id) + 1;
  
  const batSoldiers = allSoldiers.filter(x => x.battalionId === soldier.battalionId);
  const batRanked = [...batSoldiers].sort((a, b) => overall(b.scores) - overall(a.scores));
  const batRank = batRanked.findIndex(x => x.id === soldier.id) + 1;

  const scoreCategories = [
    { key: 'physical', label: 'Physical' },
    { key: 'weapons', label: 'Weapons' },
    { key: 'mental', label: 'Mental' },
    { key: 'combat', label: 'Combat' },
    { key: 'attendance', label: 'Attendance' },
    { key: 'discipline', label: 'Discipline' }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Welcome, {soldier.name.split(' ')[0]}</h1>
        <p className="text-white/50">Friday, 14 March 2025 · {battalion.name}</p>
      </div>

      {/* Stats Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="glass rounded-xl p-4 border-l-4 border-[#FFB800]">
          <p className="text-xs font-bold uppercase tracking-wider text-white/50 mb-1">Overall Score</p>
          <p className="text-3xl font-bold text-[#FFB800]">{sc}</p>
          <Badge type={grade(sc).c} text={grade(sc).l} />
        </div>
        <div className="glass rounded-xl p-4 border-l-4 border-[#00C2FF]">
          <p className="text-xs font-bold uppercase tracking-wider text-white/50 mb-1">Global Rank</p>
          <p className="text-3xl font-bold text-white">#{globalRank}</p>
          <p className="text-sm text-white/50">All Agniveers</p>
        </div>
        <div className="glass rounded-xl p-4 border-l-4 border-[#00FF88]">
          <p className="text-xs font-bold uppercase tracking-wider text-white/50 mb-1">Battalion Rank</p>
          <p className="text-3xl font-bold text-white">#{batRank}</p>
          <p className="text-sm text-white/50">{battalion.name}</p>
        </div>
        <div className="glass rounded-xl p-4 border-l-4 border-[#00FF88]">
          <p className="text-xs font-bold uppercase tracking-wider text-white/50 mb-1">Attendance</p>
          <p className="text-3xl font-bold text-[#00FF88]">{soldier.scores.attendance}%</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* My Scores */}
        <Card title="My Scores — March 2025">
          <div className="space-y-4">
            {scoreCategories.map(cat => (
              <div key={cat.key}>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm text-white/70">{cat.label}</span>
                  <span className="text-sm font-bold" style={{ color: scoreColor(soldier.scores[cat.key]) }}>
                    {soldier.scores[cat.key]}/100
                  </span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{
                      width: `${soldier.scores[cat.key]}%`,
                      backgroundColor: scoreColor(soldier.scores[cat.key])
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Strengths */}
        <div className="space-y-4">
          <Card title="✅ Strengths">
            <div className="space-y-3">
              {ins.strengths.length === 0 ? (
                <p className="text-sm text-white/50">No category above 85 yet. Keep going!</p>
              ) : (
                ins.strengths.map((it, i) => (
                  <div key={i} className="flex gap-3 py-2 border-b border-white/5 last:border-0">
                    <span className="text-xl">✅</span>
                    <div>
                      <p className="text-sm font-semibold text-[#00FF88]">{it.label} — {it.score}</p>
                      <p className="text-xs text-white/50 mt-1">{it.tip}</p>
                    </div>
                  </div>
                ))
              )}
            </div>
          </Card>

          <Card title="🔧 Areas to Improve">
            <div className="space-y-3">
              {ins.improvements.length === 0 ? (
                <p className="text-sm text-[#00FF88] font-semibold">No critical weaknesses. Great!</p>
              ) : (
                ins.improvements.map((it, i) => (
                  <div key={i} className="flex gap-3 py-2 border-b border-white/5 last:border-0">
                    <span className="text-xl">🔧</span>
                    <div>
                      <p className="text-sm font-semibold text-red-400">{it.label} — {it.score}</p>
                      <p className="text-xs text-white/50 mt-1">{it.tip}</p>
                    </div>
                  </div>
                ))
              )}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SoldierDashboard;
