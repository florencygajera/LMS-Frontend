// Stat Card component for dashboard statistics
export const StatCard = ({ label, value, variant = '', meta, valueColor = '' }) => {
  const variantClasses = {
    '': 'border-t-[#4a5e3a]',
    'navy': 'border-t-[#1a2d4a]',
    'saffron': 'border-t-[#c8601a]',
    'red': 'border-t-[#c0392b]',
    'green': 'border-t-[#2e7d32]',
  };

  const valueColorClasses = {
    '': '',
    'v-green': 'text-[#2e7d32]',
    'v-saffron': 'text-[#c8601a]',
    'v-red': 'text-[#c0392b]',
  };

  return (
    <div className={`bg-white border border-[#d0d0c8] border-t-[3px] p-4 ${variantClasses[variant] || ''}`}>
      <div className="text-[11px] text-[#777] uppercase tracking-[0.7px] mb-1.5">{label}</div>
      <div className={`font-serif text-[26px] font-bold text-[#1a2d4a] leading-none ${valueColorClasses[valueColor] || ''}`}>
        {value}
      </div>
      {meta && <div className="text-[11px] text-[#777] mt-1">{meta}</div>}
    </div>
  );
};

// Panel component for grouped content
export const Panel = ({ title, subtitle, children, className = '' }) => {
  return (
    <div className={`bg-white border border-[#d0d0c8] mb-4 ${className}`}>
      {(title || subtitle) && (
        <div className="flex justify-between items-center px-4 py-2.5 border-b border-[#d0d0c8] bg-[#f5f5f0]">
          <div>
            {title && <div className="font-bold text-[14px] text-[#1a2d4a]">{title}</div>}
            {subtitle && <div className="text-[11px] text-[#777]">{subtitle}</div>}
          </div>
        </div>
      )}
      <div className="p-4">{children}</div>
    </div>
  );
};

// Score Bar component
export const ScoreBar = ({ label, value, showGrade = true }) => {
  const fillClass = value >= 85 ? 'bg-[#4a5e3a]' : value >= 70 ? 'bg-[#c8601a]' : 'bg-[#c0392b]';
  const gradeInfo = value >= 90 ? { l: 'Outstanding', c: 'bg' } : value >= 80 ? { l: 'Good', c: 'bb' } : value >= 70 ? { l: 'Average', c: 'bo' } : { l: 'Needs Improvement', c: 'br' };
  const scoreColor = value >= 85 ? '#2e7d32' : value >= 70 ? '#e65100' : '#c0392b';

  return (
    <div className="mb-3">
      <div className="flex justify-between items-center text-[13px] mb-1">
        <span className="text-[#444]">{label}</span>
        <div className="flex items-center gap-1.5">
          {showGrade && (
            <span className={`px-2 py-0.5 text-[11px] font-semibold rounded ${gradeInfo.c === 'bg' ? 'bg-[#e8f5e9] text-[#2e7d32] border border-[#c8e6c9]' : gradeInfo.c === 'bb' ? 'bg-[#e3f2fd] text-[#1565c0] border border-[#bbdefb]' : gradeInfo.c === 'bo' ? 'bg-[#fff3e0] text-[#e65100] border border-[#ffe0b2]' : 'bg-[#fdecea] text-[#c62828] border border-[#ffcdd2]'}`}>
              {gradeInfo.l}
            </span>
          )}
          <span className="font-bold" style={{ color: scoreColor }}>{value}/100</span>
        </div>
      </div>
      <div className="h-2 bg-[#eaeae5] rounded-sm overflow-hidden">
        <div className={`h-full rounded-sm transition-all duration-600 ${fillClass}`} style={{ width: `${value}%` }} />
      </div>
    </div>
  );
};

// Badge component
export const Badge = ({ children, variant = '' }) => {
  const variantClasses = {
    'bg': 'bg-[#e8f5e9] text-[#2e7d32] border border-[#c8e6c9]',
    'br': 'bg-[#fdecea] text-[#c62828] border border-[#ffcdd2]',
    'bo': 'bg-[#fff3e0] text-[#e65100] border border-[#ffe0b2]',
    'bb': 'bg-[#e3f2fd] text-[#1565c0] border border-[#bbdefb]',
    'bgy': 'bg-[#eaeae5] text-[#444] border border-[#d0d0c8]',
    'bgold': 'bg-[#fffde7] text-[#6d4c41] border border-[#fff9c4]',
  };

  return (
    <span className={`inline-block px-2 py-0.5 text-[11px] font-semibold rounded-sm whitespace-nowrap ${variantClasses[variant] || variantClasses['bgy']}`}>
      {children}
    </span>
  );
};

// Alert component
export const Alert = ({ children, variant = 'info' }) => {
  const variantClasses = {
    'info': 'bg-[#e3f2fd] border-l-[3px] border-[#1565c0] text-[#0d47a1]',
    'warn': 'bg-[#fff3e0] border-l-[3px] border-[#c8601a] text-[#bf360c]',
    'success': 'bg-[#e8f5e9] border-l-[3px] border-[#2e7d32] text-[#1b5e20]',
    'danger': 'bg-[#fdecea] border-l-[3px] border-[#c0392b] text-[#b71c1c]',
  };

  return (
    <div className={`px-3.5 py-2 text-[13px] mb-3 border-l-[3px] ${variantClasses[variant]}`}>
      {children}
    </div>
  );
};

// Button component
export const Button = ({ children, variant = 'primary', size = 'md', onClick, className = '', ...props }) => {
  const variantClasses = {
    'primary': 'bg-[#4a5e3a] text-white hover:bg-[#344228]',
    'navy': 'bg-[#1a2d4a] text-white hover:bg-[#243d61]',
    'saffron': 'bg-[#c8601a] text-white hover:bg-[#d97020]',
    'red': 'bg-[#c0392b] text-white hover:bg-[#b71c1c]',
    'out': 'bg-white text-[#4a5e3a] border-[1.5px] border-[#4a5e3a] hover:bg-[#f5f5f0]',
    'out-navy': 'bg-white text-[#1a2d4a] border-[1.5px] border-[#1a2d4a] hover:bg-[#f5f5f0]',
    'link': 'bg-none border-none text-[#1565c0] cursor-pointer p-0 underline',
  };

  const sizeClasses = {
    'sm': 'px-2.5 py-1 text-[12px]',
    'md': 'px-4 py-1.5 text-[13px]',
    'lg': 'px-6 py-2 text-[14px]',
  };

  return (
    <button 
      className={`font-semibold cursor-pointer border-none font-inherit transition-all duration-150 inline-flex items-center gap-1.5 leading-tight ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default { StatCard, Panel, ScoreBar, Badge, Alert, Button };
