// Sidebar component for role-based navigation
const Sidebar = ({ user, page, setPage, sosCount = 0, appCount = 0 }) => {
  const getSidebarLinks = () => {
    switch (user?.role) {
      case 'ADMIN':
        return [
          { section: 'OVERVIEW', items: [
            { k: 'admin', ic: '📊', l: 'Dashboard' },
            { k: 'admin-sos', ic: '🚨', l: 'SOS Alerts', count: sosCount || null },
            { k: 'admin-audit', ic: '🔐', l: 'Audit Log' }
          ]},
          { section: 'AI & INTELLIGENCE', items: [
            { k: 'admin-agniassist', ic: '🤖', l: 'AgniAssist AI' },
            { k: 'admin-ml', ic: '📈', l: 'ML Insights' }
          ]},
          { section: 'RECRUITMENT', items: [
            { k: 'admin-applications', ic: '📋', l: 'Applications', count: appCount || null }
          ]},
          { section: 'BATTALION & SOLDIERS', items: [
            { k: 'admin-battalions', ic: '🏛️', l: 'All Battalions' },
            { k: 'admin-soldiers', ic: '👥', l: 'All Soldiers' },
            { k: 'admin-rankings', ic: '🏆', l: 'Rankings' }
          ]},
        ];
      case 'SOLDIER':
        return [
          { section: 'SOLDIER PORTAL', items: [
            { k: 'soldier', ic: '🏠', l: 'Dashboard' },
            { k: 'training', ic: '💪', l: 'Training' },
            { k: 'schedule', ic: '📅', l: 'Schedule' },
            { k: 'medical', ic: '🏥', l: 'Medical' },
            { k: 'equipment', ic: '🔧', l: 'Equipment' },
            { k: 'stipend', ic: '💰', l: 'Stipend' },
            { k: 'soldier-ai', ic: '🤖', l: 'AgniAssist AI' },
            { k: 'soldier-insights', ic: '📈', l: 'My AI Insights' },
            { k: 'soldier-docs', ic: '📄', l: 'Documents / OCR' }
          ]},
        ];
      case 'CANDIDATE':
        return [
          { section: 'CANDIDATE PORTAL', items: [
            { k: 'candidate', ic: '📋', l: 'My Application' },
            { k: 'status', ic: '🔍', l: 'Track Status' },
            { k: 'admitcard', ic: '🎫', l: 'Admit Card' }
          ]},
        ];
      case 'TRAINER':
        return [
          { section: 'TRAINER PORTAL', items: [
            { k: 'trainer', ic: '📊', l: 'Dashboard' },
            { k: 'upload', ic: '📤', l: 'Upload Data' }
          ]},
        ];
      case 'DOCTOR':
        return [
          { section: 'MEDICAL PORTAL', items: [
            { k: 'doctor', ic: '🏥', l: 'Medical Records' }
          ]},
        ];
      default:
        return [];
    }
  };

  const isActive = (k) => {
    if (k === 'admin') return page === 'admin';
    return page === k || page.startsWith(k + '_') ||
      (k === 'admin-battalions' && (page.startsWith('bat_') || page === 'admin-battalions')) ||
      (k === 'admin-soldiers' && (page.startsWith('sol_') || page === 'admin-soldiers'));
  };

  const links = getSidebarLinks();

  const getUserInfo = () => {
    switch (user?.role) {
      case 'ADMIN':
        return { name: user.name, id: 'ADMIN-001', role: 'Administrator · Agnipath Portal' };
      case 'SOLDIER':
        return { name: user.name, id: user.soldierId || 'AGN-2024-0101', role: 'Sepoy · 1st Rajputana Rifles' };
      case 'CANDIDATE':
        return { name: user.name, id: 'AGN-APP-2025-84721', role: 'Candidate · Agnipath 2025' };
      case 'TRAINER':
        return { name: user.name, id: 'TRN-001', role: 'Trainer · 1st RR' };
      case 'DOCTOR':
        return { name: user.name, id: 'MED-001', role: 'Medical Officer' };
      default:
        return { name: '', id: '', role: '' };
    }
  };

  const userInfo = getUserInfo();

  return (
    <div className="w-[220px] flex-shrink-0 bg-white border-r border-[#d0d0c8]">
      <div className="p-3.5 border-b border-[#d0d0c8] bg-[#f5f5f0]">
        <div className="font-bold text-[13px] text-[#1a2d4a]">{userInfo.name}</div>
        <div className="font-mono text-[11px] text-[#c8601a] mt-0.5">{userInfo.id}</div>
        <div className="text-[11px] text-[#777] mt-0.5">{userInfo.role}</div>
      </div>
      <div>
        {links.map(sec => (
          <div key={sec.section}>
            <div className="px-4 py-2.5 text-[10px] font-bold tracking-[2px] uppercase text-[#777]">
              {sec.section}
            </div>
            {sec.items.map(it => (
              <div
                key={it.k}
                className={`flex items-center gap-2 px-4 py-2 text-[13px] cursor-pointer transition-all duration-120 border-l-[3px] ${
                  isActive(it.k)
                    ? 'bg-white text-[#344228] border-l-[#4a5e3a] font-semibold'
                    : 'text-[#444] hover:bg-[#eaeae5] hover:text-[#1a1a1a] border-l-transparent'
                }`}
                onClick={() => setPage(it.k)}
              >
                <span className="w-[18px] text-center text-[14px]">{it.ic}</span>
                {it.l}
                {it.count && (
                  <span className="ml-auto bg-[#c8601a] text-white text-[10px] px-1.5 py-0.5 rounded-full">
                    {it.count}
                  </span>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
