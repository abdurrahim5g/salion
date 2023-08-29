import { Link, Outlet } from "react-router-dom";
import "./Dashboard.css";
import logo from "./logo.png";
import AdminNavbar from "../../dashboard/admin/AdminNavbar/AdminNavbar";
import useAuthContex from "../../hooks/useAuthContex";

const Dashboard = () => {
  const { user } = useAuthContex();

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col bg-[#F4F7FC]">
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open
        </label>

        <div className="page-header flex items-center justify-between p-5 font-semibold text-2xl w-full self-auto shadow-md bg-white">
          <div className="page-name">Oreder List</div>
          <div className="user-name">{user?.displayName || "UserName"}</div>
        </div>

        <main className="main-class p-6 ">
          <div className="bg-white rounded-lg shadow-md p-6">
            <Outlet></Outlet>
          </div>
        </main>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <div className="menu p-4 w-60 h-full bg-white shadow-md text-base-content">
          <div className="site-logo">
            <Link to="/" className="w-40 inline-block">
              <img src={logo} alt="Logo" className="" />
            </Link>
          </div>

          <div className="dashboard-navbar mt-10">
            <AdminNavbar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
