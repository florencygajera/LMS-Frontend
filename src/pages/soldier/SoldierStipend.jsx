import React from 'react';
import { Card, Badge } from '../../components/ui/Card';

export const SoldierStipend = ({ soldier }) => {
  const stats = [
    { label: 'March Net Pay', value: '₹33,400' },
    { label: 'Annual CTC', value: '₹3.96 L' },
    { label: 'Seva Nidhi', value: '₹1.02 L' },
    { label: 'Status', value: 'Paid' }
  ];

  const payHistory = [
    { month: 'March 2025', base: 30000, allowances: 5400, deductions: 2000, net: 33400, txnId: 'TXN9847261', status: 'Paid' },
    { month: 'February 2025', base: 30000, allowances: 5400, deductions: 1800, net: 33600, txnId: 'TXN9841034', status: 'Paid' },
    { month: 'January 2025', base: 30000, allowances: 5400, deductions: 2200, net: 33200, txnId: 'TXN9836720', status: 'Paid' }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Stipend Records</h1>
        <p className="text-white/50">Monthly pay & Seva Nidhi Fund</p>
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

      <Card title="Pay Slip History">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/10">
              <th className="text-left py-3 px-4 text-xs font-bold uppercase tracking-wider text-white/50">Month</th>
              <th className="text-left py-3 px-4 text-xs font-bold uppercase tracking-wider text-white/50">Base Pay</th>
              <th className="text-left py-3 px-4 text-xs font-bold uppercase tracking-wider text-white/50">Allowances</th>
              <th className="text-left py-3 px-4 text-xs font-bold uppercase tracking-wider text-white/50">Deductions</th>
              <th className="text-left py-3 px-4 text-xs font-bold uppercase tracking-wider text-white/50">Net</th>
              <th className="text-left py-3 px-4 text-xs font-bold uppercase tracking-wider text-white/50">Transaction ID</th>
              <th className="text-left py-3 px-4 text-xs font-bold uppercase tracking-wider text-white/50">Status</th>
            </tr>
          </thead>
          <tbody>
            {payHistory.map((pay, i) => (
              <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                <td className="py-3 px-4 font-medium">{pay.month}</td>
                <td className="py-3 px-4 font-mono text-white/70">₹{pay.base.toLocaleString()}</td>
                <td className="py-3 px-4 font-mono text-[#00FF88]">+₹{pay.allowances.toLocaleString()}</td>
                <td className="py-3 px-4 font-mono text-red-400">-₹{pay.deductions.toLocaleString()}</td>
                <td className="py-3 px-4 font-mono font-bold text-white">₹{pay.net.toLocaleString()}</td>
                <td className="py-3 px-4 font-mono text-sm text-white/50">{pay.txnId}</td>
                <td className="py-3 px-4">
                  <Badge type="green" text={pay.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
};

export default SoldierStipend;
