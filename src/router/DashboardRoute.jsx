/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useAuthContex from "../hooks/useAuthContex";
import Loading from "../components/Loading/Loading";

const DashboardRoute = ({ children }) => {
  const { user, loading } = useAuthContex();
  const location = useLocation();

  if (loading) {
    console.log(loading);
    return <Loading />;
  }

  if (!user) {
    return <Navigate to={"/login"} replace={true} state={{ from: location }} />;
  }

  return children;
};

export default DashboardRoute;
