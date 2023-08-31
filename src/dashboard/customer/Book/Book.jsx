import { useForm } from "react-hook-form";
import useAuthContex from "../../../hooks/useAuthContex";
import { useQuery } from "react-query";
import axios from "axios";
import Loading from "../../../components/Loading/Loading";

const Book = () => {
  const { user } = useAuthContex();

  /**
   *
   * Load services data
   * ========================
   */
  const { data, isLoading, isError } = useQuery("services", async () => {
    return await axios("http://localhost:5000/services").then(
      (res) => res.data
    );
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  /**
   *
   * Handle book service
   * ========================
   */
  const handleBookService = (data) => {
    console.log(data);
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section className={""}>
      <div className="add-service-form lg:w-1/2">
        <form onSubmit={handleSubmit(handleBookService)}>
          <div className="single-input-item mb-5">
            <label htmlFor="name" className="leading-loose">
              Name
            </label>
            <input
              id="name"
              type="text"
              disabled
              defaultValue={user?.displayName}
              className="input input-bordered input-md w-full "
            />
          </div>

          <div className="single-input-item mb-5">
            <label htmlFor="email" className="leading-loose">
              Email
            </label>
            <input
              id="email"
              type="email"
              disabled
              defaultValue={user?.email}
              className="input input-bordered input-md w-full "
            />
          </div>

          <div className="single-input-item mb-5">
            <label htmlFor="service" className="leading-loose">
              Selece Service
            </label>
            <select
              className="select select-bordered w-full"
              id="service"
              {...register("service", { required: true })}
              defaultValue={0}
            >
              <option disabled className="opacity-50" value={0}>
                Select service
              </option>

              {!isError &&
                data?.map((service) => (
                  <option key={service._id} value={service._id}>
                    {service.title}
                  </option>
                ))}
            </select>
            <p className="text-red-500 text-sm capitalize">
              {errors?.service?.message}
            </p>
          </div>

          <div className="service-add-button">
            <button className="btn btn-primary text-white">Add Service</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Book;
