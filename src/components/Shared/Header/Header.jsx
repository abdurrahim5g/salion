import "./Header.css";
import { Link } from "react-router-dom";
import logo from "./logo-light.png";
import useAuthContex from "../../../hooks/useAuthContex";

const Header = () => {
  const { user } = useAuthContex();
  return (
    <header className="header-area pt-10 pb-4 absolute top-0 z-10 w-full">
      <div className="container">
        <div className="row">
          <div className="flex items-center justify-between">
            <div className="logo-area">
              <Link to="/">
                <img src={logo} alt="Logo" />
              </Link>
            </div>

            <div className="menu-area">
              <ul className="flex gap-2 text-white">
                {user?.uid ? (
                  <li>
                    <Link
                      to="/dashboard/"
                      className="py-3 rounded px-6 btn-primary"
                    >
                      My Account
                    </Link>
                  </li>
                ) : (
                  <>
                    <li>
                      <Link to="/login" className="py-3 rounded px-6">
                        Login
                      </Link>
                    </li>
                    <li>
                      <Link to="/signup" className="py-3 rounded px-6">
                        Sign Up
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
