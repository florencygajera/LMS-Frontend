import React, { useState } from 'react';
import { Card, Badge } from '../../components/ui/Card';
import { Table, TableSelect } from '../../components/ui/Table';

export const AdminApplications = ({ applications, onReview }) => {
  const [filter, setFilter] = useState('all');
  
  const filtered = filter === 'all' ? applications : applications.filter(a => a.status === filter);
  
  const statBadge = {
    'Under Review': 'blue',
    'Verified': 'green',
    'Pending Docs': 'orange',
    'Rejected': 'red',
    'Selected': 'green'
  };
  
  const counts = (status) => applications.filter(a => a.status === status).length;

  const filters = [
    { value: 'all', label: `All (${applications.length})` },
    { value: 'Under Review', label: `Under Review (${counts('Under Review')})` },
    { value: 'Verified', label: `Verified (${counts('Verified')})` },
    { value: 'Pending Docs', label: `Pending Docs (${counts('Pending Docs')})` },
    { value: 'Selected', label: `Selected (${counts('Selected')})` },
    { value: 'Rejected', label: `Rejected (${counts('Rejected')})` }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Recruitment Applications</h1>
        <p className="text-white/50">Agnipath Batch 2025 · Review, verify, and update applications</p>
      </div>

      <div className="flex flex-wrap gap-2">
        {filters.map(f => (
          <button
            key={f.value}
            onClick={() => setFilter(f.value)}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
              filter === f.value
                ? 'bg-[#00C2FF] text-black'
                : 'glass text-white/60 hover:text-white hover:bg-white/10'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <Card>
        <Table
          headers={['App. ID', 'Name', 'State', 'Education', 'Height', 'Weight', 'Trade', 'Applied On', 'Verified By', 'Status', 'Notes', 'Action']}
          data={filtered.map(a => [
            <span className="font-mono text-xs">{a.id}</span>,
            <span className="font-semibold">{a.name}</span>,
            a.state,
            a.education,
            `${a.height} cm`,
            `${a.weight} kg`,
            a.trade,
            <span className="text-white/50">{a.date}</span>,
            <span className="text-white/50 text-sm">{a.verifiedBy || '—'}</span>,
            <Badge type={statBadge[a.status]} text={a.status} />,
            <span className="text-white/50 text-sm max-w-[140px] truncate block">{a.notes || '—'}</span>,
            <button 
              onClick={() => onReview(a)}
              className="px-3 py-1 bg-[#00C2FF] text-black text-xs font-medium rounded-lg hover:bg-[#00C2FF]/80"
            >
              Review / Edit
            </button>
          ])}
        />
      </Card>
    </div>
  );
};

export default AdminApplications;
