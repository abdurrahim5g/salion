/* eslint-disable react/prop-types */
import "./Title.css";

const Title = ({ children, className }) => {
  return (
    <h3
      className={`section-title text-2xl md:text-4xl font-semibold relative pb-4 mb-8 ${className}`}
    >
      {children}
    </h3>
  );
};

export default Title;
