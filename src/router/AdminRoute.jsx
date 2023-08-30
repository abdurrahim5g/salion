/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import useAuthContex from "../hooks/useAuthContex";
import axios from "axios";
import { Navigate } from "react-router-dom";
import Loading from "../components/Loading/Loading";

const AdminRoute = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  const { user } = useAuthContex();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/users?email=${user?.email}`)
      .then((res) => {
        const role = res.data[0].role;
        if (role === "admin") {
          setIsAdmin(true);
        } else {
          setIsAdmin(false);
        }
        setLoading(false);
      });
  }, [user]);

  if (loading) {
    return <Loading />;
  }

  if (!isAdmin) {
    return <Navigate to="/dashboard/" replace={true} />;
  }

  return children;
};
export default AdminRoute;
