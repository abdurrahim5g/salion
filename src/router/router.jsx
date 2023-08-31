import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Error404 from "../pages/Error404/Error404";
import Frontend from "../layouts/Frontend/Frontend";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import Orders from "../dashboard/admin/Orders/Orders";
import AddService from "../dashboard/admin/AddService/AddService";
import MakeAdmin from "../dashboard/admin/MakeAdmin/MakeAdmin";
import ManageServices from "../dashboard/admin/ManageServices/ManageServices";
import BookingList from "../dashboard/customer/BookingList/BookingList";
import Reviews from "../dashboard/customer/Reviews/Reviews";
import DashboardRoute from "./DashboardRoute";
import AdminRoute from "./AdminRoute";
import DashboardLayout from "../layouts/DashboardLayout/DashboardLayout";
import Dashboard from "../dashboard/Dashboard";
import DashboardContexProvider from "../context/DashboardContexProvider";

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
        <DashboardContexProvider>
          <DashboardLayout />
        </DashboardContexProvider>
      </DashboardRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: (
          <AdminRoute>
            <Dashboard />
          </AdminRoute>
        ),
      },
      {
        path: "orders",
        element: (
          <AdminRoute>
            <Orders />
          </AdminRoute>
        ),
      },
      {
        path: "add-service",
        element: (
          <AdminRoute>
            <AddService />
          </AdminRoute>
        ),
      },
      {
        path: "make-admin",
        element: (
          <AdminRoute>
            <MakeAdmin />
          </AdminRoute>
        ),
      },
      {
        path: "manage-services",
        element: (
          <AdminRoute>
            <ManageServices />
          </AdminRoute>
        ),
      },
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
