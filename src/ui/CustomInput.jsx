function CustomInput({
  label,
  placeholder,
  error = false,
  errorMessage,
  type,
  name,
  value,
  onBlur,
  onChange,
  required,
}) {
  return (
    <div className="flex gap-2 items-center flex-col w-full">
      {label && (
        <label
          className="w-[26rem] font-semibold text-base capitalize"
          htmlFor={name}
        >
          {label}
        </label>
      )}
      {error && (
        <p className="text-red-500 w-[26rem]   text-xs">{errorMessage}</p>
      )}
      <input
        className="focus:outline-none w-[26rem] p-3 text-sm rounded-sm bg-gray-50 focus:border-b-2 focus:border-gray-600"
        name={name}
        type={type}
        required={required}
        id={name}
        value={value}
        onBlur={onBlur}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}

export default CustomInput;
