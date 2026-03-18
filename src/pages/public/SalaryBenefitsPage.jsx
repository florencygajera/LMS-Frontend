import React from 'react';
import { Card, Badge } from '../../components/ui/Card';

export const SalaryBenefitsPage = ({ onNavigate }) => {
  const stipend = [
    { year: 'Year 1', basic: '₹30,000', allow: '₹5,400', total: '₹35,400' },
    { year: 'Year 2', basic: '₹33,000', allow: '₹5,940', total: '₹38,940' },
    { year: 'Year 3', basic: '₹36,500', allow: '₹6,570', total: '₹43,070' },
    { year: 'Year 4', basic: '₹40,000', allow: '₹7,200', total: '₹47,200' }
  ];

  const benefits = [
    { title: 'Seva Nidhi Fund', desc: '₹11.71 lakhs on completion of 4 years service' },
    { title: 'Life Insurance', desc: '₹48 lakhs cover (Agniveer Corpus + Army Group Insurance)' },
    { title: 'Medical Cover', desc: 'Full medical facilities for self and family' },
    { title: 'Canteen', desc: 'Access to Army Canteen at subsidized rates' },
    { title: 'Ration', desc: 'Free ration during service period' },
    { title: 'Post Service', desc: 'Priority in CAPF/Police recruitment, weightage in many exams' }
  ];

  const deductions = [
    { item: 'Army Group Insurance', amount: '₹1,000/month' },
    { item: 'Agniveer Corpus', amount: '₹2,000/month' },
    { item: 'Taxes', amount: 'As applicable' }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Salary & Benefits</h1>
        <p className="text-white/50">Stipend and benefits under Agnipath Scheme</p>
      </div>

      <Card title="Monthly Stipend">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/10">
              <th className="text-left py-3 px-4 text-xs font-bold uppercase tracking-wider text-white/50">Year</th>
              <th className="text-left py-3 px-4 text-xs font-bold uppercase tracking-wider text-white/50">Basic Pay</th>
              <th className="text-left py-3 px-4 text-xs font-bold uppercase tracking-wider text-white/50">Allowances</th>
              <th className="text-left py-3 px-4 text-xs font-bold uppercase tracking-wider text-white/50">Total</th>
            </tr>
          </thead>
          <tbody>
            {stipend.map((s, i) => (
              <tr key={i} className="border-b border-white/5 hover:bg-white/5">
                <td className="py-3 px-4 font-semibold">{s.year}</td>
                <td className="py-3 px-4">{s.basic}</td>
                <td className="py-3 px-4 text-green-400">+{s.allow}</td>
                <td className="py-3 px-4 font-bold text-[#00C2FF]">{s.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>

      <div className="grid lg:grid-cols-2 gap-6">
        <Card title="Benefits & Perks">
          <div className="space-y-3">
            {benefits.map((b, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-[#00FF88] text-xl">✓</span>
                <div>
                  <p className="font-semibold text-white">{b.title}</p>
                  <p className="text-sm text-white/60">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card title="Deductions">
          <div className="space-y-3">
            {deductions.map((d, i) => (
              <div key={i} className="flex justify-between items-center py-2 border-b border-white/5 last:border-0">
                <span className="text-white/70">{d.item}</span>
                <span className="font-semibold text-red-400">{d.amount}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default SalaryBenefitsPage;
