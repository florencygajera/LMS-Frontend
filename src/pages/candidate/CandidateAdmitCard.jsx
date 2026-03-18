import React from 'react';
import { Card, Badge } from '../../components/ui/Card';

export const CandidateAdmitCard = () => {
  const admitData = {
    candidateName: 'ARYAN KUMAR SHARMA',
    regNo: 'AGN-APP-2025-84721',
    dob: '14 May 2003',
    category: 'General · Agniveer GD',
    state: 'Rajasthan',
    admitCardNo: 'AC-2025-84721-KV',
    examDate: '02 May 2025 (Friday)',
    reportingTime: '08:30 hrs (Sharp)',
    duration: '60 Minutes · 100 Marks',
    examCentre: 'Kendriya Vidyalaya No. 1, Jaipur',
    centreCode: 'KV-JAI-001',
    passingMarks: '40 out of 100'
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Admit Card / Hall Ticket</h1>
        <p className="text-white/50">Download your examination hall ticket</p>
      </div>

      <div className="glass rounded-lg p-4 border-l-4 border-[#FFB800]">
        <p className="text-[#FFB800] text-sm">
          ⚠️ Admit card available after document verification. Preview below.
        </p>
      </div>

      {/* Admit Card */}
      <div className="glass rounded-xl overflow-hidden max-w-3xl mx-auto">
        {/* Indian Flag Strip */}
        <div className="h-1.5 flex">
          <div className="flex-1 bg-[#FF9933]" />
          <div className="flex-1 bg-white" />
          <div className="flex-1 bg-[#138808]" />
        </div>

        {/* Header */}
        <div className="bg-[#1a3a5c] p-4 flex items-center gap-4">
          <span className="text-3xl">🛡️</span>
          <div>
            <h2 className="text-xl font-bold text-white">Agniveer Hall Ticket — Agnipath 2025</h2>
            <p className="text-xs text-white/70 tracking-widest uppercase mt-1">
              Indian Army · Ministry of Defence · Govt. of India
            </p>
          </div>
        </div>

        {/* Body */}
        <div className="p-6">
          <div className="flex gap-6 mb-4">
            {/* Photo */}
            <div className="w-24 h-28 bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0">
              <span className="text-4xl">👤</span>
            </div>

            {/* Details Grid */}
            <div className="flex-1 grid grid-cols-2 gap-x-6 gap-y-2">
              <div>
                <p className="text-xs text-white/50 uppercase tracking-wider">Candidate Name</p>
                <p className="font-semibold text-white">{admitData.candidateName}</p>
              </div>
              <div>
                <p className="text-xs text-white/50 uppercase tracking-wider">Registration No.</p>
                <p className="font-mono font-semibold text-[#FFB800]">{admitData.regNo}</p>
              </div>
              <div>
                <p className="text-xs text-white/50 uppercase tracking-wider">Date of Birth</p>
                <p className="text-white">{admitData.dob}</p>
              </div>
              <div>
                <p className="text-xs text-white/50 uppercase tracking-wider">Category / Trade</p>
                <p className="text-white">{admitData.category}</p>
              </div>
              <div>
                <p className="text-xs text-white/50 uppercase tracking-wider">State</p>
                <p className="text-white">{admitData.state}</p>
              </div>
              <div>
                <p className="text-xs text-white/50 uppercase tracking-wider">Admit Card No.</p>
                <p className="font-mono text-white">{admitData.admitCardNo}</p>
              </div>
            </div>
          </div>

          {/* Exam Details */}
          <div className="bg-white/5 border border-white/10 rounded-lg p-4">
            <div className="grid grid-cols-3 gap-4">
              {[
                ['Exam Date', admitData.examDate, true],
                ['Reporting Time', admitData.reportingTime, false],
                ['Duration', admitData.duration, false],
                ['Exam Centre', admitData.examCentre, false],
                ['Centre Code', admitData.centreCode, false],
                ['Passing Marks', admitData.passingMarks, false]
              ].map(([label, value, isFirst], i) => (
                <div key={i}>
                  <p className="text-xs text-white/50 uppercase tracking-wider">{label}</p>
                  <p className={`font-medium ${isFirst ? 'text-[#FFB800]' : 'text-white'}`}>{value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Important Instructions */}
          <div className="mt-4 p-3 bg-[#FFB800]/10 border-l-4 border-[#FFB800] rounded">
            <p className="text-sm text-white/80">
              <strong>Important:</strong> Carry original Aadhaar + 1 photo ID · No electronic devices · Report 30 min early
            </p>
          </div>
        </div>

        {/* Indian Flag Strip */}
        <div className="h-1.5 flex">
          <div className="flex-1 bg-[#FF9933]" />
          <div className="flex-1 bg-white" />
          <div className="flex-1 bg-[#138808]" />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-center gap-4">
        <button className="px-6 py-3 bg-[#00C2FF] text-black font-semibold rounded-lg hover:bg-[#00C2FF]/80 transition-colors flex items-center gap-2">
          ⬇ Download PDF
        </button>
        <button className="px-6 py-3 glass text-white rounded-lg hover:bg-white/10 transition-colors flex items-center gap-2">
          🖨 Print
        </button>
      </div>
    </div>
  );
};

export default CandidateAdmitCard;
