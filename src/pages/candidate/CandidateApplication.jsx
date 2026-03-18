import React, { useState } from 'react';
import { Card, Badge } from '../../components/ui/Card';

export const CandidateApplication = () => {
  const [currentStep, setCurrentStep] = useState(2);
  
  const steps = ['Personal Info', 'Education', 'Physical', 'Documents', 'Submit'];
  const stepColors = ['#00C2FF', '#00C2FF', '#FFB800', '#444', '#444'];
  const stepStatus = ['done', 'done', 'current', 'pending', 'pending'];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Application Form — Agnipath 2025</h1>
        <p className="text-white/50">Complete all sections before submission</p>
      </div>

      {/* Progress Steps */}
      <div className="flex items-center overflow-x-auto gap-2 pb-4">
        {steps.map((step, i) => (
          <React.Fragment key={i}>
            <div className="flex flex-col items-center min-w-[80px]">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-colors"
                style={{
                  backgroundColor: stepStatus[i] === 'done' ? '#00C2FF' : stepStatus[i] === 'current' ? '#FFB800' : 'transparent',
                  border: `2px solid ${stepStatus[i] === 'done' ? '#00C2FF' : stepStatus[i] === 'current' ? '#FFB800' : 'white/20'}`,
                  color: stepStatus[i] === 'done' || stepStatus[i] === 'current' ? (stepStatus[i] === 'current' ? 'black' : 'black') : 'white/50'
                }}
              >
                {stepStatus[i] === 'done' ? '✓' : i + 1}
              </div>
              <div
                className="text-xs mt-2 text-center font-medium"
                style={{
                  color: stepStatus[i] === 'current' ? '#FFB800' : stepStatus[i] === 'done' ? '#00C2FF' : 'white/50'
                }}
              >
                {step}
              </div>
            </div>
            {i < steps.length - 1 && (
              <div
                className="flex-1 h-0.5 min-w-[20px] mb-6"
                style={{
                  backgroundColor: stepStatus[i] === 'done' ? '#00C2FF' : 'white/20'
                }}
              />
            )}
          </React.Fragment>
        ))}
      </div>

      <Card title="Step 3: Physical Measurements" subtitle="Mandatory">
        <div className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-white/70 mb-2">Height (cm)</label>
              <input
                type="number"
                placeholder="e.g. 170"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-white/30 focus:outline-none focus:border-[#00C2FF]"
              />
            </div>
            <div>
              <label className="block text-sm text-white/70 mb-2">Weight (kg)</label>
              <input
                type="number"
                placeholder="e.g. 65"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-white/30 focus:outline-none focus:border-[#00C2FF]"
              />
            </div>
            <div>
              <label className="block text-sm text-white/70 mb-2">Chest Normal (cm)</label>
              <input
                type="number"
                placeholder="e.g. 77"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-white/30 focus:outline-none focus:border-[#00C2FF]"
              />
            </div>
            <div>
              <label className="block text-sm text-white/70 mb-2">Chest Expanded (cm)</label>
              <input
                type="number"
                placeholder="e.g. 82"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-white/30 focus:outline-none focus:border-[#00C2FF]"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm text-white/70 mb-2">Medical Conditions</label>
            <select className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#00C2FF]">
              <option>None — I declare I am medically fit</option>
              <option>Yes — provide details</option>
            </select>
          </div>

          <div className="glass rounded-lg p-4 border-l-4 border-[#00C2FF]">
            <p className="text-sm text-white/70">
              <strong>Eligibility:</strong> Min Height: 170 cm · Weight proportionate · Chest: 77/82 cm
            </p>
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <button className="px-6 py-2 glass text-white rounded-lg hover:bg-white/10 transition-colors">
              ← Previous
            </button>
            <button className="px-6 py-2 bg-[#00C2FF] text-black font-semibold rounded-lg hover:bg-[#00C2FF]/80 transition-colors">
              Save & Next →
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CandidateApplication;
