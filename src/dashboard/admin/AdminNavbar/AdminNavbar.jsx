import AdminLink from "../../../components/AdminLink/AdminLink";
import style from "./AdminNavbar.module.css";

const AdminNavbar = () => {
  return (
    <div className={style.adminNavbar}>
      <AdminLink to="/dashboard/" icon="" className="hi">
        Dashboard
      </AdminLink>
      <AdminLink to="/orders" icon="FaThList">
        Orders
      </AdminLink>
    </div>
  );
};

export default AdminNavbar;
