// Landing Page with Dark/Neon Theme

export const LandingPage = ({ setPage }) => {
  const notices = [
    { title: 'Agnipath Recruitment Rally 2025 - Online applications open till 31 March 2025', date: '10 Mar 2025', isNew: true },
    { title: 'Physical Fitness Test date for Batch 2025-A - 15 April 2025', date: '08 Mar 2025', isNew: true },
    { title: 'March stipend disbursed for all active Agniveers', date: '28 Feb 2025', isNew: false },
    { title: 'New training module: Advanced Weapons Handling from April 2025', date: '25 Feb 2025', isNew: false },
    { title: 'Annual medical examinations scheduled for April-May 2025', date: '20 Feb 2025', isNew: false },
    { title: 'February 2025 performance rankings now published on portal', date: '15 Feb 2025', isNew: false },
  ];

  const features = [
    { icon: '📋', title: 'Online Application', desc: 'Apply for Agnipath recruitment digitally. Upload documents and track status in real time.' },
    { icon: '🎫', title: 'Admit Card', desc: 'Download hall ticket post verification. All exam centre details included.' },
    { icon: '💪', title: 'Training Tracking', desc: 'Track physical, weapons, mental, and combat performance throughout training.' },
    { icon: '📊', title: 'Performance Analytics', desc: 'Scores, rankings, strengths, weaknesses, and personalised improvement plans.' },
    { icon: '🏥', title: 'Medical Records', desc: 'Secure health history with restricted doctor-only access controls.' },
    { icon: '💰', title: 'Stipend Portal', desc: 'Monthly pay slips, deductions, and Seva Nidhi fund accumulation tracking.' },
  ];

  const stats = [
    { number: '46,000+', label: 'Applications' },
    { number: '8,400+', label: 'Active Agniveers' },
    { number: '4', label: 'Force Types' },
    { number: '124', label: 'Training Centres' },
    { number: '91%', label: 'Pass Rate 2024' },
  ];

  return (
    <div className="min-h-screen bg-[#0B0F19]">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#0B0F19] via-[#111827] to-[#0B0F19] py-20">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-96 h-96 bg-[#00C2FF]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#A855F7]/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00C2FF]/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-[1600px] mx-auto px-6">
          <div className="flex items-center gap-16 flex-wrap">
            <div className="flex-1 min-w-[300px]">
              <div className="flex items-center gap-2 text-[#00C2FF] text-sm font-medium mb-4">
                <div className="w-8 h-0.5 bg-gradient-to-r from-[#00C2FF] to-transparent" />
                INDIAN ARMY - AGNIPATH SCHEME
              </div>
              
              <h1 className="text-5xl font-bold text-white mb-4 leading-tight">
                Agniveer<br />
                <span className="text-[#00C2FF]">Official Portal</span><br />
                Agnipath Scheme 2025
              </h1>
              
              <p className="text-white/60 text-lg max-w-lg mb-8 leading-relaxed">
                Complete digital platform managing Agnipath scheme — recruitment, training, medical, performance analytics, and stipend for all serving Agniveers.
              </p>
              
              <div className="flex gap-4 flex-wrap">
                <button 
                  onClick={() => setPage('register')}
                  className="px-6 py-3 bg-gradient-to-r from-[#00C2FF] to-[#00FFE5] text-[#0B0F19] font-semibold rounded-xl hover:shadow-lg hover:shadow-[#00C2FF]/30 transition-all"
                >
                  Apply Now
                </button>
                <button 
                  onClick={() => setPage('login')}
                  className="px-6 py-3 glass text-white font-semibold rounded-xl hover:bg-white/10 transition-all"
                >
                  Login to Portal
                </button>
              </div>
            </div>
            
            {/* Hero Visual */}
            <div className="relative">
              <div className="w-64 h-64 rounded-full border border-[#00C2FF]/30 flex items-center justify-center relative">
                <div className="absolute inset-4 rounded-full border border-white/10 bg-white/5 backdrop-blur" />
                <div className="text-center relative z-10">
                  <div className="text-6xl mb-4">🎖️</div>
                  <div className="text-xl font-bold text-white">Indian Army</div>
                  <div className="text-xs text-white/40 tracking-widest uppercase mt-1">Service Before Self</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Strip */}
      <div className="bg-gradient-to-r from-[#111827] to-[#0B0F19] py-8 border-y border-white/10">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="flex justify-around gap-8 flex-wrap">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl font-bold text-[#00C2FF]">{stat.number}</div>
                <div className="text-xs text-white/40 uppercase tracking-wider mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-16 bg-[#0B0F19]">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Notices */}
            <div>
              <div className="flex items-center gap-2 text-[#FF9933] text-sm font-medium mb-2">
                <div className="w-6 h-0.5 bg-[#FF9933]" />
                OFFICIAL NOTICES
              </div>
              <h2 className="text-2xl font-bold text-white mb-6 border-l-4 border-[#FF9933] pl-4">
                Announcements
              </h2>
              
              <div className="space-y-4">
                {notices.map((notice, i) => (
                  <div 
                    key={i} 
                    className="glass rounded-xl p-4 hover:bg-white/5 transition-colors cursor-pointer group"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#FF9933] mt-2 flex-shrink-0" />
                      <div className="flex-1">
                        <div className="text-sm text-white group-hover:text-[#00C2FF] transition-colors">
                          {notice.title}
                          {notice.isNew && (
                            <span className="ml-2 px-2 py-0.5 text-[10px] font-bold bg-red-500/20 text-red-400 rounded-full">
                              NEW
                            </span>
                          )}
                        </div>
                        <div className="text-xs text-white/40 mt-1">{notice.date}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div>
              <div className="flex items-center gap-2 text-[#00C2FF] text-sm font-medium mb-2">
                <div className="w-6 h-0.5 bg-[#00C2FF]" />
                PLATFORM FEATURES
              </div>
              <h2 className="text-2xl font-bold text-white mb-6 border-l-4 border-[#00C2FF] pl-4">
                What You Can Do
              </h2>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {features.map((feature, i) => (
                  <div 
                    key={i} 
                    className="glass rounded-xl p-5 hover:border-[#00C2FF]/30 transition-all group hover:scale-[1.02]"
                  >
                    <div className="text-3xl mb-3">{feature.icon}</div>
                    <div className="text-sm font-semibold text-white mb-2 group-hover:text-[#00C2FF] transition-colors">
                      {feature.title}
                    </div>
                    <div className="text-xs text-white/50 leading-relaxed">
                      {feature.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-[#111827] to-[#0B0F19] py-12 border-t border-white/10">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="flex items-center justify-between flex-wrap gap-6">
            <div>
              <div className="text-2xl font-bold text-white mb-2">Ready to serve the nation?</div>
              <div className="text-white/60">Agnipath Batch 2025 open. Last date: 31 March 2025.</div>
            </div>
            <button 
              onClick={() => setPage('register')}
              className="px-8 py-4 bg-gradient-to-r from-[#FF9933] to-[#FF7F00] text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-[#FF9933]/30 transition-all"
            >
              Start Application
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-[#0B0F19] py-12 border-t border-white/10">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-lg font-bold text-white mb-4">Agniveer - Agnipath</div>
              <div className="text-sm text-white/50 leading-relaxed">
                Official portal of the Indian Army for managing Agnipath scheme. Ministry of Defence, Govt. of India.
              </div>
            </div>
            
            <div>
              <div className="text-sm font-semibold text-white mb-4">Quick Links</div>
              {['Home', 'About Agnipath', 'Apply Now', 'Results', 'Exam Centres'].map(link => (
                <div key={link} className="text-sm text-white/50 mb-2 cursor-pointer hover:text-white transition-colors">
                  {link}
                </div>
              ))}
            </div>
            
            <div>
              <div className="text-sm font-semibold text-white mb-4">Information</div>
              {['Eligibility Criteria', 'Physical Standards', 'Documents Required', 'Salary & Benefits', 'FAQ'].map(link => (
                <div key={link} className="text-sm text-white/50 mb-2 cursor-pointer hover:text-white transition-colors">
                  {link}
                </div>
              ))}
            </div>
            
            <div>
              <div className="text-sm font-semibold text-white mb-4">Support</div>
              {['Help Desk', 'Contact Us', 'Grievance Portal', 'RTI', 'Privacy Policy'].map(link => (
                <div key={link} className="text-sm text-white/50 mb-2 cursor-pointer hover:text-white transition-colors">
                  {link}
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-10 pt-6 border-t border-white/10 text-center text-sm text-white/30">
            © 2025 Agniveer - Agnipath Scheme · Ministry of Defence, Government of India · All Rights Reserved
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
