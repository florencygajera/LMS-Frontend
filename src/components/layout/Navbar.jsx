const Navbar = ({ page, setPage, user, onLogout }) => {
  const gLinks = [
    { k: 'home', l: 'Home' },
    { k: 'about', l: 'About Agnipath' },
    { k: 'recruitment', l: 'Recruitment' },
    { k: 'results', l: 'Results' }
  ];

  const rLinks = {
    CANDIDATE: [
      { k: 'candidate', l: 'My Application' },
      { k: 'status', l: 'Track Status' },
      { k: 'admitcard', l: 'Admit Card' }
    ],
    SOLDIER: [
      { k: 'soldier', l: 'Dashboard' },
      { k: 'training', l: 'Training' },
      { k: 'schedule', l: 'Schedule' },
      { k: 'medical', l: 'Medical' },
      { k: 'equipment', l: 'Equipment' },
      { k: 'stipend', l: 'Stipend' },
      { k: 'soldier-ai', l: '🤖 AgniAssist' },
      { k: 'soldier-insights', l: 'AI Insights' }
    ],
    ADMIN: [
      { k: 'admin', l: 'Overview' },
      { k: 'admin-battalions', l: 'Battalions' },
      { k: 'admin-soldiers', l: 'All Soldiers' },
      { k: 'admin-applications', l: 'Applications' },
      { k: 'admin-agniassist', l: '🤖 AgniAssist' },
      { k: 'admin-ml', l: 'ML Insights' },
      { k: 'admin-sos', l: 'SOS' }
    ],
    TRAINER: [
      { k: 'trainer', l: 'Dashboard' },
      { k: 'upload', l: 'Upload Data' }
    ],
    DOCTOR: [
      { k: 'doctor', l: 'Medical Records' }
    ],
  };

  // Get force color based on role
  const getForceColor = () => {
    if (user?.role === 'ADMIN') return 'navy';
    if (user?.role === 'SOLDIER') return 'army';
    if (user?.role === 'TRAINER') return 'army';
    if (user?.role === 'DOCTOR') return 'airforce';
    return 'army';
  };

  const force = getForceColor();
  const forceColors = {
    army: { bg: 'bg-army-600', hover: 'hover:bg-army-700', border: 'border-army-500', text: 'text-army-600' },
    navy: { bg: 'bg-navy-600', hover: 'hover:bg-navy-700', border: 'border-navy-500', text: 'text-navy-600' },
    airforce: { bg: 'bg-airforce-600', hover: 'hover:bg-airforce-700', border: 'border-airforce-500', text: 'text-airforce-600' },
  };
  const colors = forceColors[force] || forceColors.army;

  const links = user ? (rLinks[user.role] || gLinks) : gLinks;

  const isActive = (k) => {
    if (k === 'admin') return page === 'admin';
    return page === k || page.startsWith(k + '_') ||
      (k === 'admin-battalions' && (page.startsWith('bat_') || page === 'admin-battalions')) ||
      (k === 'admin-soldiers' && (page.startsWith('sol_') || page === 'admin-soldiers'));
  };

  return (
    <div className={`${colors.bg} shadow-nav`}>
      <div className="max-w-[1300px] mx-auto px-4 flex items-stretch">
        <div className="flex items-stretch">
          {links.map(l => (
            <div
              key={l.k}
              className={`px-4 py-3 text-[13px] cursor-pointer border-b-[3px] transition-all duration-150 whitespace-nowrap ${
                isActive(l.k)
                  ? 'text-white border-white'
                  : 'text-white/80 hover:bg-white/10 hover:text-white border-transparent'
              }`}
              onClick={() => setPage(l.k)}
            >
              {l.l}
            </div>
          ))}
        </div>
        <div className="flex-1" />
        <div className="flex items-center gap-3 px-3">
          {user ? (
            <>
              <span className="text-[12px] text-white/80">
                Welcome, <b className="text-white">{user.name?.split(' ')[0] || 'User'}</b>{' '}
                <span className="text-saffron-400 font-semibold">[{user.role}]</span>
              </span>
              <button
                className="px-4 py-1.5 text-[12px] font-semibold cursor-pointer border-none bg-white/10 text-white hover:bg-white/20 rounded-md transition-colors"
                onClick={onLogout}
              >
                Logout
              </button>
            </>
          ) : (
            <button
              className="px-4 py-1.5 text-[12px] font-semibold cursor-pointer border-none bg-white text-slate-800 hover:bg-slate-100 rounded-md transition-colors shadow-sm"
              onClick={() => setPage('login')}
            >
              Login / Apply
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

const Ticker = () => {
  const items = [
    'Agnipath Recruitment Batch 2025 — Applications Open Till 31 March 2025',
    'Physical Fitness Test: 15 April 2025 at all designated rally grounds',
    'Written Examination: 02 May 2025 at allocated exam centres',
    'Medical Examination: 20 May 2025 for all shortlisted candidates',
    'Stipend ₹30,000/month + Seva Nidhi Fund on completion of 4 years service'
  ];

  return (
    <div className="bg-white border-b border-slate-200 py-2 overflow-hidden">
      <div className="max-w-[1300px] mx-auto px-4 flex items-center">
        <span className="bg-saffron-600 text-white text-[10px] font-bold px-3 py-0.5 rounded-sm whitespace-nowrap mr-3">
          LATEST
        </span>
        <div className="overflow-hidden flex-1">
          <div className="flex animate-scroll whitespace-nowrap">
            {[...items, ...items].map((text, i) => (
              <span key={i} className="text-[12px] text-slate-600 px-7">
                ◆ {text}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export { Navbar, Ticker };
export default { Navbar, Ticker };
