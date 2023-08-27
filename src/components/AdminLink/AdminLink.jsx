/* eslint-disable react/prop-types */
import { NavLink, useLocation } from "react-router-dom";
import * as fa from "react-icons/fa";
import style from "./AdminLink.module.css";

const AdminLink = ({ children, icon, to }) => {
  const Icon = fa[icon];
  const NavIcon = Icon || fa["FaAtlassian"];

  // Check the link is active or not
  const location = useLocation();
  const isActive = () => {
    const pathname = location.pathname;
    console.log(to, pathname);
    return to === pathname; // return true or false
  };

  return (
    <NavLink
      to={to}
      className={`flex items-center gap-2 py-2 font-semibold ${
        isActive() && style.activeNav
      }`}
    >
      <NavIcon className="text-xl" />
      {children}
    </NavLink>
  );
};

export default AdminLink;
