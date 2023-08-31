/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import style from "./Orders.module.css";
import useDashboardContex from "../../../hooks/useDashboardContex";

const Orders = () => {
  const [orders, setOrders] = useState();

  const { setDashboardTitle } = useDashboardContex();

  const demoOrders = [
    {
      _id: 1,
      name: "Abdur Rahim",
      email: "email@email.com",
      service: "Skin Care ",
      paymentMethod: "Credit Card",
      status: "pending",
    },
    {
      _id: 2,
      name: "Abdur Rahim",
      email: "email@email.com",
      service: "Skin Care ",
      paymentMethod: "Credit Card",
      status: "pending",
    },
    {
      _id: 3,
      name: "Abdur Rahim",
      email: "email@email.com",
      service: "Skin Care ",
      paymentMethod: "Credit Card",
      status: "done",
    },
    {
      _id: 4,
      name: "Abdur Rahim",
      email: "email@email.com",
      service: "Skin Care ",
      paymentMethod: "Credit Card",
      status: "running",
    },
    {
      _id: 5,
      name: "Abdur Rahim",
      email: "email@email.com",
      service: "Skin Care ",
      paymentMethod: "Credit Card",
      status: "pending",
    },
  ];

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    setOrders(demoOrders);
    setDashboardTitle("Orders");
  }, []);

  const statusColor = (status) => {
    let currentStatus;
    switch (status) {
      case "pending":
        currentStatus = "text-red-500";
        break;
      case "running":
        currentStatus = "text-yellow-500";
        break;
      case "done":
        currentStatus = "text-green-500";
        break;
      default:
        currentStatus = "text-black-500";
    }
    return currentStatus;
  };

  return (
    <section className={`${style.orders} `}>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr className="text-base text-black">
              <th>Name</th>
              <th>Eamil</th>
              <th>Service</th>
              <th>Pay With</th>
              <th className="text-right">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order) => (
              <tr key={order._id}>
                <td>{order.name}</td>
                <td>{order.email}</td>
                <td>{order.service}</td>
                <td>{order.paymentMethod}</td>
                <td
                  className={`${statusColor(
                    order.status
                  )} capitalize text-right`}
                >
                  {order.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Orders;
