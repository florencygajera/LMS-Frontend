// Card Components with Dark/Neon Theme - Export All Components

// Stat Card Component
export const StatCard = ({ label, value, icon, trend, trendValue, color = 'blue' }) => {
  const colorClasses = {
    blue: { bg: 'bg-[#00C2FF]/10', border: 'border-[#00C2FF]/30', text: 'text-[#00C2FF]', glow: 'group-hover:shadow-[#00C2FF]/20' },
    green: { bg: 'bg-[#00FF88]/10', border: 'border-[#00FF88]/30', text: 'text-[#00FF88]', glow: 'group-hover:shadow-[#00FF88]/20' },
    red: { bg: 'bg-red-500/10', border: 'border-red-500/30', text: 'text-red-400', glow: 'group-hover:shadow-red-500/20' },
    orange: { bg: 'bg-[#FF9933]/10', border: 'border-[#FF9933]/30', text: 'text-[#FF9933]', glow: 'group-hover:shadow-[#FF9933]/20' },
    purple: { bg: 'bg-[#A855F7]/10', border: 'border-[#A855F7]/30', text: 'text-[#A855F7]', glow: 'group-hover:shadow-[#A855F7]/20' },
  };
  
  const colors = colorClasses[color] || colorClasses.blue;

  return (
    <div className={`glass rounded-xl p-5 group transition-all duration-300 hover:scale-[1.02] hover:shadow-lg ${colors.glow} border-t-2 ${colors.border}`}>
      <div className="flex items-start justify-between mb-3">
        <div className={`p-2 rounded-lg ${colors.bg}`}>
          <span className="text-xl">{icon}</span>
        </div>
        {trend && (
          <span className={`text-xs font-medium px-2 py-1 rounded-full ${
            trend === 'up' ? 'bg-green-500/20 text-green-400' : 
            trend === 'down' ? 'bg-red-500/20 text-red-400' : 
            'bg-white/10 text-white/60'
          }`}>
            {trend === 'up' ? '↑' : trend === 'down' ? '↓' : '→'} {trendValue}
          </span>
        )}
      </div>
      <div className={`text-3xl font-bold mb-1 ${colors.text}`}>{value}</div>
      <div className="text-sm text-white/50">{label}</div>
    </div>
  );
};

// Panel/Card Component
export const Panel = ({ children, className = '', title, subtitle, action, icon }) => {
  return (
    <div className={`glass rounded-xl ${className}`}>
      {(title || action) && (
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            {icon && <span className="text-xl">{icon}</span>}
            <div>
              {title && <div className="text-sm font-semibold text-white">{title}</div>}
              {subtitle && <div className="text-xs text-white/40">{subtitle}</div>}
            </div>
          </div>
          {action}
        </div>
      )}
      <div className="p-5">
        {children}
      </div>
    </div>
  );
};

// Alias Panel as Card for compatibility
export const Card = Panel;

// ScoreBar Component
export const ScoreBar = ({ value, max = 100, showLabel = true }) => {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));
  
  return (
    <div className="w-full">
      {showLabel && (
        <div className="flex justify-between text-xs text-white/50 mb-1">
          <span>Progress</span>
          <span>{Math.round(percentage)}%</span>
        </div>
      )}
      <div className="w-full bg-white/10 rounded-full h-2">
        <div 
          className="h-full bg-gradient-to-r from-[#00C2FF] to-[#00FFE5] rounded-full transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

// Badge Component
export const Badge = ({ children, color = 'default', size = 'md' }) => {
  const colorClasses = {
    default: 'bg-white/10 text-white/70 border-white/20',
    success: 'bg-green-500/20 text-green-400 border-green-500/30',
    warning: 'bg-[#FF9933]/20 text-[#FF9933] border-[#FF9933]/30',
    danger: 'bg-red-500/20 text-red-400 border-red-500/30',
    info: 'bg-[#00C2FF]/20 text-[#00C2FF] border-[#00C2FF]/30',
    purple: 'bg-[#A855F7]/20 text-[#A855F7] border-[#A855F7]/30',
  };
  
  const sizeClasses = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-3 py-1 text-xs',
    lg: 'px-4 py-1.5 text-sm',
  };

  return (
    <span className={`inline-flex items-center font-medium rounded-full border ${colorClasses[color]} ${sizeClasses[size]}`}>
      {children}
    </span>
  );
};

