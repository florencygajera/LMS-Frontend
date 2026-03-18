import React, { useState } from 'react';
import { Card, Badge } from '../../components/ui/Card';
import { Table } from '../../components/ui/Table';

const AUDIT_DATA = [
  { time: '14 Mar 2025 14:32', action: 'sos_alert_triggered', user: 'Maj. Ankit Verma', resource: 'SOS-0037', ip: '192.168.1.10', status: 'success' },
  { time: '14 Mar 2025 13:18', action: 'application_status_updated', user: 'Maj. Ankit Verma', resource: 'APP-2025-002', ip: '192.168.1.10', status: 'success' },
  { time: '14 Mar 2025 11:45', action: 'soldier_profile_updated', user: 'Maj. Ankit Verma', resource: 'AGN-2024-0103', ip: '192.168.1.10', status: 'success' },
  { time: '14 Mar 2025 10:02', action: 'battalion_details_updated', user: 'Maj. Ankit Verma', resource: 'RR-1', ip: '192.168.1.10', status: 'success' },
  { time: '14 Mar 2025 09:30', action: 'training_record_uploaded', user: 'Cpt. Pradeep Kumar', resource: 'RR-1 Batch', ip: '192.168.1.11', status: 'success' },
  { time: '13 Mar 2025 18:15', action: 'medical_record_added', user: 'Dr. Sunita Rao', resource: 'AGN-2024-0104', ip: '192.168.1.12', status: 'success' },
  { time: '13 Mar 2025 16:40', action: 'login', user: 'Cpt. Pradeep Kumar', resource: '—', ip: '192.168.1.11', status: 'success' },
  { time: '13 Mar 2025 15:55', action: 'failed_login_attempt', user: 'Unknown', resource: '—', ip: '203.84.17.42', status: 'failed' },
  { time: '13 Mar 2025 14:20', action: 'sos_alert_resolved', user: 'Maj. Ankit Verma', resource: 'SOS-0036', ip: '192.168.1.10', status: 'success' },
  { time: '13 Mar 2025 11:00', action: 'report_generated', user: 'Maj. Ankit Verma', resource: 'Battalion RR-1', ip: '192.168.1.10', status: 'success' },
  { time: '12 Mar 2025 17:30', action: 'application_verified', user: 'Maj. Ankit Verma', resource: 'APP-2025-005', ip: '192.168.1.10', status: 'success' },
  { time: '12 Mar 2025 10:15', action: 'login', user: 'Dr. Sunita Rao', resource: '—', ip: '192.168.1.12', status: 'success' },
];

export const AuditLog = () => {
  const [filter, setFilter] = useState('all');
  
  const filtered = filter === 'all' 
    ? AUDIT_DATA 
    : filter === 'failed' 
      ? AUDIT_DATA.filter(a => a.status === 'failed')
      : AUDIT_DATA.filter(a => a.status === 'success');

  const filters = [
    { id: 'all', label: `All (${AUDIT_DATA.length})` },
    { id: 'success', label: 'Success' },
    { id: 'failed', label: 'Failed' }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-2xl font-bold text-white">🔐 Security Audit Log</h1>
          <p className="text-white/50">All system actions · Powered by common.core.audit · RBAC enforced</p>
        </div>
        <div className="flex gap-2">
          {filters.map(f => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                filter === f.id
                  ? 'bg-[#00C2FF] text-black'
                  : 'glass text-white/70 hover:text-white'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      <Card>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-3 px-4 text-xs font-bold uppercase tracking-wider text-white/50">Timestamp</th>
                <th className="text-left py-3 px-4 text-xs font-bold uppercase tracking-wider text-white/50">Action</th>
                <th className="text-left py-3 px-4 text-xs font-bold uppercase tracking-wider text-white/50">User</th>
                <th className="text-left py-3 px-4 text-xs font-bold uppercase tracking-wider text-white/50">Resource</th>
                <th className="text-left py-3 px-4 text-xs font-bold uppercase tracking-wider text-white/50">IP Address</th>
                <th className="text-left py-3 px-4 text-xs font-bold uppercase tracking-wider text-white/50">Status</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((audit, i) => (
                <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="py-3 px-4 font-mono text-xs text-white/50">{audit.time}</td>
                  <td className="py-3 px-4">
                    <span className={`font-mono text-sm font-semibold ${
                      audit.action.includes('failed') || audit.action.includes('sos') 
                        ? 'text-red-400' 
                        : 'text-[#00C2FF]'
                    }`}>
                      {audit.action}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-sm">{audit.user}</td>
                  <td className="py-3 px-4 font-mono text-sm text-white/50">{audit.resource}</td>
                  <td className="py-3 px-4 font-mono text-sm text-white/50">{audit.ip}</td>
                  <td className="py-3 px-4">
                    <Badge type={audit.status === 'success' ? 'green' : 'red'} text={audit.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default AuditLog;
