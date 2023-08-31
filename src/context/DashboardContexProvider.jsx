/* eslint-disable react/prop-types */

import { useState } from "react";
import { createContext } from "react";

export const DashboardContex = createContext();

const DashboardContexProvider = ({ children }) => {
  const [dashboardTitle, setDashboardTitle] = useState("Dashboard");

  return (
    <DashboardContex.Provider value={{ dashboardTitle, setDashboardTitle }}>
      {children}
    </DashboardContex.Provider>
  );
};

export default DashboardContexProvider;
