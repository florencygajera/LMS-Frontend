import React, { useState } from 'react';
import { Card, StatCard, Badge, ProgressBar, ScoreBadge } from '../../components/ui/Card';
import { Table } from '../../components/ui/Table';
import { overall, scoreColor, grade } from '../../context/AppDataContext';

export const AdminBattalions = ({ battalions, soldiers, setPage, onEdit }) => {
  const avg = (arr, fn) => arr.length ? Math.round(arr.reduce((a, b) => a + fn(b), 0) / arr.length * 10) / 10 : 0;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-2xl font-bold text-white">All Battalions</h1>
          <p className="text-white/50">Click any battalion to drill down into its soldiers</p>
        </div>
        <button className="px-4 py-2 bg-[#00C2FF] text-black font-semibold rounded-lg hover:bg-[#00C2FF]/80 transition-colors">
          + Create Battalion
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {battalions.map(b => {
          const bsoldiers = soldiers.filter(s => s.battalionId === b.id);
          const sc = avg(bsoldiers, s => overall(s.scores));
          const avgs = {};
          ['physical', 'weapons', 'mental', 'combat', 'attendance', 'discipline'].forEach(c => {
            avgs[c] = bsoldiers.length ? avg(bsoldiers, s => s.scores[c]) : 0;
          });

          return (
            <Card key={b.id} className="cursor-pointer hover:scale-[1.01] transition-transform" style={{ borderLeftColor: b.color || '#00C2FF' }}>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-bold text-lg text-white">{b.name}</h3>
                  <p className="text-xs text-white/40">{b.code} · 📍 {b.location}</p>
                  <p className="text-sm text-white/60 mt-1">Cmd: {b.commander}</p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold" style={{ color: scoreColor(sc) }}>{sc}</div>
                  <ScoreBadge score={sc} />
                </div>
              </div>

              <div className="grid grid-cols-4 gap-4 mb-4">
                {[
                  { label: 'Total', value: bsoldiers.length },
                  { label: 'Active', value: bsoldiers.filter(s => s.status === 'active').length },
                  { label: 'On Leave', value: bsoldiers.filter(s => s.status === 'on_leave').length },
                  { label: 'Score ≥85', value: bsoldiers.filter(s => overall(s.scores) >= 85).length }
                ].map((item, i) => (
                  <div key={i} className="text-center">
                    <div className="text-xl font-bold text-white">{item.value}</div>
                    <div className="text-xs text-white/40 uppercase">{item.label}</div>
                  </div>
                ))}
              </div>

              <div className="space-y-2 border-t border-white/10 pt-4">
                {[['Physical', avgs.physical], ['Weapons', avgs.weapons], ['Mental', avgs.mental]].map(([label, value]) => (
                  <div key={label}>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-white/60">{label}</span>
                      <span className="font-semibold" style={{ color: scoreColor(value) }}>{value}</span>
                    </div>
                    <ProgressBar value={value} max={100} color={value >= 85 ? 'green' : value >= 70 ? 'orange' : 'red'} />
                  </div>
                ))}
              </div>

              <div className="flex gap-2 mt-4">
                <button 
                  onClick={() => setPage(`bat_${b.id}`)} 
                  className="flex-1 px-4 py-2 bg-[#00C2FF]/20 text-[#00C2FF] rounded-lg hover:bg-[#00C2FF]/30 transition-colors text-sm font-medium"
                >
                  View Soldiers
                </button>
                <button 
                  onClick={(e) => { e.stopPropagation(); onEdit(b); }} 
                  className="px-4 py-2 border border-white/20 text-white/60 rounded-lg hover:bg-white/5 transition-colors text-sm"
                >
                  Edit
                </button>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default AdminBattalions;
