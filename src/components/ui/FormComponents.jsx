// Form Components with Dark Theme

export const Input = ({ type = 'text', placeholder, value, onChange, className = '', label, error, required }) => {
  return (
    <div className={className}>
      {label && (
        <label className="block text-xs font-medium text-white/60 uppercase tracking-wider mb-2">
          {label} {required && <span className="text-red-400">*</span>}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full px-4 py-3 bg-white/5 border ${
          error ? 'border-red-500/50' : 'border-white/10'
        } rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-[#00C2FF]/50 transition-colors`}
      />
      {error && <div className="mt-1 text-xs text-red-400">{error}</div>}
    </div>
  );
};

export const Select = ({ value, onChange, options = [], placeholder, className = '', label, required }) => {
  return (
    <div className={className}>
      {label && (
        <label className="block text-xs font-medium text-white/60 uppercase tracking-wider mb-2">
          {label} {required && <span className="text-red-400">*</span>}
        </label>
      )}
      <select
        value={value}
        onChange={onChange}
        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#00C2FF]/50 transition-colors"
      >
        {placeholder && (
          <option value="" className="bg-[#0B0F19]">
            {placeholder}
          </option>
        )}
        {options.map((opt, i) => (
          <option key={i} value={opt.value || opt} className="bg-[#0B0F19]">
            {opt.label || opt}
          </option>
        ))}
      </select>
    </div>
  );
};

export const Textarea = ({ placeholder, value, onChange, rows = 4, className = '', label }) => {
  return (
    <div className={className}>
      {label && (
        <label className="block text-xs font-medium text-white/60 uppercase tracking-wider mb-2">
          {label}
        </label>
      )}
      <textarea
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        rows={rows}
        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-[#00C2FF]/50 transition-colors resize-none"
      />
    </div>
  );
};

export const FormRow = ({ children, className = '' }) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 ${className}`}>
      {children}
    </div>
  );
};

export default { Input, Select, Textarea, FormRow };
