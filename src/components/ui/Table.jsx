// Table component
const Table = ({ columns, data, onRowClick, className = '' }) => {
  return (
    <div className="overflow-x-auto">
      <table className={`w-full border-collapse text-[13px] ${className}`}>
        <thead>
          <tr>
            {columns.map((col, i) => (
              <th 
                key={i}
                className="bg-[#f5f5f0] px-3 py-2 text-left text-[11px] font-semibold text-[#444] border-b border-[#d0d0c8] border-t border-[#d0d0c8] whitespace-nowrap"
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr 
              key={rowIndex}
              className={`${onRowClick ? 'cursor-pointer hover:bg-[#fafaf7]' : ''}`}
              onClick={() => onRowClick?.(row)}
            >
              {columns.map((col, colIndex) => (
                <td 
                  key={colIndex}
                  className="px-3 py-2.5 border-b border-[#eaeae5]"
                >
                  {col.render ? col.render(row) : row[col.accessor]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Search Bar component
const SearchBar = ({ value, onChange, placeholder = 'Search...', className = '' }) => {
  return (
    <div className={`flex gap-2 mb-3.5 flex-wrap items-center ${className}`}>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="flex-1 min-w-[180px] px-3 py-2 border border-[#d0d0c8] font-inherit text-[13px] bg-white outline-none focus:border-[#4a5e3a]"
      />
    </div>
  );
};

// Select component
const Select = ({ value, onChange, options, placeholder, className = '' }) => {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={`px-3 py-2 border border-[#d0d0c8] font-inherit text-[13px] bg-white cursor-pointer outline-none focus:border-[#4a5e3a] ${className}`}
    >
      {placeholder && <option value="">{placeholder}</option>}
      {options.map((opt, i) => (
        <option key={i} value={typeof opt === 'object' ? opt.value : opt}>
          {typeof opt === 'object' ? opt.label : opt}
        </option>
      ))}
    </select>
  );
};

export { Table, SearchBar, Select };
export default { Table, SearchBar, Select };
