const Button = ({ type, onClick, classname, children }) => {
  return (
    <button type={type || "button"} className={classname} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
