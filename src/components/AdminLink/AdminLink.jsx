/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import * as fa from "react-icons/fa";
import "./AdminLink.css";

const AdminLink = ({ children, icon, to }) => {
  const Icon = fa[icon];
  const NavIcon = Icon || fa["FaAtlassian"];

  return (
    <NavLink
      to={to}
      className={`flex items-center gap-2 py-2 font-semibold admin-link`}
    >
      <NavIcon className="text-xl" />
      {children}
    </NavLink>
  );
};

export default AdminLink;
