import React from 'react';
import { Card, Badge } from '../../components/ui/Card';
import { Table } from '../../components/ui/Table';
import { overall, scoreColor, grade } from '../../context/AppDataContext';

export const SoldierTraining = ({ soldier }) => {
  const sc = overall(soldier.scores);

  const trainingHistory = [
    { date: '14 Mar', type: 'Physical', details: 'Run: 12:34, Pushups: 52, Pullups: 14', score: 91 },
    { date: '12 Mar', type: 'Weapons', details: 'Shooting: 88%, Handling: 86', score: 85 },
    { date: '10 Mar', type: 'Mental', details: 'Strategy: 79, Decision: 82', score: 79 },
    { date: '07 Mar', type: 'Physical', details: 'Run: 12:15, Pushups: 55, Pullups: 15', score: 93 },
    { date: '05 Mar', type: 'Combat', details: 'Drill: 90, Obstacle: 88', score: 89 }
  ];

  const stats = [
    { label: 'Running Best', value: '12:15 min' },
    { label: 'Max Pushups', value: '55' },
    { label: 'Shooting Acc.', value: '88%' },
    { label: 'Overall', value: sc }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Training Records</h1>
        <p className="text-white/50">Your performance history</p>
      </div>

      {/* Stats Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <div key={i} className="glass rounded-xl p-4">
            <p className="text-xs font-bold uppercase tracking-wider text-white/50 mb-1">{stat.label}</p>
            <p className="text-2xl font-bold text-white">{stat.value}</p>
          </div>
        ))}
      </div>

      <Card title="Training History">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/10">
              <th className="text-left py-3 px-4 text-xs font-bold uppercase tracking-wider text-white/50">Date</th>
              <th className="text-left py-3 px-4 text-xs font-bold uppercase tracking-wider text-white/50">Type</th>
              <th className="text-left py-3 px-4 text-xs font-bold uppercase tracking-wider text-white/50">Details</th>
              <th className="text-left py-3 px-4 text-xs font-bold uppercase tracking-wider text-white/50">Score</th>
              <th className="text-left py-3 px-4 text-xs font-bold uppercase tracking-wider text-white/50">Grade</th>
            </tr>
          </thead>
          <tbody>
            {trainingHistory.map((record, i) => (
              <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                <td className="py-3 px-4 font-mono text-sm">{record.date}</td>
                <td className="py-3 px-4">
                  <Badge type="blue" text={record.type} />
                </td>
                <td className="py-3 px-4 text-sm text-white/50">{record.details}</td>
                <td className="py-3 px-4 font-bold" style={{ color: scoreColor(record.score) }}>
                  {record.score}/100
                </td>
                <td className="py-3 px-4">
                  <Badge type={grade(record.score).c} text={grade(record.score).l} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
};

export default SoldierTraining;
