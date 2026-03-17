// Stat Card component for dashboard statistics
export const StatCard = ({ label, value, variant = '', meta, valueColor = '' }) => {
  const variantClasses = {
    '': 'border-l-army-500',
    'navy': 'border-l-navy-500',
    'saffron': 'border-l-saffron-500',
    'red': 'border-l-red-500',
    'green': 'border-l-emerald-500',
    'army': 'border-l-army-500',
    'airforce': 'border-l-airforce-500',
  };

  const valueColorClasses = {
    '': 'text-slate-800',
    'v-green': 'text-emerald-600',
    'v-saffron': 'text-saffron-600',
    'v-red': 'text-red-600',
    'v-navy': 'text-navy-600',
  };

  const iconColors = {
    '': 'bg-army-50 text-army-600',
    'navy': 'bg-navy-50 text-navy-600',
    'saffron': 'bg-saffron-50 text-saffron-600',
    'red': 'bg-red-50 text-red-600',
    'green': 'bg-emerald-50 text-emerald-600',
    'army': 'bg-army-50 text-army-600',
    'airforce': 'bg-airforce-50 text-airforce-600',
  };

  return (
    <div className={`bg-white rounded-xl border border-slate-200 border-l-4 shadow-card hover:shadow-card-hover transition-shadow ${variantClasses[variant] || ''}`}>
      <div className="p-4">
        <div className="text-[11px] text-slate-500 uppercase tracking-wider font-medium mb-2">{label}</div>
        <div className={`text-3xl font-bold font-serif ${valueColorClasses[valueColor] || ''}`}>
          {value}
        </div>
        {meta && <div className="text-[11px] text-slate-500 mt-2">{meta}</div>}
      </div>
    </div>
  );
};

// Panel component for grouped content
export const Panel = ({ title, subtitle, children, className = '' }) => {
  return (
    <div className={`bg-white rounded-xl border border-slate-200 shadow-card ${className}`}>
      {(title || subtitle) && (
        <div className="flex justify-between items-center px-5 py-4 border-b border-slate-100">
          <div>
            {title && <div className="font-semibold text-slate-800">{title}</div>}
            {subtitle && <div className="text-[11px] text-slate-500">{subtitle}</div>}
          </div>
        </div>
      )}
      <div className="p-5">{children}</div>
    </div>
  );
};

// Score Bar component
export const ScoreBar = ({ label, value, showGrade = true }) => {
  const fillClass = value >= 85 ? 'bg-army-500' : value >= 70 ? 'bg-saffron-500' : 'bg-red-500';
  const gradeInfo = value >= 90 ? { l: 'Outstanding', c: 'bg-emerald-100 text-emerald-700' } : value >= 80 ? { l: 'Good', c: 'bg-blue-100 text-blue-700' } : value >= 70 ? { l: 'Average', c: 'bg-amber-100 text-amber-700' } : { l: 'Needs Improvement', c: 'bg-red-100 text-red-700' };
  const scoreColorValue = value >= 85 ? '#059669' : value >= 70 ? '#d97706' : '#dc2626';

  return (
    <div className="mb-3">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-[13px] text-slate-700 font-medium">{label}</span>
        <div className="flex items-center gap-2">
          {showGrade && <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${gradeInfo.c}`}>{gradeInfo.l}</span>}
          <span className="text-[13px] font-bold" style={{ color: scoreColorValue }}>{value}/100</span>
        </div>
      </div>
      <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
        <div className={`h-full rounded-full ${fillClass} transition-all duration-500`} style={{ width: `${value}%` }} />
      </div>
    </div>
  );
};

// Badge component
export const Badge = ({ variant = '', children }) => {
  const variantClasses = {
    'bg': 'bg-emerald-100 text-emerald-700 border-emerald-200',
    'bb': 'bg-blue-100 text-blue-700 border-blue-200',
    'bo': 'bg-amber-100 text-amber-700 border-amber-200',
    'br': 'bg-red-100 text-red-700 border-red-200',
    'bgy': 'bg-slate-100 text-slate-600 border-slate-200',
    'gold': 'bg-amber-50 text-amber-800 border-amber-200',
  };

  return (
    <span className={`inline-block px-2 py-0.5 text-[11px] font-semibold rounded border ${variantClasses[variant] || variantClasses.bgy}`}>
      {children}
    </span>
  );
};

// Alert component
export const Alert = ({ variant = 'info', children, className = '' }) => {
  const variantClasses = {
    'info': 'bg-blue-50 text-blue-800 border-blue-200',
    'success': 'bg-emerald-50 text-emerald-800 border-emerald-200',
    'warn': 'bg-amber-50 text-amber-800 border-amber-200',
    'danger': 'bg-red-50 text-red-800 border-red-200',
  };

  const icons = {
    'info': 'ℹ️',
    'success': '✅',
    'warn': '⚠️',
    'danger': '🚨',
  };

  return (
    <div className={`px-4 py-3 text-[13px] rounded-lg border mb-3 ${variantClasses[variant]} ${className}`}>
      <span className="mr-2">{icons[variant]}</span>
      {children}
    </div>
  );
};

// Button component
export const Button = ({ variant = 'primary', size = 'md', children, className = '', ...props }) => {
  const variantClasses = {
    'primary': 'bg-army-600 text-white hover:bg-army-700 shadow-sm',
    'navy': 'bg-navy-600 text-white hover:bg-navy-700 shadow-sm',
    'saffron': 'bg-saffron-600 text-white hover:bg-saffron-700 shadow-sm',
    'red': 'bg-red-600 text-white hover:bg-red-700 shadow-sm',
    'green': 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-sm',
    'out': 'bg-transparent text-slate-600 border border-slate-300 hover:bg-slate-50',
    'out-navy': 'bg-transparent text-navy-600 border border-navy-300 hover:bg-navy-50',
  };

  const sizeClasses = {
    'sm': 'px-3 py-1.5 text-xs',
    'md': 'px-4 py-2 text-sm',
    'lg': 'px-6 py-3 text-base',
  };

  return (
    <button 
      className={`inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-150 disabled:opacity-50 disabled:cursor-not-allowed ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default { StatCard, Panel, ScoreBar, Badge, Alert, Button };
