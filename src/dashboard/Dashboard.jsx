/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import useDashboardContex from "../hooks/useDashboardContex";
import MyAccount from "./customer/MyAccount/MyAccount";

const Dashboard = () => {
  const { setDashboardTitle } = useDashboardContex();

  useEffect(() => {
    setDashboardTitle("Dashboard");
  }, []);

  return (
    <>
      <MyAccount />
    </>
  );
};

export default Dashboard;
