import React from 'react';
import { Card, Badge } from '../../components/ui/Card';

export const AboutPage = ({ onNavigate }) => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">About Agnipath Scheme</h1>
        <p className="text-white/50">India's revolutionary defense recruitment reform</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <Card title="What is Agnipath?">
          <p className="text-white/70 leading-relaxed mb-4">
            Agnipath is a landmark defense recruitment scheme introduced by the Government of India in 2022 
            for the Indian Armed Forces. Under this scheme, young men and women are recruited as Agniveers 
            (soldiers) for a short period of 4 years, with the aim of having a younger, fitter, and more 
            tech-savvy military.
          </p>
          <p className="text-white/70 leading-relaxed">
            The scheme aims to infuse youth energy into the armed forces while providing employment 
            opportunities to the youth and skills for their future careers.
          </p>
        </Card>

        <Card title="Key Highlights">
          <ul className="space-y-3 text-white/70">
            <li className="flex gap-2">
              <span className="text-[#00C2FF]">✓</span>
              <span>4-year service period for each Agniveer</span>
            </li>
            <li className="flex gap-2">
              <span className="text-[#00C2FF]">✓</span>
              <span>Monthly stipend starting at ₹30,000</span>
            </li>
            <li className="flex gap-2">
              <span className="text-[#00C2FF]">✓</span>
              <span>Seva Nidhi fund of ₹11.71 lakhs on completion</span>
            </li>
            <li className="flex gap-2">
              <span className="text-[#00C2FF]">✓</span>
              <span>Priority in government jobs after service</span>
            </li>
            <li className="flex gap-2">
              <span className="text-[#00C2FF]">✓</span>
              <span>Life insurance cover of ₹48 lakhs</span>
            </li>
            <li className="flex gap-2">
              <span className="text-[#00C2FF]">✓</span>
              <span>World-class military training</span>
            </li>
          </ul>
        </Card>
      </div>

      <Card title="Service Structure">
        <div className="grid md:grid-cols-4 gap-4">
          {[
            { year: 'Year 1', stipend: '₹30,000/month', total: '₹3.6 L' },
            { year: 'Year 2', stipend: '₹33,000/month', total: '₹4.0 L' },
            { year: 'Year 3', stipend: '₹36,500/month', total: '₹4.4 L' },
            { year: 'Year 4', stipend: '₹40,000/month', total: '₹4.8 L' }
          ].map((item, i) => (
            <div key={i} className="glass rounded-lg p-4 text-center">
              <p className="text-lg font-bold text-[#00C2FF]">{item.year}</p>
              <p className="text-2xl font-bold text-white mt-2">{item.stipend}</p>
              <p className="text-sm text-white/50 mt-1">Total: {item.total}</p>
            </div>
          ))}
        </div>
      </Card>

      <div className="flex justify-center gap-4">
        <button onClick={() => onNavigate('register')} className="px-6 py-3 bg-[#FFB800] text-black font-semibold rounded-lg hover:bg-[#FFB800]/80 transition-colors">
          Apply Now
        </button>
        <button onClick={() => onNavigate('login')} className="px-6 py-3 glass text-white rounded-lg hover:bg-white/10 transition-colors">
          Login to Portal
        </button>
      </div>
    </div>
  );
};

export default AboutPage;
