// eslint-disable-next-line no-unused-vars
import { useForm } from "react-hook-form";
import useDashboardContex from "../../../hooks/useDashboardContex";
// import style from "./MakeAdmin.module.css";

const MakeAdmin = () => {
  const { setDashboardTitle } = useDashboardContex();
  setDashboardTitle("Make Admin");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  /**
   *
   * Handle make admin
   */
  const handleMakeAdmin = (data) => {
    console.log(data);
  };

  return (
    <section className="make-admin-page">
      <div className="make-admin-container lg:w-1/2">
        <form
          onSubmit={handleSubmit(handleMakeAdmin)}
          className="make-admin-form"
        >
          <div className="single-input-item mb-5">
            <label htmlFor="email" className="leading-loose">
              User Email
            </label>
            <input
              {...register("email", { required: "Email is require" })}
              id="email"
              type="text"
              placeholder="Type here"
              className="input input-bordered input-md w-full "
            />
            <p className="text-red-500 text-sm">{errors?.email?.message}</p>
          </div>

          <div className="service-add-button">
            <button className="btn btn-primary text-white">Make Admin</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default MakeAdmin;
