import React from 'react';
import { Card, Badge } from '../../components/ui/Card';

export const DoctorDashboard = () => {
  const stats = [
    { label: 'Soldiers Under Care', value: '248' },
    { label: 'Records This Month', value: '37' },
    { label: 'Follow-ups Pending', value: '8' },
    { label: 'Fit for Duty', value: '96%' }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Medical Officer Dashboard</h1>
        <p className="text-white/50">Manage soldier health records</p>
      </div>

      {/* Stats */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <div key={i} className="glass rounded-xl p-4">
            <p className="text-xs font-bold uppercase tracking-wider text-white/50 mb-1">{stat.label}</p>
            <p className="text-2xl font-bold text-white">{stat.value}</p>
          </div>
        ))}
      </div>

      <Card title="Add Medical Record">
        <div className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-white/70 mb-2">Soldier ID</label>
              <input
                type="text"
                placeholder="AGN-2024-XXXX"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-white/30 focus:outline-none focus:border-[#00C2FF]"
              />
            </div>
            <div>
              <label className="block text-sm text-white/70 mb-2">Record Type</label>
              <select className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#00C2FF]">
                <option>Regular Checkup</option>
                <option>Treatment</option>
                <option>Emergency</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-white/70 mb-2">Visit Date</label>
              <input
                type="date"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#00C2FF]"
              />
            </div>
            <div>
              <label className="block text-sm text-white/70 mb-2">Follow-up Date</label>
              <input
                type="date"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#00C2FF]"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm text-white/70 mb-2">Diagnosis / Remarks</label>
            <textarea
              rows={3}
              placeholder="Enter diagnosis..."
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-white/30 focus:outline-none focus:border-[#00C2FF] resize-none"
            />
          </div>

          <button className="px-6 py-2 bg-[#00C2FF] text-black font-semibold rounded-lg hover:bg-[#00C2FF]/80 transition-colors">
            Save Medical Record
          </button>
        </div>
      </Card>
    </div>
  );
};

export default DoctorDashboard;
