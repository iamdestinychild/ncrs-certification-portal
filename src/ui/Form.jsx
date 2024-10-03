function Form({ children, onSubmit }) {
  return (
    <form
      onSubmit={onSubmit}
      className="w-full items-center justify-center flex flex-col gap-2"
    >
      {children}
    </form>
  );
}

export default Form;
