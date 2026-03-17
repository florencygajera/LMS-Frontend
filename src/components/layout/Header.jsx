// Government Strip Component
export const GovStrip = () => {
  return (
    <div className="bg-army-800 text-white/80 text-[11px] py-1">
      <div className="max-w-[1300px] mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="flex gap-0.5">
            <div className="w-3 h-3 bg-[#FF9933]" />
            <div className="w-3 h-3 bg-white" />
            <div className="w-3 h-3 bg-[#138808]" />
          </div>
          <span>Government of India — Ministry of Defence</span>
        </div>
        <div className="flex gap-4">
          {['Screen Reader', 'Skip Content', 'Sitemap', 'Contact'].map(link => (
            <a key={link} href="#" className="text-white/60 hover:text-white transition-colors">{link}</a>
          ))}
        </div>
      </div>
    </div>
  );
};

// Site Header with Force Selector
export const SiteHeader = ({ onHome, force = 'army' }) => {
  const forceColors = {
    army: { bg: 'bg-army-600', text: 'text-army-700', border: 'border-army-500', name: 'Indian Army', icon: '🛡️' },
    navy: { bg: 'bg-navy-600', text: 'text-navy-700', border: 'border-navy-500', name: 'Indian Navy', icon: '⚓' },
    airforce: { bg: 'bg-airforce-600', text: 'text-airforce-700', border: 'border-airforce-500', name: 'Indian Air Force', icon: '✈️' },
  };
  
  const current = forceColors[force] || forceColors.army;

  return (
    <div className="bg-white border-b border-slate-200 py-3">
      <div className="max-w-[1300px] mx-auto px-4 flex items-center gap-4">
        {/* Logo */}
        <div 
          className={`w-14 h-14 ${current.bg} rounded-full flex items-center justify-center border-2 ${current.border} shadow-card cursor-pointer`}
          onClick={onHome}
        >
          <span className="text-2xl">{current.icon}</span>
        </div>
        
        {/* Site Name */}
        <div>
          <div className="font-serif text-xl font-bold text-slate-800">Agniveer</div>
          <div className="text-[10px] text-slate-500 uppercase tracking-widest">{current.name} · Agnipath Scheme · Ministry of Defence</div>
        </div>
        
        {/* Force Selector */}
        <div className="ml-auto flex items-center gap-2">
          {Object.entries(forceColors).map(([key, value]) => (
            <button
              key={key}
              className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all ${
                force === key 
                  ? `${value.bg} text-white shadow-sm` 
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </button>
          ))}
        </div>
        
        {/* Helpline */}
        <div className="text-right pl-4 border-l border-slate-200">
          <div className="font-semibold text-slate-800 text-sm">1800-115-558</div>
          <div className="text-[10px] text-slate-500">Helpline (Toll Free)</div>
        </div>
      </div>
    </div>
  );
};

export default { GovStrip, SiteHeader };
