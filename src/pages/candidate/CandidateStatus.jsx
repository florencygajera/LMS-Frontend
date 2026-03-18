import React from 'react';
import { Card, Badge } from '../../components/ui/Card';

export const CandidateStatus = () => {
  const stats = [
    { label: 'Registration ID', value: 'AGN-2025-84721' },
    { label: 'Stage', value: '2 of 6' },
    { label: 'Force', value: 'Indian Army' },
    { label: 'Trade', value: 'Agniveer GD' }
  ];

  const progressSteps = [
    { label: 'Application Submitted', desc: 'Registration ID assigned.', status: 'done', date: '12 Mar 2025, 14:32 hrs' },
    { label: 'Document Verification', desc: 'Aadhaar, education certificates under review.', status: 'current', date: 'In Progress — Est. 3–5 days' },
    { label: 'Eligibility Screening', desc: 'Age, education, physical criteria check.', status: 'pending', date: 'Pending' },
    { label: 'Exam Registration', desc: 'Hall ticket and centre allocation.', status: 'pending', date: '25 Apr 2025' },
    { label: 'Physical Fitness Test', desc: 'Report to allocated exam centre.', status: 'pending', date: '15 Apr 2025' },
    { label: 'Written Examination', desc: 'Objective test at designated centre.', status: 'pending', date: '02 May 2025' }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Application Status</h1>
        <p className="text-white/50">Track your recruitment journey</p>
      </div>

      {/* Stats */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <div key={i} className="glass rounded-xl p-4">
            <p className="text-xs font-bold uppercase tracking-wider text-white/50 mb-1">{stat.label}</p>
            <p className="text-xl font-bold text-white">{stat.value}</p>
          </div>
        ))}
      </div>

      <Card title="Recruitment Progress" subtitle="Stage 2 of 6">
        <div className="space-y-6">
          {progressSteps.map((step, i, arr) => (
            <div key={i} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div
                  className={`w-4 h-4 rounded-full flex-shrink-0 ${
                    step.status === 'done'
                      ? 'bg-[#00FF88]'
                      : step.status === 'current'
                        ? 'bg-[#FFB800]'
                        : 'bg-white/20'
                  }`}
                />
                {i < arr.length - 1 && (
                  <div
                    className={`w-0.5 flex-1 my-1 ${
                      step.status === 'done' ? 'bg-[#00FF88]' : 'bg-white/10'
                    }`}
                  />
                )}
              </div>
              <div className="flex-1 pb-6">
                <p
                  className={`font-semibold ${
                    step.status === 'done'
                      ? 'text-[#00FF88]'
                      : step.status === 'current'
                        ? 'text-[#FFB800]'
                        : 'text-white/50'
                  }`}
                >
                  {step.label}
                </p>
                <p className="text-sm text-white/50 mt-1">{step.desc}</p>
                <p
                  className={`text-xs mt-2 font-medium ${
                    step.status === 'done' ? 'text-[#00FF88]' : step.status === 'current' ? 'text-[#FFB800]' : 'text-white/30'
                  }`}
                >
                  {step.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default CandidateStatus;
