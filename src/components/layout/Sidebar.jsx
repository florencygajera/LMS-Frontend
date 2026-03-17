import { useState } from 'react';

const Sidebar = ({ user, page, setPage, children }) => {
  const sections = {
    OVERVIEW: [
      { k: 'admin', l: 'Dashboard', icon: '📊' },
      { k: 'admin-sos', l: 'SOS Alerts', icon: '🚨' },
      { k: 'admin-audit', l: 'Audit Log', icon: '🔐' },
    ],
    'AI & INTELLIGENCE': [
      { k: 'admin-agniassist', l: 'AgniAssist AI', icon: '🤖' },
      { k: 'admin-ml', l: 'ML Insights', icon: '📈' },
    ],
    RECRUITMENT: [
      { k: 'admin-applications', l: 'Applications', icon: '📋', count: 5 },
    ],
    'BATTALION & SOLDIERS': [
      { k: 'admin-battalions', l: 'All Battalions', icon: '🏛️' },
      { k: 'admin-soldiers', l: 'All Soldiers', icon: '👥' },
      { k: 'admin-rankings', l: 'Rankings', icon: '🏆' },
    ],
  };

  const soldierLinks = [
    { section: 'SOLDIER PORTAL', items: [
      { k: 'soldier', l: 'Dashboard', icon: '🏠' },
      { k: 'training', l: 'Training', icon: '💪' },
      { k: 'schedule', l: 'Schedule', icon: '📅' },
      { k: 'medical', l: 'Medical', icon: '🏥' },
      { k: 'equipment', l: 'Equipment', icon: '🔧' },
      { k: 'stipend', l: 'Stipend', icon: '💰' },
      { k: 'soldier-ai', l: 'AgniAssist', icon: '🤖' },
      { k: 'soldier-insights', l: 'AI Insights', icon: '📈' },
    ]},
  ];

  const candidateLinks = [
    { section: 'CANDIDATE PORTAL', items: [
      { k: 'candidate', l: 'My Application', icon: '📋' },
      { k: 'status', l: 'Track Status', icon: '🔍' },
      { k: 'admitcard', l: 'Admit Card', icon: '🎫' },
    ]},
  ];

  const getLinks = () => {
    if (user?.role === 'SOLDIER') return soldierLinks;
    if (user?.role === 'CANDIDATE') return candidateLinks;
    return Object.entries(sections).map(([section, items]) => ({ section, items }));
  };

  const links = getLinks();

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
    army: { bg: 'bg-army-600', border: 'border-army-500', text: 'text-army-600', hover: 'hover:bg-army-50' },
    navy: { bg: 'bg-navy-600', border: 'border-navy-500', text: 'text-navy-600', hover: 'hover:bg-navy-50' },
    airforce: { bg: 'bg-airforce-600', border: 'border-airforce-500', text: 'text-airforce-600', hover: 'hover:bg-airforce-50' },
  };
  const colors = forceColors[force] || forceColors.army;

  return (
    <div className="w-56 bg-white border-r border-slate-200 flex flex-col h-full">
      {/* User Info */}
      <div className="p-4 border-b border-slate-200 bg-slate-50">
        <div className="font-semibold text-slate-800 text-sm">{user?.name || 'User'}</div>
        <div className="text-[11px] text-slate-500 font-mono mt-1">{user?.id || 'ID'}</div>
        <div className="text-[11px] text-slate-500 mt-1">{user?.role || 'Role'}</div>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto py-2">
        {links.map((sec, idx) => (
          <div key={idx}>
            <div className="px-4 py-2 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
              {sec.section}
            </div>
            {sec.items.map((item) => (
              <div
                key={item.k}
                className={`mx-2 mb-0.5 px-3 py-2 rounded-lg text-[13px] cursor-pointer transition-all flex items-center gap-2 ${
                  page === item.k || page.startsWith(item.k + '_')
                    ? `${colors.bg} text-white shadow-sm`
                    : `text-slate-600 ${colors.hover}`
                }`}
                onClick={() => setPage(item.k)}
              >
                <span>{item.icon}</span>
                <span className="flex-1">{item.l}</span>
                {item.count && (
                  <span className="bg-saffron-500 text-white text-[10px] px-1.5 py-0.5 rounded-full">
                    {item.count}
                  </span>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="p-3 border-t border-slate-200 text-[10px] text-slate-400 text-center">
        Agniveer LMS v1.0
      </div>
    </div>
  );
};

export default Sidebar;
