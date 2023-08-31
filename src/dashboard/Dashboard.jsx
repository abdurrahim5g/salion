import useDashboardContex from "../hooks/useDashboardContex";
import MyAccount from "./customer/MyAccount/MyAccount";

const Dashboard = () => {
  const { setDashboardTitle } = useDashboardContex();
  setDashboardTitle("Dashboard");

  return (
    <>
      <MyAccount />
    </>
  );
};

export default Dashboard;
