function Button({ children }) {
  return (
    <button className="font-button border border-black px-5 py-2 uppercase">
      {children}
    </button>
  );
}

export default Button;
