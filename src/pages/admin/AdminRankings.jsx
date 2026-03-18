import React from 'react';
import { Card, Badge } from '../../components/ui/Card';
import { Table } from '../../components/ui/Table';
import { overall, scoreColor, grade } from '../../context/AppDataContext';

export const AdminRankings = ({ soldiers, battalions }) => {
  const ranked = [...soldiers].sort((a, b) => overall(b.scores) - overall(a.scores));

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Performance Rankings</h1>
        <p className="text-white/50">All-India Agniveer Rankings — March 2025</p>
      </div>

      <Card title="All-India Leaderboard" subtitle={`${ranked.length} soldiers ranked`}>
        <Table
          headers={['Rank', 'Name', 'Battalion', 'Physical', 'Weapons', 'Mental', 'Combat', 'Attend.', 'Discip.', 'Overall']}
          data={ranked.map((s, i) => {
            const sc = overall(s.scores);
            const bat = battalions.find(b => b.id === s.battalionId);
            return [
              <span className="font-bold text-lg">{i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : `#${i + 1}`}</span>,
              <span className="font-semibold">{s.name}</span>,
              <Badge type="gray" text={bat?.code || '-'} />,
              <span className="font-semibold" style={{ color: scoreColor(s.scores.physical) }}>{s.scores.physical}</span>,
              <span className="font-semibold" style={{ color: scoreColor(s.scores.weapons) }}>{s.scores.weapons}</span>,
              <span className="font-semibold" style={{ color: scoreColor(s.scores.mental) }}>{s.scores.mental}</span>,
              <span className="font-semibold" style={{ color: scoreColor(s.scores.combat) }}>{s.scores.combat}</span>,
              <span className="font-semibold" style={{ color: scoreColor(s.scores.attendance) }}>{s.scores.attendance}</span>,
              <span className="font-semibold" style={{ color: scoreColor(s.scores.discipline) }}>{s.scores.discipline}</span>,
              <span className="font-bold text-xl" style={{ color: scoreColor(sc) }}>{sc}</span>
            ];
          })}
        />
      </Card>
    </div>
  );
};

export default AdminRankings;
