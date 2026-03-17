// Form Input component
const Input = ({ label, value, onChange, type = 'text', placeholder, className = '', ...props }) => {
  return (
    <div className={`mb-3.5 ${className}`}>
      {label && <label className="block text-[11px] font-bold text-[#444] mb-1 uppercase tracking-[0.5px]">{label}</label>}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-3 py-2 border border-[#d0d0c8] font-inherit text-[13px] text-[#1a1a1a] bg-white outline-none transition-border duration-150 focus:border-[#4a5e3a]"
        {...props}
      />
    </div>
  );
};

// Select component
const Select = ({ label, value, onChange, options, placeholder, className = '', ...props }) => {
  return (
    <div className={`mb-3.5 ${className}`}>
      {label && <label className="block text-[11px] font-bold text-[#444] mb-1 uppercase tracking-[0.5px]">{label}</label>}
      <select
        value={value}
        onChange={onChange}
        className="w-full px-3 py-2 border border-[#d0d0c8] font-inherit text-[13px] text-[#1a1a1a] bg-white cursor-pointer outline-none transition-border duration-150 focus:border-[#4a5e3a]"
        {...props}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((opt, i) => (
          <option key={i} value={typeof opt === 'object' ? opt.value : opt}>
            {typeof opt === 'object' ? opt.label : opt}
          </option>
        ))}
      </select>
    </div>
  );
};

// Textarea component
const Textarea = ({ label, value, onChange, placeholder, rows = 4, className = '', ...props }) => {
  return (
    <div className={`mb-3.5 ${className}`}>
      {label && <label className="block text-[11px] font-bold text-[#444] mb-1 uppercase tracking-[0.5px]">{label}</label>}
      <textarea
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        className="w-full px-3 py-2 border border-[#d0d0c8] font-inherit text-[13px] text-[#1a1a1a] bg-white outline-none transition-border duration-150 focus:border-[#4a5e3a] resize-vertical"
        {...props}
      />
    </div>
  );
};

// Form Row component for 2 or 3 columns
const FormRow = ({ children, cols = 2 }) => {
  const gridClass = cols === 2 ? 'grid-cols-2' : cols === 3 ? 'grid-cols-3' : 'grid-cols-1';
  return (
    <div className={`grid ${gridClass} gap-3.5`}>
      {children}
    </div>
  );
};

export { Input, Select, Textarea, FormRow };
export default { Input, Select, Textarea, FormRow };
