import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Error404 from "../pages/Error404/Error404";
import Frontend from "../layouts/Frontend/Frontend";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import Dashboard from "../layouts/Dashboard/Dashboard";
import Orders from "../dashboard/admin/Orders/Orders";
import AddService from "../dashboard/admin/AddService/AddService";
import MakeAdmin from "../dashboard/admin/MakeAdmin/MakeAdmin";
import ManageServices from "../dashboard/admin/ManageServices/ManageServices";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Frontend />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/",
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      { path: "orders", element: <Orders /> },
      { path: "add-service", element: <AddService /> },
      { path: "make-admin", element: <MakeAdmin /> },
      { path: "manage-services", element: <ManageServices /> },
    ],
  },
  {
    path: "*",
    element: <Error404 />,
  },
]);

export default router;
