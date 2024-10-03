function Button({ children, onClick, icon, type, disabled }) {
  const base = `   gap-8 flex items-center text-base`;

  const styles = {
    logout: base + ` w-full p-2 hover:bg-gray-50 rounded-sm`,
    primary: base + ` w-80 md:w-96 rounded-lg p-3 justify-center text-[#E7EBEA] bg-[#1C5237] disabled:cursor-not-allowed disabled:opacity-50`,
  };

  return (
    <button
      className={styles[type]}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {icon && <span className="text-red-500">{icon}</span>}
      {children}
    </button>
  );
}

export default Button;
