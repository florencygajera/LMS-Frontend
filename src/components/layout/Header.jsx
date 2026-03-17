const GovStrip = () => (
  <div className="bg-[#344228] text-white/85 text-[11px] py-1 border-b-2 border-[#c8601a]">
    <div className="max-w-[1300px] mx-auto px-4 flex justify-between items-center">
      <div className="flex items-center gap-3">
        <div className="flex gap-[2px]">
          {['#FF9933', '#fff', '#138808'].map((c, i) => (
            <div key={i} className="w-[18px] h-[5px]" style={{ backgroundColor: c }} />
          ))}
        </div>
        <span>Government of India — Ministry of Defence</span>
      </div>
      <div className="flex gap-3">
        {['Screen Reader', 'Skip Content', 'Sitemap', 'Contact'].map(l => (
          <a key={l} className="text-white/65 no-underline cursor-pointer text-[11px] hover:text-white">{l}</a>
        ))}
      </div>
    </div>
  </div>
);

const SiteHeader = ({ onHome }) => (
  <div className="bg-white border-b border-[#d0d0c8] py-2">
    <div className="max-w-[1300px] mx-auto px-4 flex items-center gap-4">
      <div className="cursor-pointer flex items-center gap-4" onClick={onHome}>
        <div className="w-[58px] h-[58px] bg-[#344228] rounded-full flex items-center justify-center text-[26px] border-2 border-[#b8941a] flex-shrink-0">
          🛡️
        </div>
        <div>
          <div className="font-serif text-[20px] font-bold text-[#344228]">Agniveer</div>
          <div className="text-[11px] text-[#777] tracking-wider uppercase">Agnipath Scheme · Indian Army · Ministry of Defence</div>
        </div>
      </div>
      <div className="ml-auto text-right text-[12px] text-[#777]">
        <div className="font-bold text-[#1a1a1a] text-[13px]">1800-115-558</div>
        <div>Helpline (Toll Free)</div>
      </div>
    </div>
  </div>
);

export { GovStrip, SiteHeader };
