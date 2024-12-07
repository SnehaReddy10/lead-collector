function Dropdown({ label, value, options, onChange }: any) {
  return (
    <div className="m-1">
      <label
        htmlFor="userCategory"
        className="block text-gray-900 font-semibold mb-1"
      >
        {label}
      </label>
      <select
        id="userCategory"
        name="userCategory"
        value={value}
        onChange={onChange}
        className="w-full border border-gray-400 px-2 py-1 rounded-sm focus:outline-none focus:border-black"
      >
        {options.map((option: any) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Dropdown;
