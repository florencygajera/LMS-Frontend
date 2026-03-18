import React, { useState } from 'react';
import { Card, Badge, ProgressBar, ScoreBadge } from '../../components/ui/Card';
import { Table, SearchBar, TableSelect } from '../../components/ui/Table';
import { overall, scoreColor, grade } from '../../context/AppDataContext';

export const AdminAllSoldiers = ({ soldiers, battalions, setPage, onEdit }) => {
  const [search, setSearch] = useState('');
  const [batF, setBatF] = useState('all');
  const [gradeF, setGradeF] = useState('all');
  const [genderF, setGenderF] = useState('all');

  const filtered = soldiers.filter(s => {
    const bat = battalions.find(b => b.id === s.battalionId);
    const sc = overall(s.scores);
    
    const matchesSearch = s.name.toLowerCase().includes(search.toLowerCase()) || 
      s.soldierId.toLowerCase().includes(search.toLowerCase()) ||
      bat?.name.toLowerCase().includes(search.toLowerCase());
    
    const matchesBat = batF === 'all' || s.battalionId === parseInt(batF);
    const matchesGrade = gradeF === 'all' ||
      (gradeF === 'out' && sc >= 90) ||
      (gradeF === 'good' && sc >= 80 && sc < 90) ||
      (gradeF === 'avg' && sc >= 70 && sc < 80) ||
      (gradeF === 'poor' && sc < 70);
    const matchesGender = genderF === 'all' || s.gender === genderF;
    
    return matchesSearch && matchesBat && matchesGrade && matchesGender;
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">All Soldiers</h1>
        <p className="text-white/50">{soldiers.length} Agniveers · {battalions.length} Battalions · Click any row for full profile</p>
      </div>

      <div className="flex flex-wrap gap-3">
        <SearchBar 
          placeholder="Search name, ID, or battalion..." 
          value={search} 
          onChange={setSearch} 
        />
        <TableSelect 
          value={batF} 
          onChange={(e) => setBatF(e.target.value)}
          options={[
            { value: 'all', label: 'All Battalions' },
            ...battalions.map(b => ({ value: b.id, label: b.name }))
          ]}
        />
        <TableSelect 
          value={gradeF} 
          onChange={(e) => setGradeF(e.target.value)}
          options={[
            { value: 'all', label: 'All Grades' },
            { value: 'out', label: 'Outstanding (90+)' },
            { value: 'good', label: 'Good (80–89)' },
            { value: 'avg', label: 'Average (70–79)' },
            { value: 'poor', label: 'Needs Improvement (<70)' }
          ]}
        />
        <TableSelect 
          value={genderF} 
          onChange={(e) => setGenderF(e.target.value)}
          options={[
            { value: 'all', label: 'All' },
            { value: 'Male', label: 'Male' },
            { value: 'Female', label: 'Female' }
          ]}
        />
        <span className="text-white/50 text-sm self-center">{filtered.length} found</span>
      </div>

      <Card>
        <Table
          headers={['Soldier ID', 'Name', 'Rank', 'Gender', 'Battalion', 'State', 'Physical', 'Weapons', 'Mental', 'Combat', 'Overall', 'Grade', 'Status', 'Actions']}
          data={filtered.map(s => {
            const sc = overall(s.scores);
            const bat = battalions.find(b => b.id === s.battalionId);
            return [
              <span className="font-mono text-xs">{s.soldierId}</span>,
              <span 
                onClick={() => setPage(`sol_${s.id}`)} 
                className="font-semibold cursor-pointer hover:text-[#00C2FF]"
              >
                {s.name}
              </span>,
              s.rank,
              <span className="text-white/60">{s.gender}</span>,
              <Badge type="gray" text={bat?.code || '-'} />,
              <span className="text-white/60">{s.state}</span>,
              <span className="font-semibold" style={{ color: scoreColor(s.scores.physical) }}>{s.scores.physical}</span>,
              <span className="font-semibold" style={{ color: scoreColor(s.scores.weapons) }}>{s.scores.weapons}</span>,
              <span className="font-semibold" style={{ color: scoreColor(s.scores.mental) }}>{s.scores.mental}</span>,
              <span className="font-semibold" style={{ color: scoreColor(s.scores.combat) }}>{s.scores.combat}</span>,
              <span className="font-bold text-lg" style={{ color: scoreColor(sc) }}>{sc}</span>,
              <Badge type={grade(sc).c} text={grade(sc).l} />,
              <Badge type={s.status === 'active' ? 'green' : s.status === 'on_leave' ? 'orange' : 'gray'} text={s.status === 'active' ? 'Active' : 'On Leave'} />,
              <div className="flex gap-2">
                <button onClick={() => setPage(`sol_${s.id}`)} className="text-xs text-[#00C2FF] hover:underline">View</button>
                <button onClick={(e) => { e.stopPropagation(); onEdit(s); }} className="text-xs text-white/60 hover:text-white">Edit</button>
              </div>
            ];
          })}
        />
      </Card>
    </div>
  );
};

export default AdminAllSoldiers;
