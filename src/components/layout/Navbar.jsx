import { useState } from 'react';

// Ticker Component
export const Ticker = () => {
  const items = [
    'Agnipath Recruitment Batch 2025 — Applications Open Till 31 March 2025',
    'Physical Fitness Test: 15 April 2025 at all designated rally grounds',
    'Written Examination: 02 May 2025 at allocated exam centres',
    'Medical Examination: 20 May 2025 for all shortlisted candidates',
    'Stipend 30000/month + Seva Nidhi Fund on completion of 4 years service',
  ];

  return (
    <div className="bg-[#0B0F19] border-b border-white/10 py-2 overflow-hidden">
      <div className="flex items-center max-w-[1600px] mx-auto px-6">
        <div className="flex-shrink-0 bg-red-500/20 text-red-400 text-xs font-bold px-3 py-1 rounded-lg mr-4 animate-pulse">
          LATEST
        </div>
        <div className="overflow-hidden flex-1">
          <div className="flex animate-[scroll_30s_linear_infinite] whitespace-nowrap">
            {[...items, ...items].map((item, i) => (
              <span key={i} className="text-xs text-white/50 mx-8">
                {' '} {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Nav Items Configuration
const navItems = {
  public: [
    { key: 'home', label: 'Home' },
    { key: 'about', label: 'About Agnipath' },
    { key: 'recruitment', label: 'Apply Now' },
    { key: 'eligibility', label: 'Eligibility' },
    { key: 'physical-standards', label: 'Physical Standards' },
    { key: 'results', label: 'Results' },
  ],
  CANDIDATE: [
    { key: 'candidate', label: 'My Application' },
    { key: 'status', label: 'Track Status' },
    { key: 'admitcard', label: 'Admit Card' },
  ],
  SOLDIER: [
    { key: 'soldier', label: 'Dashboard' },
    { key: 'training', label: 'Training' },
    { key: 'schedule', label: 'Schedule' },
    { key: 'medical', label: 'Medical' },
    { key: 'equipment', label: 'Equipment' },
    { key: 'stipend', label: 'Stipend' },
    { key: 'soldier-ai', label: 'AgniAssist AI' },
    { key: 'soldier-insights', label: 'AI Insights' },
  ],
  ADMIN: [
    { key: 'admin', label: 'Overview' },
    { key: 'admin-battalions', label: 'Battalions' },
    { key: 'admin-soldiers', label: 'All Soldiers' },
    { key: 'admin-applications', label: 'Applications' },
    { key: 'admin-agniassist', label: 'AgniAssist AI' },
    { key: 'admin-ml', label: 'ML Insights' },
    { key: 'admin-sos', label: 'SOS' },
  ],
  TRAINER: [
    { key: 'trainer', label: 'Dashboard' },
    { key: 'upload', label: 'Upload Data' },
  ],
  DOCTOR: [
    { key: 'doctor', label: 'Medical Records' },
  ],
};

// Main Navbar Component
export const Navbar = ({ page, setPage, user, setUser }) => {
  const items = user ? (navItems[user.role] || navItems.public) : navItems.public;

  const isActive = (key) => {
    if (key === 'admin') return page === 'admin';
    return page === key || page.startsWith(key + '_') ||
      (key === 'admin-battalions' && (page.startsWith('bat_') || page === 'admin-battalions')) ||
      (key === 'admin-soldiers' && (page.startsWith('sol_') || page === 'admin-soldiers'));
  };

  return (
    <>
      <Ticker />
      <div className="bg-[#0B0F19] border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="flex items-stretch h-12">
            {/* Nav Items */}
            {items.map((item) => (
              <button
                key={item.key}
                onClick={() => setPage(item.key)}
                className={`px-4 h-full text-sm font-medium transition-all duration-200 border-b-2 ${
                  isActive(item.key)
                    ? 'text-[#00C2FF] border-[#00C2FF] bg-white/5'
                    : 'text-white/60 border-transparent hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            ))}
            
            {/* Spacer */}
            <div className="flex-1" />
            
            {/* Right Section */}
            <div className="flex items-center gap-4 pl-4 border-l border-white/10">
              {user ? (
                <>
                  <div className="text-right">
                    <div className="text-sm text-white">
                      Welcome, <span className="text-[#00C2FF]">{user.name.split(' ')[0]}</span>
                    </div>
                    <div className="text-xs text-[#FF9933]">{user.role}</div>
                  </div>
                  <button
                    onClick={() => {
                      setUser(null);
                      setPage('home');
                    }}
                    className="px-4 py-2 text-xs font-semibold bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30 transition-colors"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <button
                  onClick={() => setPage('login')}
                  className="px-5 py-2 text-sm font-semibold bg-gradient-to-r from-[#00C2FF] to-[#00FFE5] text-[#0B0F19] rounded-lg hover:shadow-lg hover:shadow-[#00C2FF]/20 transition-all"
                >
                  Login / Apply
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

