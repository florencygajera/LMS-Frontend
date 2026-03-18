import React from 'react';
import { Card, Badge } from '../../components/ui/Card';

export const SoldierMedical = ({ soldier }) => {
  const stats = [
    { label: 'Blood Group', value: soldier.blood },
    { label: 'BMI', value: '23.4' },
    { label: 'Last Checkup', value: '01 Mar 2025' },
    { label: 'Status', value: 'Fit for Duty' }
  ];

  const medicalHistory = [
    { date: '01 Mar 2025', type: 'Regular Checkup', doctor: 'Dr. Sunita Rao', diagnosis: 'Fit for Duty', status: 'Normal' },
    { date: '15 Jan 2025', type: 'Treatment', doctor: 'Dr. Rajan Mehta', diagnosis: 'Minor sprain – right ankle', status: 'Recovered' }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Medical Records</h1>
        <p className="text-white/50">Confidential — Health History</p>
      </div>

      {/* Stats Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <div key={i} className="glass rounded-xl p-4">
            <p className="text-xs font-bold uppercase tracking-wider text-white/50 mb-1">{stat.label}</p>
            <p className="text-xl font-bold text-white">{stat.value}</p>
          </div>
        ))}
      </div>

      <Card title="Medical History">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/10">
              <th className="text-left py-3 px-4 text-xs font-bold uppercase tracking-wider text-white/50">Date</th>
              <th className="text-left py-3 px-4 text-xs font-bold uppercase tracking-wider text-white/50">Type</th>
              <th className="text-left py-3 px-4 text-xs font-bold uppercase tracking-wider text-white/50">Doctor</th>
              <th className="text-left py-3 px-4 text-xs font-bold uppercase tracking-wider text-white/50">Diagnosis</th>
              <th className="text-left py-3 px-4 text-xs font-bold uppercase tracking-wider text-white/50">Status</th>
            </tr>
          </thead>
          <tbody>
            {medicalHistory.map((record, i) => (
              <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                <td className="py-3 px-4 font-mono text-sm">{record.date}</td>
                <td className="py-3 px-4">
                  <Badge type="blue" text={record.type} />
                </td>
                <td className="py-3 px-4 text-sm">{record.doctor}</td>
                <td className="py-3 px-4 text-sm">{record.diagnosis}</td>
                <td className="py-3 px-4">
                  <Badge type={record.status === 'Normal' ? 'green' : 'blue'} text={record.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
};

export default SoldierMedical;
