/* eslint-disable react-hooks/exhaustive-deps */
import { FaEdit, FaTrash } from "react-icons/fa";
import useDashboardContex from "../../../hooks/useDashboardContex";
import { useEffect } from "react";

const ManageServices = () => {
  const { setDashboardTitle } = useDashboardContex();

  useEffect(() => {
    setDashboardTitle("Manage Service");
  }, []);

  return (
    <section className="manage-services-page">
      <div className="manage-services-container">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="text-base text-black">
                <th>Image</th>
                <th>Title</th>
                <th>Price</th>
                <th>Description</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="">
                <td>
                  <img
                    className="w-20 rounded shadow-md"
                    src="https://s3.ap-south-1.amazonaws.com/cdn-shebaxyz/images/categories_images/thumbs/1644916789_salonservicesformen.jpg"
                    alt="Service image"
                  />
                </td>
                <td>Service title</td>
                <td>$99</td>
                <td>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Laboriosam, itaque!
                </td>
                <td>
                  <div className="text-2xl flex gap-3 ">
                    <button className="text-warning">
                      <FaEdit />
                    </button>
                    <button className="text-red-500">
                      <FaTrash />
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
            {/* foot */}
          </table>
        </div>
      </div>
    </section>
  );
};

export default ManageServices;