// Alert Component
export const Alert = ({ children, variant = 'info' }) => {
  const variantClasses = {
    info: 'bg-[#00C2FF]/10 border-[#00C2FF]/30 text-[#00C2FF]',
    success: 'bg-green-500/10 border-green-500/30 text-green-400',
    warning: 'bg-[#FF9933]/10 border-[#FF9933]/30 text-[#FF9933]',
    danger: 'bg-red-500/10 border-red-500/30 text-red-400',
  };

  return (
    <div className={`p-4 rounded-lg border ${variantClasses[variant]}`}>
      {children}
    </div>
  );
};

// Button Component
export const Button = ({ children, variant = 'primary', onClick, className = '', type = 'button' }) => {
  const variantClasses = {
    primary: 'bg-gradient-to-r from-[#00C2FF] to-[#00FFE5] text-[#0B0F19] hover:shadow-lg hover:shadow-[#00C2FF]/30',
    secondary: 'bg-white/10 text-white border border-white/20 hover:bg-white/20',
    danger: 'bg-red-500/20 text-red-400 hover:bg-red-500/30',
    saffron: 'bg-gradient-to-r from-[#FF9933] to-[#FF7F00] text-white hover:shadow-lg hover:shadow-[#FF9933]/30',
    out: 'bg-transparent text-white border border-white/20 hover:bg-white/10',
  };

  return (
    <button 
      type={type}
      onClick={onClick}
      className={`px-4 py-2 rounded-lg font-medium transition-all ${variantClasses[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

// Progress Bar Component
export const ProgressBar = ({ value, max = 100, color = 'blue', showLabel = true, size = 'md' }) => {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));
  
  const colorClasses = {
    blue: 'bg-gradient-to-r from-[#00C2FF] to-[#00FFE5]',
    green: 'bg-gradient-to-r from-[#00FF88] to-[#00CC6A]',
    red: 'bg-gradient-to-r from-red-500 to-red-400',
    orange: 'bg-gradient-to-r from-[#FF9933] to-[#FF7F00]',
    purple: 'bg-gradient-to-r from-[#A855F7] to-[#7C3AED]',
  };
  
  const sizeClasses = {
    sm: 'h-1',
    md: 'h-2',
    lg: 'h-3',
  };

  return (
    <div className="w-full">
      {showLabel && (
        <div className="flex justify-between text-xs text-white/50 mb-1">
          <span>Progress</span>
          <span>{Math.round(percentage)}%</span>
        </div>
      )}
      <div className={`w-full bg-white/10 rounded-full ${sizeClasses[size]}`}>
        <div 
          className={`h-full rounded-full ${colorClasses[color]} transition-all duration-500`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

// Score Badge Component  
export const ScoreBadge = ({ score }) => {
  const getScoreColor = (score) => {
    if (score >= 90) return { bg: 'bg-green-500/20', text: 'text-green-400', label: 'Outstanding' };
    if (score >= 80) return { bg: 'bg-[#00C2FF]/20', text: 'text-[#00C2FF]', label: 'Good' };
    if (score >= 70) return { bg: 'bg-[#FF9933]/20', text: 'text-[#FF9933]', label: 'Average' };
    return { bg: 'bg-red-500/20', text: 'text-red-400', label: 'Needs Improvement' };
  };
  
  const scoreStyle = getScoreColor(score);
  
  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold rounded-lg ${scoreStyle.bg} ${scoreStyle.text}`}>
      <span>{score}</span>
      <span className="text-white/40">|</span>
      <span>{scoreStyle.label}</span>
    </span>
  );
};

export { StatCard, Card, Badge, ProgressBar, ScoreBadge, Panel, ScoreBar, Alert, Button };
export default { StatCard, Card, Badge, ProgressBar, ScoreBadge, Panel, ScoreBar, Alert, Button };
