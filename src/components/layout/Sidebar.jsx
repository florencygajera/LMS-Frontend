// Sidebar Configuration
const sidebarSections = {
  ADMIN: [
    { section: 'OVERVIEW', items: [
      { key: 'admin', icon: '📊', label: 'Dashboard' },
      { key: 'admin-sos', icon: '🚨', label: 'SOS Alerts', count: null },
      { key: 'admin-audit', icon: '🔐', label: 'Audit Log' }
    ]},
    { section: 'AI & INTELLIGENCE', items: [
      { key: 'admin-agniassist', icon: '🤖', label: 'AgniAssist AI' },
      { key: 'admin-ml', icon: '📈', label: 'ML Insights' }
    ]},
    { section: 'RECRUITMENT', items: [
      { key: 'admin-applications', icon: '📋', label: 'Applications', count: 5 }
    ]},
    { section: 'BATTALION & SOLDIERS', items: [
      { key: 'admin-battalions', icon: '🏛️', label: 'All Battalions' },
      { key: 'admin-soldiers', icon: '👥', label: 'All Soldiers' },
      { key: 'admin-rankings', icon: '🏆', label: 'Rankings' }
    ]},
  ],
  SOLDIER: [
    { section: 'SOLDIER PORTAL', items: [
      { key: 'soldier', icon: '🏠', label: 'Dashboard' },
      { key: 'training', icon: '💪', label: 'Training' },
      { key: 'schedule', icon: '📅', label: 'Schedule' },
      { key: 'medical', icon: '🏥', label: 'Medical' },
      { key: 'equipment', icon: '🔧', label: 'Equipment' },
      { key: 'stipend', icon: '💰', label: 'Stipend' },
      { key: 'soldier-ai', icon: '🤖', label: 'AgniAssist AI' },
      { key: 'soldier-insights', icon: '📈', label: 'AI Insights' },
      { key: 'soldier-docs', icon: '📄', label: 'Documents / OCR' }
    ]},
  ],
  CANDIDATE: [
    { section: 'CANDIDATE PORTAL', items: [
      { key: 'candidate', icon: '📋', label: 'My Application' },
      { key: 'status', icon: '🔍', label: 'Track Status' },
      { key: 'admitcard', icon: '🎫', label: 'Admit Card' }
    ]},
  ],
  TRAINER: [
    { section: 'TRAINER PORTAL', items: [
      { key: 'trainer', icon: '📊', label: 'Dashboard' },
      { key: 'upload', icon: '📤', label: 'Upload Data' }
    ]},
  ],
  DOCTOR: [
    { section: 'MEDICAL PORTAL', items: [
      { key: 'doctor', icon: '🏥', label: 'Medical Records' },
      { key: 'doctor-add', icon: '📋', label: 'Add Record' },
      { key: 'doctor-stats', icon: '📊', label: 'Health Stats' }
    ]},
  ],
};

export const Sidebar = ({ page, setPage, user, sosAlerts = [] }) => {
  const sections = sidebarSections[user?.role] || sidebarSections.ADMIN;
  const activeSOSCount = sosAlerts?.filter(s => s.status === 'active')?.length || 0;

  const isActive = (key) => {
    if (key === 'admin') return page === 'admin';
    return page === key || page.startsWith(key + '_') ||
      (key === 'admin-battalions' && (page.startsWith('bat_') || page === 'admin-battalions')) ||
      (key === 'admin-soldiers' && (page.startsWith('sol_') || page === 'admin-soldiers'));
  };

  // Get initials for avatar
  const getInitials = (name) => {
    if (!name) return 'AV';
    return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
  };

  return (
    <div className="w-56 bg-[#0B0F19] border-r border-white/10 flex flex-col h-full">
      {/* User Info */}
      <div className="p-4 border-b border-white/10">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00C2FF] to-[#A855F7] flex items-center justify-center text-sm font-bold text-white">
            {getInitials(user?.name)}
          </div>
          <div>
            <div className="text-sm font-medium text-white truncate max-w-[140px]">{user?.name || 'User'}</div>
            <div className="text-xs text-[#FF9933]">{user?.role || 'Guest'}</div>
          </div>
        </div>
        <div className="flex items-center gap-2 text-xs text-white/40">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span>Online</span>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto py-2">
        {sections.map((section) => (
          <div key={section.section} className="mb-4">
            <div className="px-4 py-2 text-[10px] font-bold uppercase tracking-wider text-white/30">
              {section.section}
            </div>
            {section.items.map((item) => (
              <button
                key={item.key}
                onClick={() => setPage(item.key)}
                className={`w-full px-4 py-2.5 flex items-center gap-3 text-sm transition-all duration-200 border-l-2 ${
                  isActive(item.key)
                    ? 'bg-[#00C2FF]/10 text-[#00C2FF] border-[#00C2FF]'
                    : 'text-white/60 border-transparent hover:bg-white/5 hover:text-white'
                }`}
              >
                <span className="text-base">{item.icon}</span>
                <span className="flex-1 text-left">{item.label}</span>
                {item.key === 'admin-sos' && activeSOSCount > 0 && (
                  <span className="px-2 py-0.5 text-xs font-bold bg-red-500 text-white rounded-full animate-pulse">
                    {activeSOSCount}
                  </span>
                )}
                {item.count && (
                  <span className="px-2 py-0.5 text-xs font-bold bg-[#FF9933]/20 text-[#FF9933] rounded-full">
                    {item.count}
                  </span>
                )}
              </button>
            ))}
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-white/10">
        <div className="text-xs text-white/30 text-center">
          AGNIASSIST v2.0
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
