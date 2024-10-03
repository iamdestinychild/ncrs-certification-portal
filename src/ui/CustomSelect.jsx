function Select({ options, value, onChange,  ...props }) {

    return (
      <select
        value={value}
        onChange={onChange}
        className={`border cursor-pointer focus:outline-none p-2 text-xs w-40 sm:w-auto  rounded-sm bg-white text-black shadow-sm`}
        {...props}
      >
        {options.map((option) => (
          <option value={option.value} className="cursor-pointer" key={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    );
  }
  
  export default Select;
  