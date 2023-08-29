import AdminLink from "../../../components/AdminLink/AdminLink";
import style from "./AdminNavbar.module.css";

const AdminNavbar = () => {
  return (
    <div className={style.adminNavbar}>
      <AdminLink to="/dashboard/" icon="" className="hi" text="Dashboard" />
      <AdminLink to="orders" icon="FaThList" text="Order List" />
      <AdminLink to="add-service" icon="FaPlus" text="Add Service" />
      <AdminLink to="make-admin" icon="FaUserPlus" text="Make Admin" />
      <AdminLink to="manage-services" icon="FaBuffer" text="Manage Services" />
      {/* customer view */}
      <AdminLink to="booking-list" icon="FaListUl" text="Booking List" />
    </div>
  );
};

export default AdminNavbar;
