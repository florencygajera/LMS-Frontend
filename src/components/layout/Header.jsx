// Government Strip Component
export const GovStrip = () => {
  return (
    <div className="bg-[#0B0F19] border-b border-white/10 text-white/60 text-xs py-1">
      <div className="max-w-[1600px] mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="flex gap-0.5">
            <div className="w-3 h-3 bg-[#FF9933]" />
            <div className="w-3 h-3 bg-white" />
            <div className="w-3 h-3 bg-[#138808]" />
          </div>
          <span className="text-xs">Government of India — Ministry of Defence</span>
        </div>
        <div className="flex gap-4 text-xs">
          {['Screen Reader', 'Skip Content', 'Sitemap', 'Contact'].map(link => (
            <a key={link} href="#" className="text-white/40 hover:text-white transition-colors">{link}</a>
          ))}
        </div>
      </div>
    </div>
  );
};

// Site Header with Force Selector
export const SiteHeader = ({ onHome, force = 'army' }) => {
  const forceColors = {
    army: { bg: 'bg-green-600', text: 'text-green-400', border: 'border-green-500', name: 'Indian Army', icon: '🛡️' },
    navy: { bg: 'bg-blue-600', text: 'text-blue-400', border: 'border-blue-500', name: 'Indian Navy', icon: '⚓' },
    airforce: { bg: 'bg-sky-500', text: 'text-sky-400', border: 'border-sky-400', name: 'Indian Air Force', icon: '✈️' },
  };
  
  const current = forceColors[force] || forceColors.army;

  return (
    <div className="bg-[#0B0F19] border-b border-white/10 py-3">
      <div className="max-w-[1600px] mx-auto px-6 flex items-center gap-4">
        {/* Logo */}
        <div 
          className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00C2FF] to-[#00FFE5] flex items-center justify-center shadow-lg glow-blue cursor-pointer"
          onClick={onHome}
        >
          <span className="text-xl">🎖️</span>
        </div>
        
        {/* Site Name */}
        <div>
          <div className="text-2xl font-bold text-white tracking-tight">AGNIASSIST</div>
          <div className="text-[10px] text-white/50 uppercase tracking-widest">Military Command System</div>
        </div>
        
        {/* Status Indicator */}
        <div className="ml-6 flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/30">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-xs text-green-400 font-medium">SYSTEM ONLINE</span>
        </div>
        
        {/* Search Bar - Glass Style */}
        <div className="ml-auto flex-1 max-w-md">
          <div className="glass rounded-xl px-4 py-2 flex items-center gap-3">
            <svg className="w-4 h-4 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input 
              type="text" 
              placeholder="Search soldiers, reports, missions..." 
              className="bg-transparent border-none outline-none text-sm text-white placeholder-white/40 flex-1"
            />
            <span className="text-xs text-white/30">⌘K</span>
          </div>
        </div>
        
        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Notifications */}
          <button className="relative p-2 rounded-xl hover:bg-white/5 transition-colors">
            <svg className="w-5 h-5 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          
          {/* User Avatar */}
          <div className="flex items-center gap-3 pl-4 border-l border-white/10">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#00C2FF] to-[#A855F7] flex items-center justify-center text-sm font-bold">
              AV
            </div>
            <div className="text-right">
              <div className="text-sm font-medium text-white">Admin User</div>
              <div className="text-xs text-white/40">Commander</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

