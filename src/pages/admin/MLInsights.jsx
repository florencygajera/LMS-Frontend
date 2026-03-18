import React, { useState } from 'react';
import { Card, Badge, ProgressBar } from '../../components/ui/Card';
import { Table } from '../../components/ui/Table';
import { overall, scoreColor, grade, getInsights } from '../../context/AppDataContext';

export const MLInsights = ({ soldiers, battalions }) => {
  const [selSoldier, setSelSoldier] = useState(soldiers[0]);
  const [selBat, setSelBat] = useState(battalions[0]);
  const [tab, setTab] = useState('soldier');

  const sc = overall(selSoldier.scores);
  const predicted = Math.min(100, Math.round(sc + 2.3));
  const injRisk = selSoldier.scores.physical < 75 ? 'HIGH' : selSoldier.scores.physical < 85 ? 'MODERATE' : 'LOW';
  
  const batSoldiers = soldiers.filter(s => s.battalionId === selBat.id);
  const batAvg = batSoldiers.length ? Math.round(batSoldiers.reduce((a, s) => a + overall(s.scores), 0) / batSoldiers.length * 10) / 10 : 0;
  const declining = batSoldiers.filter(s => overall(s.scores) < 75).length;
  const highRisk = batSoldiers.filter(s => s.scores.physical < 75).length;

  const tabs = [
    { id: 'soldier', label: 'Soldier Insights' },
    { id: 'battalion', label: 'Battalion Insights' },
    { id: 'schedule', label: 'AI-Optimised Schedule' },
    { id: 'medical', label: 'Medical Risk Analysis' }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">📈 ML Insights Engine</h1>
        <p className="text-white/50">Powered by AgniAssist ML Service · Performance predictions, injury risk & trend analysis</p>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 border-b border-white/10">
        {tabs.map(t => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`px-4 py-3 text-sm font-medium transition-colors border-b-2 -mb-px ${
              tab === t.id
                ? 'text-[#00C2FF] border-[#00C2FF]'
                : 'text-white/50 border-transparent hover:text-white'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {tab === 'soldier' && (
        <div className="space-y-6">
          {/* Soldier Selector */}
          <Card>
            <div className="flex items-center gap-4">
              <label className="text-white/70 text-sm">Select Soldier:</label>
              <select
                value={selSoldier.id}
                onChange={(e) => setSelSoldier(soldiers.find(s => s.id === parseInt(e.target.value)))}
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#00C2FF]"
              >
                {soldiers.map(s => (
                  <option key={s.id} value={s.id}>{s.name} — {s.soldierId}</option>
                ))}
              </select>
            </div>
          </Card>

          {/* AI Cards */}
          <div className="grid md:grid-cols-3 gap-4">
            <div className={`glass rounded-xl p-4 border-l-4 ${injRisk === 'LOW' ? 'border-[#00FF88]' : injRisk === 'MODERATE' ? 'border-[#FFB800]' : 'border-red-500'}`}>
              <p className="text-xs font-bold uppercase tracking-wider text-white/50 mb-2">Injury Risk</p>
              <p className="text-3xl font-bold text-white">{injRisk}</p>
              <p className="text-sm text-white/50 mt-1">Probability: {injRisk === 'LOW' ? '12%' : injRisk === 'MODERATE' ? '28%' : '47%'}</p>
              <Badge type={injRisk === 'LOW' ? 'green' : injRisk === 'MODERATE' ? 'orange' : 'red'} text={injRisk} />
            </div>

            <div className="glass rounded-xl p-4 border-l-4 border-[#00FF88]">
              <p className="text-xs font-bold uppercase tracking-wider text-white/50 mb-2">Predicted Score (30 days)</p>
              <p className="text-3xl font-bold text-white">{predicted}</p>
              <p className="text-sm text-white/50 mt-1">Current: {sc} · Change: +{(predicted - sc).toFixed(1)}</p>
              <Badge type="green" text="↑ Improving" />
            </div>

            <div className={`glass rounded-xl p-4 border-l-4 ${sc >= 85 ? 'border-[#00FF88]' : sc >= 70 ? 'border-[#FFB800]' : 'border-red-500'}`}>
              <p className="text-xs font-bold uppercase tracking-wider text-white/50 mb-2">Performance Status</p>
              <p className={`text-3xl font-bold ${sc >= 85 ? 'text-[#00FF88]' : sc >= 70 ? 'text-[#FFB800]' : 'text-red-400'}`}>
                {sc >= 85 ? 'Excellent' : sc >= 70 ? 'Average' : 'At Risk'}
              </p>
              <p className="text-sm text-white/50 mt-1">Rank #{[...soldiers].sort((a, b) => overall(b.scores) - overall(a.scores)).findIndex(x => x.id === selSoldier.id) + 1} of {soldiers.length}</p>
              <Badge type={grade(sc).c} text={grade(sc).l} />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            <Card title={`AI Recommendations for ${selSoldier.name}`}>
              <ul className="space-y-3">
                {getInsights(selSoldier.scores).improvements.map((it, i) => (
                  <li key={i} className="flex gap-2 text-sm">
                    <span className="text-[#00C2FF]">→</span>
                    <span><strong>{it.label}</strong>: {it.tip}</span>
                  </li>
                ))}
                {getInsights(selSoldier.scores).warnings.map((it, i) => (
                  <li key={i} className="flex gap-2 text-sm">
                    <span className="text-[#FFB800]">→</span>
                    <span><strong>{it.label}</strong>: {it.tip}</span>
                  </li>
                ))}
                {getInsights(selSoldier.scores).improvements.length === 0 && getInsights(selSoldier.scores).warnings.length === 0 && (
                  <li className="text-sm text-[#00FF88]">All categories performing well. Consider advanced training programme.</li>
                )}
              </ul>
            </Card>

            <Card title="6-Month Trend Analysis">
              {['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'].map((month, i, arr) => {
                const value = Math.max(60, sc - (arr.length - 1 - i) * 2);
                return (
                  <div key={month} className="flex items-center gap-3 mb-2">
                    <span className="w-8 text-xs text-white/50">{month}</span>
                    <div className="flex-1 h-2 bg-white/10 rounded">
                      <div
                        className="h-full rounded"
                        style={{
                          width: `${value}%`,
                          backgroundColor: i === arr.length - 1 ? '#FFB800' : '#00C2FF'
                        }}
                      />
                    </div>
                    <span className="w-8 text-right text-sm font-bold" style={{ color: scoreColor(value) }}>{value}</span>
                  </div>
                );
              })}
            </Card>
          </div>
        </div>
      )}

      {tab === 'battalion' && (
        <div className="space-y-6">
          <Card>
            <div className="flex items-center gap-4">
              <label className="text-white/70 text-sm">Select Battalion:</label>
              <select
                value={selBat.id}
                onChange={(e) => setSelBat(battalions.find(b => b.id === parseInt(e.target.value)))}
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#00C2FF]"
              >
                {battalions.map(b => (
                  <option key={b.id} value={b.id}>{b.name}</option>
                ))}
              </select>
            </div>
          </Card>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="glass rounded-xl p-4 border-l-4 border-[#00FF88]">
              <p className="text-xs font-bold uppercase tracking-wider text-white/50 mb-2">Average Performance</p>
              <p className="text-3xl font-bold text-white">{batAvg}</p>
              <p className="text-sm text-white/50 mt-1">{batSoldiers.length} soldiers · {batSoldiers.filter(s => overall(s.scores) >= 85).length} outstanding</p>
              <Badge type={batAvg >= 80 ? 'green' : batAvg >= 70 ? 'orange' : 'red'} text={grade(batAvg).l} />
            </div>

            <div className={`glass rounded-xl p-4 border-l-4 ${highRisk === 0 ? 'border-[#00FF88]' : highRisk < 3 ? 'border-[#FFB800]' : 'border-red-500'}`}>
              <p className="text-xs font-bold uppercase tracking-wider text-white/50 mb-2">High Injury Risk Soldiers</p>
              <p className="text-3xl font-bold text-white">{highRisk}</p>
              <p className="text-sm text-white/50 mt-1">Physical score below 75</p>
              <Badge type={highRisk === 0 ? 'green' : highRisk < 3 ? 'orange' : 'red'} text={highRisk === 0 ? 'None' : 'Action Needed'} />
            </div>

            <div className={`glass rounded-xl p-4 border-l-4 ${declining === 0 ? 'border-[#00FF88]' : declining < 3 ? 'border-[#FFB800]' : 'border-red-500'}`}>
              <p className="text-xs font-bold uppercase tracking-wider text-white/50 mb-2">Declining Performance</p>
              <p className="text-3xl font-bold text-white">{declining}</p>
              <p className="text-sm text-white/50 mt-1">Overall score below 75</p>
              <Badge type={declining === 0 ? 'green' : declining < 3 ? 'orange' : 'red'} text={declining === 0 ? 'None' : 'Monitor'} />
            </div>
          </div>

          <Card title={`Battalion AI Recommendations — ${selBat.name}`}>
            <ul className="space-y-3">
              {declining > 0 && (
                <li className="flex gap-2 text-sm">
                  <span className="text-[#FFB800]">→</span>
                  <span>Organise additional fitness training for {declining} soldiers with scores below 75. Assign senior Naik as buddy trainer.</span>
                </li>
              )}
              {highRisk > 0 && (
                <li className="flex gap-2 text-sm">
                  <span className="text-red-400">→</span>
                  <span>Medical review recommended for {highRisk} soldiers with high injury risk. Schedule checkup with Medical Officer.</span>
                </li>
              )}
              <li className="flex gap-2 text-sm">
                <span className="text-[#00C2FF]">→</span>
                <span>Monthly peer mentorship sessions — pair top-performing soldiers (Score ≥ 90) with those in the 70–80 range.</span>
              </li>
              <li className="flex gap-2 text-sm">
                <span className="text-[#00C2FF]">→</span>
                <span>Weapons accuracy average is {Math.round(batSoldiers.reduce((a, s) => a + s.scores.weapons, 0) / batSoldiers.length)}. Schedule 2 additional range sessions this month.</span>
              </li>
              <li className="flex gap-2 text-sm">
                <span className="text-[#00C2FF]">→</span>
                <span>Attendance rate is {Math.round(batSoldiers.reduce((a, s) => a + s.scores.attendance, 0) / batSoldiers.length)}%. Any soldier below 85% should be counselled.</span>
              </li>
            </ul>
          </Card>
        </div>
      )}

      {tab === 'schedule' && (
        <div className="space-y-6">
          <Card>
            <div className="flex items-center gap-4">
              <label className="text-white/70 text-sm">Select Soldier for AI-Optimised Schedule:</label>
              <select
                value={selSoldier.id}
                onChange={(e) => setSelSoldier(soldiers.find(s => s.id === parseInt(e.target.value)))}
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#00C2FF]"
              >
                {soldiers.map(s => (
                  <option key={s.id} value={s.id}>{s.name}</option>
                ))}
              </select>
            </div>
          </Card>

          <div className="glass rounded-xl p-4 text-sm">
            <p>📍 Endpoint: <code className="bg-white/10 px-2 py-1 rounded">/api/ml/training/optimize</code></p>
          </div>

          {[
            { day: 'Monday', focus: 'Cardio & Endurance', color: '#00C2FF' },
            { day: 'Tuesday', focus: 'Weapons Training', color: '#00FF88' },
            { day: 'Wednesday', focus: 'Strength & Combat', color: '#FFB800' },
            { day: 'Thursday', focus: 'Mental Resilience', color: '#00C2FF' }
          ].map((d, i) => (
            <Card key={i} title={d.day} subtitle={`Focus: ${d.focus}`}>
              {[
                { time: '05:00', activity: '5km Run (Timed)', duration: '40 min', intensity: 'High' },
                { time: '08:00', activity: 'Endurance Circuit', duration: '45 min', intensity: 'High' },
                { time: '16:30', activity: 'Evening PT', duration: '30 min', intensity: 'Medium' }
              ].map((act, j) => (
                <div key={j} className="flex items-center gap-4 py-2 border-b border-white/5 last:border-0">
                  <span className="font-mono text-sm text-white/50 w-12">{act.time}</span>
                  <span className="flex-1">{act.activity}</span>
                  <span className="text-white/50 text-sm">{act.duration}</span>
                  <Badge type={act.intensity === 'High' ? 'red' : act.intensity === 'Medium' ? 'orange' : 'green'} text={act.intensity} />
                </div>
              ))}
            </Card>
          ))}
        </div>
      )}

      {tab === 'medical' && (
        <div className="space-y-6">
          <Card>
            <div className="flex items-center gap-4">
              <label className="text-white/70 text-sm">Select Soldier for Medical Risk Analysis:</label>
              <select
                value={selSoldier.id}
                onChange={(e) => setSelSoldier(soldiers.find(s => s.id === parseInt(e.target.value)))}
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#00C2FF]"
              >
                {soldiers.map(s => (
                  <option key={s.id} value={s.id}>{s.name}</option>
                ))}
              </select>
            </div>
          </Card>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              { label: 'Fatigue Risk', value: selSoldier.scores.attendance < 88 ? 'MODERATE' : 'LOW', c: selSoldier.scores.attendance < 88 ? 'orange' : 'green' },
              { label: 'Overtraining Risk', value: selSoldier.scores.physical > 90 ? 'MODERATE' : 'LOW', c: selSoldier.scores.physical > 90 ? 'orange' : 'green' },
              { label: 'Injury Probability', value: `${selSoldier.scores.physical < 75 ? '28' : selSoldier.scores.physical < 85 ? '15' : '8'}%`, c: selSoldier.scores.physical < 75 ? 'red' : selSoldier.scores.physical < 85 ? 'orange' : 'green' },
              { label: 'Dehydration Risk', value: 'LOW', c: 'green' },
              { label: 'Mental Health Flag', value: selSoldier.scores.mental < 70 ? 'MONITOR' : 'NORMAL', c: selSoldier.scores.mental < 70 ? 'orange' : 'green' },
              { label: 'Follow-up Needed', value: selSoldier.medical.includes('Observation') ? 'YES' : 'NO', c: selSoldier.medical.includes('Observation') ? 'red' : 'green' }
            ].map((item, i) => (
              <div key={i} className={`glass rounded-xl p-4 border-l-4 ${item.c === 'green' ? 'border-[#00FF88]' : item.c === 'orange' ? 'border-[#FFB800]' : 'border-red-500'}`}>
                <p className="text-xs font-bold uppercase tracking-wider text-white/50 mb-2">{item.label}</p>
                <p className="text-2xl font-bold text-white">{item.value}</p>
                <Badge type={item.c} text={item.c === 'green' ? 'Normal' : item.c === 'orange' ? 'Monitor' : 'Action Required'} />
              </div>
            ))}
          </div>

          {selSoldier.medical.includes('Observation') && (
            <div className="glass rounded-xl p-4 border border-red-500/30 bg-red-500/10">
              <p className="text-red-400 font-semibold">
                ⚠️ {selSoldier.name} is currently under medical observation ({selSoldier.medical}). 
                Recommend scheduling a review with the Medical Officer within 7 days.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MLInsights;
