const Button = ({ type, classname, children }) => {
  return (
    <button type={type || "button"} className={classname}>
      {children}
    </button>
  );
};

export default Button;
