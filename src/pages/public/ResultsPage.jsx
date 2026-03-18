import React from 'react';
import { Card, Badge } from '../../components/ui/Card';

export const ResultsPage = ({ onNavigate }) => {
  const results = [
    { batch: '2024-A', status: 'Released', date: '15 Jan 2025', link: '#' },
    { batch: '2024-B', status: 'Released', date: '10 Dec 2024', link: '#' },
    { batch: '2024-C', status: 'Released', date: '05 Nov 2024', link: '#' },
    { batch: '2025-A', status: 'Pending', date: 'Expected - June 2025', link: '#' }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Recruitment Results</h1>
        <p className="text-white/50">Check your selection status</p>
      </div>

      <Card title="Results List">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/10">
              <th className="text-left py-3 px-4 text-xs font-bold uppercase tracking-wider text-white/50">Batch</th>
              <th className="text-left py-3 px-4 text-xs font-bold uppercase tracking-wider text-white/50">Status</th>
              <th className="text-left py-3 px-4 text-xs font-bold uppercase tracking-wider text-white/50">Result Date</th>
              <th className="text-left py-3 px-4 text-xs font-bold uppercase tracking-wider text-white/50">Action</th>
            </tr>
          </thead>
          <tbody>
            {results.map((result, i) => (
              <tr key={i} className="border-b border-white/5 hover:bg-white/5">
                <td className="py-3 px-4 font-semibold">{result.batch}</td>
                <td className="py-3 px-4">
                  <Badge type={result.status === 'Released' ? 'green' : 'orange'} text={result.status} />
                </td>
                <td className="py-3 px-4 text-white/70">{result.date}</td>
                <td className="py-3 px-4">
                  {result.status === 'Released' ? (
                    <button className="text-[#00C2FF] hover:underline text-sm">View Result</button>
                  ) : (
                    <span className="text-white/30 text-sm">Not Available</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>

      <Card title="Check Your Status">
        <div className="space-y-4">
          <div>
            <label className="block text-sm text-white/70 mb-2">Registration Number</label>
            <input
              type="text"
              placeholder="Enter your registration number"
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-white/30 focus:outline-none focus:border-[#00C2FF]"
            />
          </div>
          <div>
            <label className="block text-sm text-white/70 mb-2">Date of Birth</label>
            <input
              type="date"
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#00C2FF]"
            />
          </div>
          <button className="w-full py-3 bg-[#00C2FF] text-black font-semibold rounded-lg hover:bg-[#00C2FF]/80 transition-colors">
            Check Status
          </button>
        </div>
      </Card>

      <div className="glass rounded-xl p-6">
        <h3 className="text-lg font-bold text-white mb-3">Need Help?</h3>
        <p className="text-white/70 mb-4">
          For any queries regarding results, please contact the helpdesk or email us at results@agnipath.gov.in
        </p>
        <button onClick={() => onNavigate('contact')} className="text-[#00C2FF] hover:underline">
          Contact Support →
        </button>
      </div>
    </div>
  );
};

export default ResultsPage;
