import React from 'react';
import { Card, Badge } from '../../components/ui/Card';

export const PhysicalStandardsPage = ({ onNavigate }) => {
  const physicalTests = [
    { test: '1.6 km Run', male: '7 min 30 sec', female: '8 min 30 sec', marks: '60' },
    { test: 'Push Ups', male: '20', female: '10', marks: '40' },
    { test: 'Pull Ups', male: '8', female: 'N/A', marks: '40' },
    { test: 'Sit Ups', male: '40', female: '30', marks: '40' },
    { test: 'Long Jump', male: '9 ft', female: '6 ft', marks: '30' },
    { test: 'Shot Put', male: '7.5 kg - 16 ft', female: '4 kg - 10 ft', marks: '30' }
  ];

  const medicalTests = [
    'General Physical Examination',
    'Visual Acuity',
    'Hearing Test',
    'Chest X-Ray',
    'Blood Test',
    'Urine Test',
    'BMI Measurement'
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Physical Standards</h1>
        <p className="text-white/50">Physical Fitness Test (PFT) requirements</p>
      </div>

      <Card title="Physical Efficiency Test (PET)">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/10">
              <th className="text-left py-3 px-4 text-xs font-bold uppercase tracking-wider text-white/50">Test</th>
              <th className="text-left py-3 px-4 text-xs font-bold uppercase tracking-wider text-white/50">Male</th>
              <th className="text-left py-3 px-4 text-xs font-bold uppercase tracking-wider text-white/50">Female</th>
              <th className="text-left py-3 px-4 text-xs font-bold uppercase tracking-wider text-white/50">Marks</th>
            </tr>
          </thead>
          <tbody>
            {physicalTests.map((test, i) => (
              <tr key={i} className="border-b border-white/5 hover:bg-white/5">
                <td className="py-3 px-4 font-semibold">{test.test}</td>
                <td className="py-3 px-4">{test.male}</td>
                <td className="py-3 px-4">{test.female}</td>
                <td className="py-3 px-4">{test.marks}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>

      <Card title="Medical Examination">
        <p className="text-white/70 mb-4">All candidates must clear the following medical tests:</p>
        <div className="grid md:grid-cols-2 gap-3">
          {medicalTests.map((test, i) => (
            <div key={i} className="flex items-center gap-2 glass rounded-lg p-3">
              <span className="text-[#00C2FF]">✓</span>
              <span className="text-white">{test}</span>
            </div>
          ))}
        </div>
      </Card>

      <Card title="Important Notes">
        <ul className="space-y-2 text-white/70">
          <li>• Minimum passing marks: 100 out of 200</li>
          <li>• Physical test is qualifying in nature</li>
          <li>• Medical test is also qualifying in nature</li>
          <li>• Candidates must be physically fit for all duties</li>
          <li>• Any deformity/condition will lead to rejection</li>
        </ul>
      </Card>
    </div>
  );
};

export default PhysicalStandardsPage;
