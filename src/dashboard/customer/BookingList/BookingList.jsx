/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import useDashboardContex from "../../../hooks/useDashboardContex";

const BookingList = () => {
  const { setDashboardTitle } = useDashboardContex();

  useEffect(() => {
    setDashboardTitle("Booking List");
  }, []);

  return (
    <section className="booking-list-page">
      <div className="booking-list-container">
        <div className="booking-list-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="single-booking-list  rounded-lg hover:shadow-lg shadow transition p-5">
            <div className="booking-header flex justify-between items-center">
              <img
                src="https://s3.ap-south-1.amazonaws.com/cdn-shebaxyz/images/categories_images/thumbs/1644916789_salonservicesformen.jpg"
                alt="service image"
                className="w-20 rounded-md"
              />
              <span className="badge p-4 rounded bg-[#FFE3E3] text-red-700">
                Pending
              </span>
            </div>
            <div className="booking-text">
              <h3 className="text-2xl mt-7 mb-3">AntiA e Face Treatment</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
                impedit nostrum minus, vero qui.
              </p>
            </div>
          </div>
          {/* single-booking */}
          <div className="single-booking-list  rounded-lg hover:shadow-lg shadow transition p-5">
            <div className="booking-header flex justify-between items-center">
              <img
                src="https://s3.ap-south-1.amazonaws.com/cdn-shebaxyz/images/categories_images/thumbs/1644916789_salonservicesformen.jpg"
                alt="service image"
                className="w-20 rounded-md"
              />
              <span className="badge p-4 rounded bg-[#C6FFE0] text-green-700">
                Done
              </span>
            </div>
            <div className="booking-text">
              <h3 className="text-2xl mt-7 mb-3">AntiA e Face Treatment</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
                impedit nostrum minus, vero qui.
              </p>
            </div>
          </div>
          {/* single-booking */}
        </div>
      </div>
    </section>
  );
};

export default BookingList;
