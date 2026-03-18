import React from 'react';
import { Card, Badge } from '../../components/ui/Card';
import { Table } from '../../components/ui/Table';

export const AdminSOS = ({ sosAlerts, onTrigger, onResolve }) => {
  const active = sosAlerts.filter(s => s.status === 'active');
  const resolved = sosAlerts.filter(s => s.status === 'resolved');

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-2xl font-bold text-white">SOS Alert Management</h1>
          <p className="text-white/50">Emergency broadcast and response system</p>
        </div>
        <button 
          onClick={onTrigger}
          className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition-colors flex items-center gap-2"
        >
          🚨 Trigger New Alert
        </button>
      </div>

      {active.length === 0 && (
        <div className="glass rounded-xl p-4 border border-green-500/30 bg-green-500/10">
          <p className="text-green-400">✅ No active SOS alerts at this time. All clear.</p>
        </div>
      )}

      {active.map(s => (
        <div key={s.id} className="glass rounded-xl p-4 border-l-4 border-red-500 bg-red-500/10 flex items-center gap-4">
          <span className="text-2xl">🚨</span>
          <div className="flex-1">
            <div className="text-red-400 font-semibold">{s.id} — {s.type} Alert · {s.battalionName}</div>
            <div className="text-sm text-white/60 mt-1">{s.message}</div>
            <div className="text-xs text-white/40 mt-1">Triggered: {s.triggeredAt} · By: {s.triggeredBy}</div>
          </div>
          <button 
            onClick={() => onResolve(s.id)}
            className="px-4 py-2 bg-[#00C2FF]/20 text-[#00C2FF] rounded-lg hover:bg-[#00C2FF]/30 transition-colors text-sm font-medium"
          >
            Mark Resolved
          </button>
        </div>
      ))}

      <Card title="Alert History" subtitle={`${sosAlerts.length} total alerts`}>
        <Table
          headers={['Alert ID', 'Type', 'Target', 'Message', 'Triggered', 'By', 'Status', 'Resolved At']}
          data={sosAlerts.map(a => [
            <span className="font-mono font-semibold">{a.id}</span>,
            <Badge type="gray" text={a.type} />,
            a.battalionName,
            <span className="text-white/50 text-sm max-w-[200px] truncate block">{a.message.substring(0, 60)}{a.message.length > 60 ? '...' : ''}</span>,
            <span className="text-white/50 text-sm">{a.triggeredAt}</span>,
            a.triggeredBy,
            <Badge type={a.status === 'active' ? 'red' : 'green'} text={a.status === 'active' ? 'Active' : 'Resolved'} />,
            <span className="text-white/50 text-sm">{a.resolvedAt || '—'}</span>
          ])}
        />
      </Card>
    </div>
  );
};

export default AdminSOS;
