import { Link } from "react-router-dom";
import "./Error404.css";

const Error404 = () => {
  return (
    <div className="error-page p-2">
      <div className="error-content text-center">
        <h2 className="text-6xl font-bold text-primary md:text-8xl lg:text-9xl">
          Opps!
        </h2>
        <h4 className="my-6 text-2xl font-semibold">404 - Page not found.</h4>
        <p className="mb-8">
          The page you are looking for is currently missing. Please visit{" "}
          <Link to="/" className="text-primary">
            Home page
          </Link>
        </p>
        <Link to="/">
          <button className="btn btn-primary text-base-100">
            Go to Homepage
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Error404;
