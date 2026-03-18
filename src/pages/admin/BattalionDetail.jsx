import React, { useState } from 'react';
import { Card, Badge, ProgressBar, ScoreBadge } from '../../components/ui/Card';
import { Table, SearchBar, TableSelect } from '../../components/ui/Table';
import { overall, scoreColor, grade } from '../../context/AppDataContext';

export const BattalionDetail = ({ batId, soldiers, battalions, setPage, onEdit, onEditSoldier }) => {
  const bat = battalions.find(b => b.id === batId);
  const bsoldiers = soldiers.filter(s => s.battalionId === batId);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');

  if (!bat) {
    return (
      <div className="glass rounded-xl p-6 border border-red-500/30">
        <p className="text-red-400">Battalion not found.</p>
      </div>
    );
  }

  const avg = (arr, fn) => arr.length ? Math.round(arr.reduce((a, b) => a + fn(b), 0) / arr.length * 10) / 10 : 0;
  const sc = avg(bsoldiers, s => overall(s.scores));

  const filtered = bsoldiers.filter(s => {
    const matchesSearch = s.name.toLowerCase().includes(search.toLowerCase()) || 
      s.soldierId.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === 'all' ||
      (filter === 'active' && s.status === 'active') ||
      (filter === 'leave' && s.status === 'on_leave') ||
      (filter === 'good' && overall(s.scores) >= 85) ||
      (filter === 'poor' && overall(s.scores) < 75);
    return matchesSearch && matchesFilter;
  });

  const avgs = {};
  ['physical', 'weapons', 'mental', 'combat', 'attendance', 'discipline'].forEach(c => {
    avgs[c] = bsoldiers.length ? avg(bsoldiers, s => s.scores[c]) : 0;
  });

  const scoreDist = [
    { label: 'Outstanding (90+)', value: bsoldiers.filter(s => overall(s.scores) >= 90).length, color: '#00FF88' },
    { label: 'Good (80–89)', value: bsoldiers.filter(s => overall(s.scores) >= 80 && overall(s.scores) < 90).length, color: '#00C2FF' },
    { label: 'Average (70–79)', value: bsoldiers.filter(s => overall(s.scores) >= 70 && overall(s.scores) < 80).length, color: '#FFB800' },
    { label: 'Needs Improvement (<70)', value: bsoldiers.filter(s => overall(s.scores) < 70).length, color: '#FF4757' }
  ];

  return (
    <div className="space-y-6">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm">
        <button onClick={() => setPage('admin')} className="text-[#00C2FF] hover:underline">Dashboard</button>
        <span className="text-white/30">›</span>
        <button onClick={() => setPage('admin-battalions')} className="text-[#00C2FF] hover:underline">Battalions</button>
        <span className="text-white/30">›</span>
        <span className="text-white/60">{bat.name}</span>
      </div>

      {/* Battalion Header */}
      <Card className="border-l-4" style={{ borderLeftColor: bat.color || '#00C2FF' }}>
        <div className="flex justify-between items-start flex-wrap gap-4">
          <div>
            <h1 className="text-2xl font-bold text-white">{bat.name}</h1>
            <p className="text-white/50 mt-1">
              Code: <span className="font-mono text-[#00C2FF]">{bat.code}</span> · 📍 {bat.location} · Est. {bat.established}
            </p>
            <p className="text-white/60 mt-1">
              Cmd: <span className="font-semibold text-white">{bat.commander}</span> · {bat.phone} · Mission: {bat.mission}
            </p>
          </div>
          <div className="text-center px-6 border-l border-white/10">
            <div className="text-4xl font-bold" style={{ color: scoreColor(sc) }}>{sc}</div>
            <p className="text-xs text-white/40 uppercase tracking-wider mt-1">Score</p>
            <ScoreBadge score={sc} />
          </div>
        </div>
      </Card>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {[
          { label: 'Total Soldiers', value: bsoldiers.length },
          { label: 'Active', value: bsoldiers.filter(s => s.status === 'active').length, color: 'text-green-400' },
          { label: 'On Leave', value: bsoldiers.filter(s => s.status === 'on_leave').length, color: 'text-orange-400' },
          { label: 'Score ≥ 85', value: bsoldiers.filter(s => overall(s.scores) >= 85).length, color: 'text-[#00FF88]' },
          { label: 'Needs Attention', value: bsoldiers.filter(s => overall(s.scores) < 75).length, color: 'text-red-400' }
        ].map((stat, i) => (
          <StatCard key={i} label={stat.label} value={stat.value} icon="" color={stat.color || 'blue'} />
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Category Averages */}
        <Card title="Category Averages" subtitle="All soldiers in battalion">
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
                    <Badge type={grade(avgs[key]).c} text={grade(avgs[key]).l} />
                    <span className="font-bold" style={{ color: scoreColor(avgs[key]) }}>{avgs[key]}</span>
                  </div>
                </div>
                <ProgressBar value={avgs[key]} max={100} color={avgs[key] >= 85 ? 'green' : avgs[key] >= 70 ? 'orange' : 'red'} />
              </div>
            ))}
          </div>
        </Card>

        {/* Score Distribution */}
        <Card title="Score Distribution">
          <div className="space-y-4">
            {scoreDist.map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                <div className="flex-1 text-sm text-white/70">{item.label}</div>
                <div className="text-xl font-bold" style={{ color: item.color }}>{item.value}</div>
                <div className="w-20">
                  <ProgressBar 
                    value={bsoldiers.length ? (item.value / bsoldiers.length) * 100 : 0} 
                    max={100} 
                    color="custom" 
                    customColor={item.color} 
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* All Soldiers Table */}
      <Card title={`All Soldiers — ${bat.name}`} subtitle="Click any row to view full profile">
        <div className="flex flex-wrap gap-3 mb-4">
          <SearchBar 
            placeholder="Search by name or ID..." 
            value={search} 
            onChange={setSearch} 
          />
          <TableSelect 
            value={filter} 
            onChange={(e) => setFilter(e.target.value)}
            options={[
              { value: 'all', label: 'All' },
              { value: 'active', label: 'Active' },
              { value: 'leave', label: 'On Leave' },
              { value: 'good', label: 'Score ≥ 85' },
              { value: 'poor', label: 'Needs Attention' }
            ]}
          />
          <span className="text-white/50 text-sm self-center">{filtered.length} results</span>
        </div>

        <Table
          headers={['Soldier ID', 'Name', 'Rank', 'Physical', 'Weapons', 'Mental', 'Combat', 'Overall', 'Grade', 'Status', 'Actions']}
          data={filtered.map(s => {
            const sc = overall(s.scores);
            return [
              <span className="font-mono text-xs">{s.soldierId}</span>,
              <span 
                onClick={() => setPage(`sol_${s.id}`)} 
                className="font-semibold cursor-pointer hover:text-[#00C2FF]"
              >
                {s.name}
              </span>,
              s.rank,
              <span className="font-semibold" style={{ color: scoreColor(s.scores.physical) }}>{s.scores.physical}</span>,
              <span className="font-semibold" style={{ color: scoreColor(s.scores.weapons) }}>{s.scores.weapons}</span>,
              <span className="font-semibold" style={{ color: scoreColor(s.scores.mental) }}>{s.scores.mental}</span>,
              <span className="font-semibold" style={{ color: scoreColor(s.scores.combat) }}>{s.scores.combat}</span>,
              <span className="font-bold text-lg" style={{ color: scoreColor(sc) }}>{sc}</span>,
              <Badge type={grade(sc).c} text={grade(sc).l} />,
              <Badge type={s.status === 'active' ? 'green' : s.status === 'on_leave' ? 'orange' : 'gray'} text={s.status === 'active' ? 'Active' : s.status === 'on_leave' ? 'On Leave' : 'Inactive'} />,
              <div className="flex gap-2">
                <button onClick={() => setPage(`sol_${s.id}`)} className="text-xs text-[#00C2FF] hover:underline">View</button>
                <button onClick={(e) => { e.stopPropagation(); onEditSoldier(s); }} className="text-xs text-white/60 hover:text-white">Edit</button>
              </div>
            ];
          })}
        />
      </Card>
    </div>
  );
};

export default BattalionDetail;
