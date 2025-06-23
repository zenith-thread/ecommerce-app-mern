const Button = ({ children }) => {
  return (
    <button className="w-[10rem] min-w-[10rem] bg-black text-white font-medium text-lg px-4 py-2 rounded cursor-pointer">
      {children}
    </button>
  );
};

export default Button;
