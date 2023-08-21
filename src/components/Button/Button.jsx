/* eslint-disable react/prop-types */
import "./Button.css";

const Button = ({ children, onClick, className = "", type = "fill" }) => {
  return (
    <button onClick={onClick} className={`salion-btn ${type} ${className}`}>
      {children}
    </button>
  );
};

export default Button;
