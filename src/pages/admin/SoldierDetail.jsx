import React, { useState } from 'react';
import { Card, Badge, ProgressBar, ScoreBadge } from '../../components/ui/Card';
import { Table } from '../../components/ui/Table';
import { overall, scoreColor, grade, getInsights } from '../../context/AppDataContext';

export const SoldierDetail = ({ solId, soldiers, battalions, setPage, onEdit }) => {
  const s = soldiers.find(x => x.id === solId);
  const bat = s ? battalions.find(b => b.id === s.battalionId) : null;
  const [tab, setTab] = useState('overview');

  if (!s || !bat) {
    return (
      <div className="glass rounded-xl p-6 border border-red-500/30">
        <p className="text-red-400">Soldier not found.</p>
        <button onClick={() => setPage('admin-soldiers')} className="text-[#00C2FF] hover:underline mt-2">
          Go back
        </button>
      </div>
    );
  }

  const sc = overall(s.scores);
  const ins = getInsights(s.scores);
  
  const allRanked = [...soldiers].sort((a, b) => overall(b.scores) - overall(a.scores));
  const globalRank = allRanked.findIndex(x => x.id === s.id) + 1;
  
  const batRanked = [...soldiers.filter(x => x.battalionId === s.battalionId)].sort((a, b) => overall(b.scores) - overall(a.scores));
  const batRank = batRanked.findIndex(x => x.id === s.id) + 1;

  const tabs = [
    { id: 'overview', label: 'Overview & Insights' },
    { id: 'scores', label: 'All Scores' },
    { id: 'personal', label: 'Personal Details' },
    { id: 'equipment', label: 'Equipment' },
    { id: 'events', label: 'Events & Awards' }
  ];

  return (
    <div className="space-y-6">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm">
        <button onClick={() => setPage('admin')} className="text-[#00C2FF] hover:underline">Dashboard</button>
        <span className="text-white/30">›</span>
        <button onClick={() => setPage('admin-battalions')} className="text-[#00C2FF] hover:underline">Battalions</button>
        <span className="text-white/30">›</span>
        <button onClick={() => setPage(`bat_${bat.id}`)} className="text-[#00C2FF] hover:underline">{bat.name}</button>
        <span className="text-white/30">›</span>
        <span className="text-white/60">{s.name}</span>
      </div>

      {/* Soldier Header */}
      <Card>
        <div className="flex gap-6 flex-wrap">
          <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center text-4xl flex-shrink-0">
            👤
          </div>
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-white">{s.name}</h1>
            <div className="flex flex-wrap gap-2 mt-2">
              <Badge type={s.status === 'active' ? 'green' : s.status === 'on_leave' ? 'orange' : 'gray'} text={s.status === 'active' ? 'Active' : s.status === 'on_leave' ? 'On Leave' : 'Inactive'} />
              <Badge type="blue" text={s.rank} />
              <Badge type="gray" text={s.blood} />
              <Badge type="yellow" text={bat.name} />
            </div>
            <div className="flex flex-wrap gap-4 mt-3 text-sm text-white/60">
              <span>🪪 {s.soldierId}</span>
              <span>📅 DOJ: {new Date(s.joining).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
              <span>📍 {s.city}, {s.state}</span>
              <span>📞 {s.phone}</span>
              <span>🏥 {s.medical}</span>
            </div>
          </div>
          <div className="text-center px-6 border-l border-white/10">
            <div className="text-4xl font-bold" style={{ color: scoreColor(sc) }}>{sc}</div>
            <p className="text-xs text-white/40 uppercase tracking-wider mt-1">Overall Score</p>
            <ScoreBadge score={sc} />
            <p className="text-sm text-white/50 mt-2">
              Global: <span className="font-bold text-white">#{globalRank}</span> · Bat: <span className="font-bold text-white">#{batRank}</span>
            </p>
          </div>
          <button 
            onClick={() => onEdit(s)} 
            className="self-start px-4 py-2 border border-white/20 text-white/60 rounded-lg hover:bg-white/5 transition-colors"
          >
            ✏️ Edit Details
          </button>
        </div>
      </Card>

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

      {/* Tab Content */}
      {tab === 'overview' && (
        <div className="space-y-6">
          {/* AI Insights Grid */}
          <div className="grid md:grid-cols-3 gap-4">
            <div className="glass rounded-xl p-4 border-l-4 border-[#00FF88] bg-[#00FF88]/5">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#00FF88] mb-3">✅ Strengths ({ins.strengths.length})</h3>
              {ins.strengths.length === 0 ? (
                <p className="text-white/40 text-sm">No category above 85 yet.</p>
              ) : (
                <div className="space-y-3">
                  {ins.strengths.map((it, i) => (
                    <div key={i} className="flex gap-2">
                      <div className="w-2 h-2 rounded-full bg-[#00FF88] mt-1.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-semibold text-[#00FF88]">{it.label} — {it.score}</p>
                        <p className="text-xs text-white/40 mt-0.5">{it.tip}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="glass rounded-xl p-4 border-l-4 border-[#FFB800] bg-[#FFB800]/5">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#FFB800] mb-3">⚠️ Monitor ({ins.warnings.length})</h3>
              {ins.warnings.length === 0 ? (
                <p className="text-white/40 text-sm">None in 70–84 range.</p>
              ) : (
                <div className="space-y-3">
                  {ins.warnings.map((it, i) => (
                    <div key={i} className="flex gap-2">
                      <div className="w-2 h-2 rounded-full bg-[#FFB800] mt-1.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-semibold text-[#FFB800]">{it.label} — {it.score}</p>
                        <p className="text-xs text-white/40 mt-0.5">{it.tip}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="glass rounded-xl p-4 border-l-4 border-[#00C2FF] bg-[#00C2FF]/5">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#00C2FF] mb-3">🔧 Improve ({ins.improvements.length})</h3>
              {ins.improvements.length === 0 ? (
                <p className="text-[#00FF88] font-semibold text-sm">No categories below 70. Excellent!</p>
              ) : (
                <div className="space-y-3">
                  {ins.improvements.map((it, i) => (
                    <div key={i} className="flex gap-2">
                      <div className="w-2 h-2 rounded-full bg-[#00C2FF] mt-1.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-semibold text-[#00C2FF]">{it.label} — {it.score}</p>
                        <p className="text-xs text-white/40 mt-0.5">{it.tip}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Performance Breakdown */}
            <Card title="Performance Breakdown" subtitle="All categories">
              <div className="space-y-4">
                {[
                  ['Physical Fitness', 'physical'],
                  ['Weapons Handling', 'weapons'],
                  ['Mental Resilience', 'mental'],
                  ['Combat Drills', 'combat'],
                  ['Attendance', 'attendance'],
                  ['Discipline', 'discipline']
                ].map(([label, key]) => (
                  <div key={key}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-white/70 text-sm">{label}</span>
                      <div className="flex items-center gap-2">
                        <Badge type={grade(s.scores[key]).c} text={grade(s.scores[key]).l} />
                        <span className="font-bold" style={{ color: scoreColor(s.scores[key]) }}>{s.scores[key]}/100</span>
                      </div>
                    </div>
                    <ProgressBar value={s.scores[key]} max={100} color={s.scores[key] >= 85 ? 'green' : s.scores[key] >= 70 ? 'orange' : 'red'} />
                  </div>
                ))}
              </div>
            </Card>

            {/* Improvement Plan */}
            {ins.improvements.length > 0 && (
              <Card title="📋 Improvement Plan" subtitle="Auto-generated">
                <div className="space-y-4">
                  {ins.improvements.map((it, i) => (
                    <div key={i} className="bg-[#00C2FF]/10 border border-[#00C2FF]/20 rounded-lg p-3">
                      <p className="font-semibold text-[#00C2FF] text-sm">{it.label} — {it.score}/100</p>
                      <p className="text-white/70 text-sm mt-1">{it.tip}</p>
                      <p className="text-white/40 text-xs mt-2">Target: {Math.min(it.score + 15, 100)} in 8 weeks · Review in: 4 weeks</p>
                    </div>
                  ))}
                </div>
              </Card>
            )}
          </div>
        </div>
      )}

      {tab === 'scores' && (
        <Card title="Complete Score Card">
          <Table
            headers={['Category', 'Score', 'Grade', 'Recommendation']}
            data={[
              ...['physical', 'weapons', 'mental', 'combat', 'attendance', 'discipline'].map(key => {
                const v = s.scores[key];
                const allItems = [...ins.strengths, ...ins.warnings, ...ins.improvements];
                const tip = allItems.find(x => x.label === key)?.tip || '—';
                return [
                  <span className="font-semibold">{key.charAt(0).toUpperCase() + key.slice(1)}</span>,
                  <div className="flex items-center gap-2">
                    <ProgressBar value={v} max={100} color={v >= 85 ? 'green' : v >= 70 ? 'orange' : 'red'} className="w-20" />
                    <span className="font-bold" style={{ color: scoreColor(v) }}>{v}/100</span>
                  </div>,
                  <Badge type={grade(v).c} text={grade(v).l} />,
                  <span className="text-white/50 text-sm max-w-[200px]">{tip}</span>
                ];
              }),
              [
                <span className="font-bold text-lg">OVERALL SCORE</span>,
                <span className="font-bold text-lg" style={{ color: scoreColor(sc) }}>{sc}/100</span>,
                <Badge type={grade(sc).c} text={grade(sc).l} />,
                <span className="text-white/50 text-sm">Global #{globalRank} · Battalion #{batRank}</span>
              ]
            ]}
          />
        </Card>
      )}

      {tab === 'personal' && (
        <div className="grid lg:grid-cols-2 gap-6">
          <Card title="Personal Information">
            {[
              ['Full Name', s.name],
              ['Date of Birth', new Date(s.dob).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })],
              ['Gender', s.gender],
              ['Blood Group', s.blood],
              ['State', s.state],
              ['City', s.city],
              ['Phone', s.phone],
              ['Email', s.email]
            ].map(([label, value], i) => (
              <div key={i} className="flex py-2 border-b border-white/5">
                <span className="w-32 text-white/50 text-sm uppercase">{label}</span>
                <span className="text-white font-medium">{value}</span>
              </div>
            ))}
          </Card>
          <div className="space-y-6">
            <Card title="Service Details">
              {[
                ['Soldier ID', s.soldierId],
                ['Rank', s.rank],
                ['Battalion', bat.name],
                ['Date of Joining', new Date(s.joining).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })],
                ['Service Status', s.status],
                ['Medical Fitness', s.medical]
              ].map(([label, value], i) => (
                <div key={i} className="flex py-2 border-b border-white/5">
                  <span className="w-32 text-white/50 text-sm uppercase">{label}</span>
                  <span className="text-white font-medium">{value}</span>
                </div>
              ))}
            </Card>
            <Card title="Emergency Contact">
              {[
                ['Name', s.emergency.name],
                ['Phone', s.emergency.phone],
                ['Relation', s.emergency.relation]
              ].map(([label, value], i) => (
                <div key={i} className="flex py-2 border-b border-white/5">
                  <span className="w-32 text-white/50 text-sm uppercase">{label}</span>
                  <span className="text-white font-medium">{value}</span>
                </div>
              ))}
            </Card>
          </div>
        </div>
      )}

      {tab === 'equipment' && (
        <Card title="Equipment & Arms Issued" subtitle={`${s.equipment.length} Items`}>
          <Table
            headers={['#', 'Item Name', 'Type', 'Issued On', 'Condition']}
            data={s.equipment.map((eq, i) => {
              const type = eq.includes('Rifle') || eq.includes('Goggles') ? 'Weapon' : 
                          eq.includes('Uniform') || eq.includes('Boots') || eq.includes('Helmet') ? 'Uniform' : 'Gear';
              return [
                i + 1,
                <span className="font-medium">{eq}</span>,
                <Badge type="blue" text={type} />,
                <span className="text-white/50">15 Jan 2024</span>,
                <Badge type={i === 3 ? 'orange' : 'green'} text={i === 3 ? 'Worn' : 'Good'} />
              ];
            })}
          />
        </Card>
      )}

      {tab === 'events' && (
        <Card title="Events & Achievements">
          {s.events.length === 0 ? (
            <p className="text-white/50 text-center py-8">No events recorded yet.</p>
          ) : (
            <div className="space-y-3">
              {s.events.map((ev, i) => (
                <div key={i} className="flex gap-3 py-3 border-b border-white/5">
                  <span className="text-xl">🏅</span>
                  <span className="font-medium">{ev}</span>
                </div>
              ))}
            </div>
          )}
        </Card>
      )}
    </div>
  );
};

export default SoldierDetail;
