// Table component with Dark Theme

export const Table = ({ headers, data, onRowClick, className = '' }) => {
  return (
    <div className="overflow-x-auto">
      <table className={`w-full border-collapse text-sm ${className}`}>
        <thead>
          <tr>
            {headers.map((header, i) => (
              <th 
                key={i}
                className="px-4 py-3 text-left text-xs font-semibold text-white/60 uppercase tracking-wider border-b border-white/10 bg-white/5"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr 
              key={rowIndex}
              onClick={() => onRowClick && onRowClick(row)}
              className={`border-b border-white/5 hover:bg-white/5 transition-colors ${onRowClick ? 'cursor-pointer' : ''}`}
            >
              {row.map((cell, cellIndex) => (
                <td 
                  key={cellIndex}
                  className="px-4 py-3 text-white/80"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// SearchBar Component
export const SearchBar = ({ value, onChange, placeholder, className = '' }) => {
  return (
    <div className={`flex gap-2 ${className}`}>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="flex-1 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-[#00C2FF]/50 transition-colors"
      />
    </div>
  );
};

// TableSelect Component
export const TableSelect = ({ value, onChange, options, className = '' }) => {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={`px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#00C2FF]/50 transition-colors ${className}`}
    >
      {options.map((opt, i) => (
        <option key={i} value={opt.value} className="bg-[#0B0F19]">
          {opt.label}
        </option>
      ))}
    </select>
  );
};

export default { Table, SearchBar, TableSelect };
