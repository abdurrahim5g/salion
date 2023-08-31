import { useContext } from "react";
import { DashboardContex } from "../context/DashboardContexProvider";

const useDashboardContex = () => useContext(DashboardContex);

export default useDashboardContex;
