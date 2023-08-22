import { Link } from "react-router-dom";
import "./Footer.css";
import lightLogo from "./logo-light.png";

const Footer = () => {
  return (
    <footer className="footer-section py-10">
      <div className="container">
        <div className="row">
          <div className="text-center">
            <Link to="/">
              <img src={lightLogo} alt="Light logo" className="mx-auto" />
            </Link>
            <p className="text-white mt-5">
              Copyright © 2021{" "}
              <Link to={"/"} className="text-primary">
                Salion
              </Link>{" "}
              by RadiusTheme. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
