/* eslint-disable react/prop-types */
import "./Title.css";

const Title = ({ children }) => {
  return (
    <h3 className="section-title text-2xl md:text-4xl font-semibold relative pb-4 mb-8">
      {children}
    </h3>
  );
};

export default Title;
