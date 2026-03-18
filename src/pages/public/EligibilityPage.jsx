import React from 'react';
import { Card, Badge } from '../../components/ui/Card';

export const EligibilityPage = ({ onNavigate }) => {
  const criteria = [
    { category: 'Age', requirement: '17.5 to 21 years', status: 'Mandatory' },
    { category: 'Nationality', requirement: 'Indian Citizen', status: 'Mandatory' },
    { category: 'Education (GD)', requirement: 'Class 10th Pass', status: 'Mandatory' },
    { category: 'Education (Tech)', requirement: 'Class 12th Pass with Physics/Chemistry/Math', status: 'Mandatory' },
    { category: 'Education (Clerk)', requirement: 'Class 12th Pass with typing speed', status: 'Mandatory' },
    { category: 'Marital Status', requirement: 'Unmarried', status: 'Mandatory' }
  ];

  const heightChart = [
    { region: 'General Category', male: '170 cm', female: '157 cm' },
    { region: 'SC/ST', male: '165 cm', female: '155 cm' },
    { region: 'Hill Areas (North-East)', male: '165 cm', female: '152 cm' },
    { region: 'Hill Areas (Garhwal/Kumaon)', male: '163 cm', female: '152 cm' }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Eligibility Criteria</h1>
        <p className="text-white/50">Who can apply for Agnipath Scheme</p>
      </div>

      <Card title="Basic Eligibility">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/10">
              <th className="text-left py-3 px-4 text-xs font-bold uppercase tracking-wider text-white/50">Category</th>
              <th className="text-left py-3 px-4 text-xs font-bold uppercase tracking-wider text-white/50">Requirement</th>
              <th className="text-left py-3 px-4 text-xs font-bold uppercase tracking-wider text-white/50">Status</th>
            </tr>
          </thead>
          <tbody>
            {criteria.map((item, i) => (
              <tr key={i} className="border-b border-white/5 hover:bg-white/5">
                <td className="py-3 px-4 font-semibold">{item.category}</td>
                <td className="py-3 px-4">{item.requirement}</td>
                <td className="py-3 px-4"><Badge type={item.status === 'Mandatory' ? 'red' : 'blue'} text={item.status} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>

      <Card title="Height Requirements">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/10">
              <th className="text-left py-3 px-4 text-xs font-bold uppercase tracking-wider text-white/50">Region</th>
              <th className="text-left py-3 px-4 text-xs font-bold uppercase tracking-wider text-white/50">Male</th>
              <th className="text-left py-3 px-4 text-xs font-bold uppercase tracking-wider text-white/50">Female</th>
            </tr>
          </thead>
          <tbody>
            {heightChart.map((item, i) => (
              <tr key={i} className="border-b border-white/5 hover:bg-white/5">
                <td className="py-3 px-4">{item.region}</td>
                <td className="py-3 px-4 font-semibold">{item.male}</td>
                <td className="py-3 px-4 font-semibold">{item.female}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>

      <Card title="Additional Requirements">
        <ul className="space-y-3 text-white/70">
          <li className="flex gap-2"><span>✓</span> No tattoos on visible body parts</li>
          <li className="flex gap-2"><span>✓</span> Should not have any disease/condition</li>
          <li className="flex gap-2"><span>✓</span> Valid ID proof (Aadhaar/Voter ID/Passport)</li>
          <li className="flex gap-2"><span>✓</span> Domicile certificate of respective state</li>
        </ul>
      </Card>
    </div>
  );
};

export default EligibilityPage;
