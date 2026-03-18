import React from 'react';
import { Card, Badge } from '../../components/ui/Card';

export const LandingPage = ({ onNavigate }) => {
  const notices = [
    { text: 'Agnipath Recruitment Rally 2025 — Online applications open till 31 March 2025', date: '10 Mar 2025', isNew: true },
    { text: 'Physical Fitness Test date for Batch 2025-A — 15 April 2025', date: '08 Mar 2025', isNew: true },
    { text: 'March stipend disbursed for all active Agniveers', date: '28 Feb 2025', isNew: false },
    { text: 'New training module: Advanced Weapons Handling from April 2025', date: '25 Feb 2025', isNew: false },
    { text: 'Annual medical examinations scheduled for April–May 2025', date: '20 Feb 2025', isNew: false },
    { text: 'February 2025 performance rankings now published on portal', date: '15 Feb 2025', isNew: false }
  ];

  const features = [
    { icon: '📋', title: 'Online Application', desc: 'Apply for Agnipath recruitment digitally. Upload documents and track status in real time.' },
    { icon: '🎫', title: 'Admit Card', desc: 'Download hall ticket post verification. All exam centre details included.' },
    { icon: '💪', title: 'Training Tracking', desc: 'Track physical, weapons, mental, and combat performance throughout training.' },
    { icon: '📊', title: 'Performance Analytics', desc: 'Scores, rankings, strengths, weaknesses, and personalised improvement plans.' },
    { icon: '🏥', title: 'Medical Records', desc: 'Secure health history with restricted doctor-only access controls.' },
    { icon: '💰', title: 'Stipend Portal', desc: 'Monthly pay slips, deductions, and Seva Nidhi fund accumulation tracking.' }
  ];

  const stats = [
    { number: '46,000+', label: 'Applications' },
    { number: '8,400+', label: 'Active Agniveers' },
    { number: '4', label: 'Force Types' },
    { number: '124', label: 'Training Centres' },
    { number: '91%', label: 'Pass Rate 2024' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#1a3a5c] to-[#0B0F19] py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center gap-10">
            <div className="flex-1 min-w-[280px]">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-12 h-0.5 bg-[#FFB800]" />
                <span className="text-xs tracking-[3px] uppercase text-white/60">Indian Army — Agnipath Scheme</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                Agniveer<br />
                <span className="text-[#FFB800]">Official Portal</span><br />
                Agnipath Scheme 2025
              </h1>
              <p className="text-white/70 text-lg mb-6 max-w-xl">
                Complete digital platform managing Agnipath scheme — recruitment, training, medical, performance analytics, and stipend for all serving Agniveers.
              </p>
              <div className="flex gap-3 flex-wrap">
                <button 
                  onClick={() => onNavigate('register')}
                  className="px-6 py-3 bg-[#FFB800] text-black font-semibold rounded-lg hover:bg-[#FFB800]/80 transition-colors"
                >
                  Apply Now
                </button>
                <button 
                  onClick={() => onNavigate('login')}
                  className="px-6 py-3 glass text-white rounded-lg hover:bg-white/10 transition-colors border border-white/20"
                >
                  Login to Portal
                </button>
              </div>
            </div>
            
            <div className="w-[190px] h-[190px] rounded-full border border-white/15 flex items-center justify-center">
              <div className="w-[150px] h-[150px] rounded-full border border-white/10 bg-white/5 flex flex-col items-center justify-center">
                <div className="text-5xl mb-2">🛡️</div>
                <div className="text-sm font-bold text-white">Indian Army</div>
                <div className="text-[10px] text-white/50 tracking-widest uppercase">Service Before Self</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Strip */}
      <div className="bg-[#1a2d4a] py-6 border-t-4 border-[#FFB800]">
        <div className="container mx-auto px-4">
          <div className="flex justify-around gap-6 flex-wrap">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl font-bold text-[#FFB800]">{stat.number}</div>
                <div className="text-xs text-white/60 uppercase tracking-wider mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-[#0B0F19] py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Notices */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs tracking-[3px] uppercase text-[#FFB800] font-semibold">Official Notices</span>
              </div>
              <h2 className="text-2xl font-bold text-white mb-6 border-l-4 border-[#FFB800] pl-4">
                Announcements
              </h2>
              <div className="space-y-4">
                {notices.map((notice, i) => (
                  <div key={i} className="flex gap-3 py-3 border-b border-white/10 last:border-0">
                    <div className="w-2 h-2 rounded-full bg-[#FFB800] mt-2 flex-shrink-0" />
                    <div>
                      <p className="text-white/80 text-sm cursor-pointer hover:text-[#00C2FF] transition-colors">
                        {notice.text}
                        {notice.isNew && (
                          <span className="ml-2 text-[10px] font-bold bg-red-500 text-white px-1.5 py-0.5 rounded">NEW</span>
                        )}
                      </p>
                      <p className="text-xs text-white/50 mt-1">{notice.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs tracking-[3px] uppercase text-[#FFB800] font-semibold">Platform Features</span>
              </div>
              <h2 className="text-2xl font-bold text-white mb-6 border-l-4 border-[#FFB800] pl-4">
                What You Can Do
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {features.map((feature, i) => (
                  <div key={i} className="glass rounded-xl p-4 border-t-4 border-[#00C2FF]">
                    <div className="text-2xl mb-2">{feature.icon}</div>
                    <div className="font-semibold text-white mb-1">{feature.title}</div>
                    <p className="text-xs text-white/60 leading-relaxed">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-[#1a2d4a] py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center flex-wrap gap-4">
            <div>
              <h3 className="text-xl font-bold text-white">Ready to serve the nation?</h3>
              <p className="text-white/70 text-sm mt-1">Agnipath Batch 2025 open. Last date: 31 March 2025.</p>
            </div>
            <button 
              onClick={() => onNavigate('register')}
              className="px-6 py-3 bg-[#FFB800] text-black font-semibold rounded-lg hover:bg-[#FFB800]/80 transition-colors"
            >
              Start Application
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-[#1a3a5c] py-10 text-white/80">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-bold text-white mb-3">Agniveer — Agnipath</h4>
              <p className="text-xs leading-relaxed">
                Official portal of the Indian Army for managing Agnipath scheme. Ministry of Defence, Govt. of India.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-3 text-sm">Quick Links</h4>
              <ul className="text-xs space-y-2">
                <li className="cursor-pointer hover:text-white">Home</li>
                <li className="cursor-pointer hover:text-white">About Agnipath</li>
                <li className="cursor-pointer hover:text-white">Apply Now</li>
                <li className="cursor-pointer hover:text-white">Results</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-3 text-sm">Information</h4>
              <ul className="text-xs space-y-2">
                <li className="cursor-pointer hover:text-white">Eligibility Criteria</li>
                <li className="cursor-pointer hover:text-white">Physical Standards</li>
                <li className="cursor-pointer hover:text-white">Documents Required</li>
                <li className="cursor-pointer hover:text-white">Salary & Benefits</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-3 text-sm">Support</h4>
              <ul className="text-xs space-y-2">
                <li className="cursor-pointer hover:text-white">Help Desk</li>
                <li className="cursor-pointer hover:text-white">Contact Us</li>
                <li className="cursor-pointer hover:text-white">Grievance Portal</li>
                <li className="cursor-pointer hover:text-white">Privacy Policy</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-6 text-center text-xs text-white/45">
            © 2025 Agniveer — Agnipath Scheme · Ministry of Defence, Government of India · All Rights Reserved
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
