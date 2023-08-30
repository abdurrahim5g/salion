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
import BookingList from "../dashboard/customer/BookingList/BookingList";
import Reviews from "../dashboard/customer/Reviews/Reviews";
import DashboardRoute from "./DashboardRoute";

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
    element: (
      <DashboardRoute>
        <Dashboard />
      </DashboardRoute>
    ),
    children: [
      { path: "orders", element: <Orders /> },
      { path: "add-service", element: <AddService /> },
      { path: "make-admin", element: <MakeAdmin /> },
      { path: "manage-services", element: <ManageServices /> },
      { path: "booking-list", element: <BookingList /> },
      { path: "reviews", element: <Reviews /> },
    ],
  },
  {
    path: "*",
    element: <Error404 />,
  },
]);

export default router;
