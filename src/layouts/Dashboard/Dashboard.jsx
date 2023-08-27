import { Link } from "react-router-dom";
import "./Dashboard.css";
import logo from "./logo.png";
import AdminNavbar from "../../dashboard/admin/AdminNavbar/AdminNavbar";

const Dashboard = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <div className="menu p-4 w-60 h-full bg-blue-50 text-base-content">
          <div className="site-logo">
            <Link to="/" className="w-40 inline-block">
              <img src={logo} alt="Logo" className="" />
            </Link>
          </div>

          <div className="dashboard-navbar  mt-10">
            <AdminNavbar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
