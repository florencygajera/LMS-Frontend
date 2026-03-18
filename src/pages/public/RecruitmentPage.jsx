import React from 'react';
import { Card, Badge } from '../../components/ui/Card';

export const RecruitmentPage = ({ onNavigate }) => {
  const eligibility = [
    { title: 'Age', value: '17.5 - 21 years' },
    { title: 'Education', value: '10th/12th Pass' },
    { title: 'Height', value: '170 cm (Male), 157 cm (Female)' },
    { title: 'Weight', value: 'Proportionate to height' },
    { title: 'Chest', value: '77 cm (min), 82 cm (expanded)' },
    { title: 'Vision', value: '6/6 both eyes' }
  ];

  const trades = [
    { name: 'Agniveer GD', seats: '25,000', eligibility: '10th Pass' },
    { name: 'Agniveer Tech', seats: '20,000', eligibility: '12th Pass (Science)' },
    { name: 'Agniveer Tradesman', seats: '10,000', eligibility: '10th/12th Pass' },
    { name: 'Agniveer Clerk', seats: '5,000', eligibility: '12th Pass with Typing' }
  ];

  const timeline = [
    { event: 'Application Start', date: '15 February 2025' },
    { event: 'Application End', date: '31 March 2025' },
    { event: 'Physical Test', date: '15 April 2025' },
    { event: 'Written Exam', date: '02 May 2025' },
    { event: 'Medical Exam', date: '20 May 2025' },
    { event: 'Final Merit List', date: '15 June 2025' }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Agnipath Recruitment 2025</h1>
        <p className="text-white/50">Join the Indian Army as an Agniveer</p>
      </div>

      {/* Eligibility */}
      <Card title="Eligibility Criteria">
        <div className="grid md:grid-cols-3 gap-4">
          {eligibility.map((item, i) => (
            <div key={i} className="glass rounded-lg p-4">
              <p className="text-xs text-white/50 uppercase tracking-wider">{item.title}</p>
              <p className="text-lg font-bold text-white mt-1">{item.value}</p>
            </div>
          ))}
        </div>
      </Card>

      {/* Trades */}
      <Card title="Available Trades">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/10">
              <th className="text-left py-3 px-4 text-xs font-bold uppercase tracking-wider text-white/50">Trade</th>
              <th className="text-left py-3 px-4 text-xs font-bold uppercase tracking-wider text-white/50">Seats</th>
              <th className="text-left py-3 px-4 text-xs font-bold uppercase tracking-wider text-white/50">Eligibility</th>
            </tr>
          </thead>
          <tbody>
            {trades.map((trade, i) => (
              <tr key={i} className="border-b border-white/5 hover:bg-white/5">
                <td className="py-3 px-4 font-semibold">{trade.name}</td>
                <td className="py-3 px-4">{trade.seats}</td>
                <td className="py-3 px-4"><Badge type="blue" text={trade.eligibility} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>

      {/* Timeline */}
      <Card title="Important Dates">
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-white/10" />
          <div className="space-y-4">
            {timeline.map((item, i) => (
              <div key={i} className="flex items-center gap-4 relative">
                <div className="w-3 h-3 rounded-full bg-[#00C2FF] z-10" />
                <div className="flex-1">
                  <p className="font-semibold text-white">{item.event}</p>
                  <p className="text-sm text-white/50">{item.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Card>

      <div className="flex justify-center">
        <button 
          onClick={() => onNavigate('register')}
          className="px-8 py-4 bg-[#FFB800] text-black font-bold rounded-lg hover:bg-[#FFB800]/80 transition-colors text-lg"
        >
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default RecruitmentPage;
