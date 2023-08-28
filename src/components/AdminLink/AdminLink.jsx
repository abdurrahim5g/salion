/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import * as fa from "react-icons/fa";
import "./AdminLink.css";

const AdminLink = ({ text, icon, to }) => {
  const Icon = fa[icon];
  const NavIcon = Icon || fa["FaAtlassian"];

  return (
    <NavLink
      to={to}
      className={`flex items-center gap-2 py-2 font-semibold admin-link`}
    >
      <NavIcon className="text-xl" />
      {text}
    </NavLink>
  );
};

export default AdminLink;
