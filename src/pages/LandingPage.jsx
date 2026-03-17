import { Ticker } from '../components/layout';

const LandingPage = ({ setPage }) => {
  const notices = [
    { t: 'Agnipath Recruitment Rally 2025 — Online applications open till 31 March 2025', d: '10 Mar 2025', isNew: true },
    { t: 'Physical Fitness Test date for Batch 2025-A — 15 April 2025', d: '08 Mar 2025', isNew: true },
    { t: 'March stipend disbursed for all active Agniveers', d: '28 Feb 2025', isNew: false },
    { t: 'New training module: Advanced Weapons Handling from April 2025', d: '25 Feb 2025', isNew: false },
    { t: 'Annual medical examinations scheduled for April–May 2025', d: '20 Feb 2025', isNew: false },
    { t: 'February 2025 performance rankings now published on portal', d: '15 Feb 2025', isNew: false },
  ];

  const features = [
    { ic: '📋', t: 'Online Application', d: 'Apply for Agnipath recruitment digitally. Upload documents and track status in real time.' },
    { ic: '🎫', t: 'Admit Card', d: 'Download hall ticket post verification. All exam centre details included.' },
    { ic: '💪', t: 'Training Tracking', d: 'Track physical, weapons, mental, and combat performance throughout training.' },
    { ic: '📊', t: 'Performance Analytics', d: 'Scores, rankings, strengths, weaknesses, and personalised improvement plans.' },
    { ic: '🏥', t: 'Medical Records', d: 'Secure health history with restricted doctor-only access controls.' },
    { ic: '💰', t: 'Stipend Portal', d: 'Monthly pay slips, deductions, and Seva Nidhi fund accumulation tracking.' },
  ];

  return (
    <>
      <Ticker />
      
      {/* Hero Section */}
      <div className="bg-[#344228] text-white py-12">
        <div className="max-w-[1300px] mx-auto px-4">
          <div className="flex items-center gap-10 flex-wrap">
            <div className="flex-1 min-w-[280px]">
              <div className="text-[11px] tracking-[3px] uppercase text-white/60 mb-2.5 flex items-center gap-2">
                <div className="w-5 h-0.5 bg-[#c8601a]" />Indian Army — Agnipath Scheme
              </div>
              <h1 className="font-serif text-[36px] font-bold leading-[1.2] mb-2.5">
                Agniveer<br />
                <span style={{ color: '#c8601a' }}>Official Portal</span><br />
                Agnipath Scheme 2025
              </h1>
              <p className="text-[15px] text-white/75 max-w-[520px] leading-relaxed mb-6">
                Complete digital platform managing Agnipath scheme — recruitment, training, medical, performance analytics, and stipend for all serving Agniveers.
              </p>
              <div className="flex gap-2.5 flex-wrap">
                <button 
                  className="px-6 py-2.5 text-[14px] font-semibold bg-[#c8601a] text-white hover:bg-[#d97020] border-none cursor-pointer"
                  onClick={() => setPage('register')}
                >
                  Apply Now
                </button>
                <button 
                  className="px-6 py-2.5 text-[14px] font-semibold bg-transparent text-white/80 border border-white/30 hover:bg-white/10 cursor-pointer"
                  onClick={() => setPage('login')}
                >
                  Login to Portal
                </button>
              </div>
            </div>
            <div className="w-[190px] h-[190px] rounded-full border border-white/15 flex items-center justify-center flex-shrink-0">
              <div className="w-[150px] h-[150px] rounded-full bg-white/5 border border-white/10 flex flex-col items-center justify-center gap-1.5">
                <div className="text-[44px]">🛡️</div>
                <div className="font-serif text-[13px] font-bold">Indian Army</div>
                <div className="text-[10px] text-white/50 tracking-[2px] uppercase">Service Before Self</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Strip */}
      <div className="bg-[#1a2d4a] text-white py-4.5 border-t-[3px] border-[#c8601a]">
        <div className="max-w-[1300px] mx-auto px-4">
          <div className="flex justify-around gap-5 flex-wrap">
            {[
              { n: '46,000+', l: 'Applications' },
              { n: '8,400+', l: 'Active Agniveers' },
              { n: '4', l: 'Force Types' },
              { n: '124', l: 'Training Centres' },
              { n: '91%', l: 'Pass Rate 2024' }
            ].map((s, i, arr) => (
              <React.Fragment key={i}>
                <div className="text-center">
                  <div className="font-serif text-[26px] font-bold text-[#c8601a]">{s.n}</div>
                  <div className="text-[11px] text-white/60 tracking-wider uppercase mt-0.5">{s.l}</div>
                </div>
                {i < arr.length - 1 && <div className="w-px bg-white/10" />}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-11 bg-white">
        <div className="max-w-[1300px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-9">
            {/* Notices */}
            <div>
              <div className="text-[11px] tracking-[3px] text-[#c8601a] font-semibold uppercase mb-1">Official Notices</div>
              <div className="font-serif text-[22px] font-bold text-[#344228] border-l-[3px] border-[#c8601a] pl-2.5 mb-4">Announcements</div>
              {notices.map((n, i) => (
                <div key={i} className="flex gap-2.5 py-2 border-b border-[#eaeae5]">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#c8601a] mt-1.5 flex-shrink-0" />
                  <div>
                    <div className="text-[13px] text-[#444] cursor-pointer hover:text-[#1565c0]">{n.t}
                      {n.isNew && <span className="text-[10px] font-bold bg-[#c0392b] text-white px-1 ml-1">NEW</span>}
                    </div>
                    <div className="text-[11px] text-[#777] mt-0.5">{n.d}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Features */}
            <div>
              <div className="text-[11px] tracking-[3px] text-[#c8601a] font-semibold uppercase mb-1">Platform Features</div>
              <div className="font-serif text-[22px] font-bold text-[#344228] border-l-[3px] border-[#c8601a] pl-2.5 mb-4">What You Can Do</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((f, i) => (
                  <div key={i} className="bg-[#f5f5f0] border border-[#d0d0c8] border-t-[3px] border-t-[#4a5e3a] p-3.5">
                    <div className="text-[22px] mb-1.5">{f.ic}</div>
                    <div className="font-bold text-[14px] text-[#1a2d4a] mb-1">{f.t}</div>
                    <div className="text-[12px] text-[#777] leading-relaxed">{f.d}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-[#1a2d4a] text-white py-7">
        <div className="max-w-[1300px] mx-auto px-4 flex justify-between items-center flex-wrap gap-4">
          <div>
            <div className="font-serif text-[20px] font-bold">Ready to serve the nation?</div>
            <div className="text-[14px] text-white/70 mt-1">Agnipath Batch 2025 open. Last date: 31 March 2025.</div>
          </div>
          <button 
            className="px-6 py-2.5 text-[14px] font-semibold bg-[#c8601a] text-white hover:bg-[#d97020] border-none cursor-pointer"
            onClick={() => setPage('register')}
          >
            Start Application
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-[#344228] text-white/80 py-7">
        <div className="max-w-[1300px] mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="font-serif text-[15px] font-bold text-white mb-2">Agniveer — Agnipath</div>
              <div className="text-[12px] leading-relaxed text-white/60">
                Official portal of the Indian Army for managing Agnipath scheme. Ministry of Defence, Govt. of India.
              </div>
            </div>
            <div>
              <div className="text-[13px] font-bold text-white mb-2">Quick Links</div>
              {['Home', 'About Agnipath', 'Apply Now', 'Results', 'Exam Centres'].map(l => (
                <div key={l} className="text-[12px] text-white/60 mb-1 cursor-pointer hover:text-white">{l}</div>
              ))}
            </div>
            <div>
              <div className="text-[13px] font-bold text-white mb-2">Information</div>
              {['Eligibility Criteria', 'Physical Standards', 'Documents Required', 'Salary & Benefits', 'FAQ'].map(l => (
                <div key={l} className="text-[12px] text-white/60 mb-1 cursor-pointer hover:text-white">{l}</div>
              ))}
            </div>
            <div>
              <div className="text-[13px] font-bold text-white mb-2">Support</div>
              {['Help Desk', 'Contact Us', 'Grievance Portal', 'RTI', 'Privacy Policy'].map(l => (
                <div key={l} className="text-[12px] text-white/60 mb-1 cursor-pointer hover:text-white">{l}</div>
              ))}
            </div>
          </div>
          <div className="border-t border-white/10 mt-5 pt-3.5 text-[11px] text-white/45 text-center">
            © 2025 Agniveer — Agnipath Scheme · Ministry of Defence, Government of India · All Rights Reserved
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
