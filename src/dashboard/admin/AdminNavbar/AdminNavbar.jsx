import AdminLink from "../../../components/AdminLink/AdminLink";
import style from "./AdminNavbar.module.css";

const AdminNavbar = () => {
  return (
    <div className={style.adminNavbar}>
      <AdminLink to="/dashboard/" icon="" className="hi" text="Dashboard" />
      <AdminLink to="orders" icon="FaThList" text="Order List" />
      <AdminLink to="add-service" icon="FaPlus" text="Add Service" />
    </div>
  );
};

export default AdminNavbar;
