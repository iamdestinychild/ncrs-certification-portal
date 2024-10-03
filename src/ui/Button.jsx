function Button({ children, onClick, icon, type, disabled }) {
  const base = `   flex items-center text-base`;

  const styles = {
    logout: base + ` text-red-500 gap-8 w-full p-2 hover:bg-gray-50 rounded-sm`,
    "accent-black": base + ` gap-2 justify-center p-2 disabled:not-allowed cursor-pointer disabled:opacity-50 rounded-md  w-24 bg-black text-white`,
    "accent-red": base + ` gap-2 justify-center p-2 disabled:not-allowed cursor-pointer disabled:opacity-50 rounded-md max-w-26 bg-[#FFF0F0] text-black`,
    primary: base + ` w-80 md:w-96 rounded-lg p-3 justify-center text-[#E7EBEA] bg-[#1C5237] disabled:cursor-not-allowed disabled:opacity-50`,
  };

  return (
    <button
      className={styles[type]}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {icon && <span>{icon}</span>}
      {children}
    </button>
  );
}

export default Button;
