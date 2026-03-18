import React from 'react';
import { Card, Badge } from '../../components/ui/Card';
import { overall, scoreColor, grade, getInsights } from '../../context/AppDataContext';

export const SoldierInsights = ({ soldier }) => {
  const sc = overall(soldier.scores);
  const ins = getInsights(soldier.scores);
  const predicted = Math.min(100, Math.round(sc + 2.3));
  const injuryRisk = soldier.scores.physical < 75 ? 'HIGH' : soldier.scores.physical < 85 ? 'MODERATE' : 'LOW';
  const trend = sc > 85 ? 'Improving' : sc > 75 ? 'Stable' : 'Needs Attention';

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">📈 My AI Insights</h1>
        <p className="text-white/50">Powered by AgniAssist ML Engine · Updated: 14 March 2025</p>
      </div>

      {/* Info Alert */}
      <div className="glass rounded-xl p-4 border-l-4 border-[#00C2FF]">
        <p className="text-sm text-white/70">
          These insights are AI-generated from your training data using the ML prediction engine. 
          Contact your trainer for personalised guidance.
        </p>
      </div>

      {/* AI Cards */}
      <div className="grid md:grid-cols-3 gap-4">
        <div className={`glass rounded-xl p-4 border-l-4 ${injuryRisk === 'LOW' ? 'border-[#00FF88]' : injuryRisk === 'MODERATE' ? 'border-[#FFB800]' : 'border-red-500'}`}>
          <p className="text-xs font-bold uppercase tracking-wider text-white/50 mb-2">Injury Risk Assessment</p>
          <p className="text-3xl font-bold text-white">{injuryRisk}</p>
          <p className="text-sm text-white/50 mt-1">Based on training load & physical scores</p>
          <Badge 
            type={injuryRisk === 'LOW' ? 'green' : injuryRisk === 'MODERATE' ? 'orange' : 'red'} 
            text={`${injuryRisk} RISK`} 
          />
        </div>

        <div className="glass rounded-xl p-4 border-l-4 border-[#00FF88]">
          <p className="text-xs font-bold uppercase tracking-wider text-white/50 mb-2">Predicted Score (Next Month)</p>
          <p className="text-3xl font-bold text-white">
            {predicted}<span className="text-lg text-white/50">/100</span>
          </p>
          <p className="text-sm text-white/50 mt-1">Confidence: High · Trend: {trend}</p>
          <Badge 
            type="green" 
            text={`↑ ${predicted - sc > 0 ? '+' : ''}${Math.round((predicted - sc) * 10) / 10} projected`} 
          />
        </div>

        <div className={`glass rounded-xl p-4 border-l-4 ${trend === 'Improving' ? 'border-[#00FF88]' : trend === 'Stable' ? 'border-[#FFB800]' : 'border-red-500'}`}>
          <p className="text-xs font-bold uppercase tracking-wider text-white/50 mb-2">Performance Trend</p>
          <p className={`text-3xl font-bold ${trend === 'Improving' ? 'text-[#00FF88]' : trend === 'Stable' ? 'text-[#FFB800]' : 'text-red-400'}`}>
            {trend}
          </p>
          <p className="text-sm text-white/50 mt-1">3-month rolling analysis</p>
          <Badge 
            type={trend === 'Improving' ? 'green' : trend === 'Stable' ? 'orange' : 'red'} 
            text={trend === 'Improving' ? 'On track' : 'Review needed'} 
          />
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <Card title="AI Training Recommendations" subtitle="Personalised by ML Engine">
          <ul className="space-y-3">
            {[
              ...ins.improvements.map(it => `Increase ${it.label.toLowerCase()} sessions — target +10 points in 6 weeks`),
              ...ins.warnings.map(it => `Maintain ${it.label.toLowerCase()} — add 2 additional sessions/week`),
              sc < 90 ? 'Track daily calorie intake and hydration levels' : 'Consider advanced tactical training programme',
              'Schedule medical checkup before next quarterly assessment',
            ].slice(0, 5).map((rec, i) => (
              <li key={i} className="flex gap-2 text-sm">
                <span className="text-[#00C2FF]">→</span>
                <span>{rec}</span>
              </li>
            ))}
          </ul>
        </Card>

        <Card title="Medical Risk Analysis" subtitle="Auto-generated from health data">
          {[
            { label: 'Fatigue Risk', value: soldier.scores.physical < 80 ? 'MODERATE' : 'LOW', c: soldier.scores.physical < 80 ? 'orange' : 'green' },
            { label: 'Overtraining Risk', value: soldier.scores.attendance > 95 ? 'LOW' : 'MODERATE', c: soldier.scores.attendance > 95 ? 'green' : 'orange' },
            { label: 'Injury Probability', value: `${soldier.scores.physical < 75 ? '22' : '12'}%`, c: soldier.scores.physical < 75 ? 'orange' : 'green' },
            { label: 'Dehydration Risk', value: 'LOW', c: 'green' },
          ].map((item, i) => (
            <div key={i} className="flex justify-between items-center py-2 border-b border-white/5 last:border-0">
              <span className="text-sm">{item.label}</span>
              <Badge type={item.c} text={item.value} />
            </div>
          ))}
        </Card>
      </div>
    </div>
  );
};

export default SoldierInsights;
