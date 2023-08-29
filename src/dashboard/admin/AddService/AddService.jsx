import { useForm } from "react-hook-form";
import style from "./AddService.module.css";

const AddService = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  /**
   * Handle Add service
   */
  const handleAddService = (data) => {
    console.log(data);
  };

  return (
    <section className={style.addService}>
      <div className="add-service-form lg:w-1/2">
        <form onSubmit={handleSubmit(handleAddService)}>
          <div className="single-input-item mb-5">
            <label htmlFor="title" className="leading-loose">
              Service Title
            </label>
            <input
              {...register("title", { required: "Title is require" })}
              id="title"
              type="text"
              placeholder="Type here"
              className="input input-bordered input-md w-full "
            />
            <p className="text-red-500 text-sm">{errors?.title?.message}</p>
          </div>
          <div className="single-input-item mb-5">
            <label htmlFor="price" className="leading-loose">
              Price
            </label>
            <input
              {...register("price", { required: "Prices is require" })}
              id="price"
              type="text"
              placeholder="Type here"
              className="input input-bordered input-md w-full "
            />
            <p className="text-red-500 text-sm">{errors?.price?.message}</p>
          </div>
          <div className="single-input-item mb-5">
            <label htmlFor="description" className="leading-loose">
              Description
            </label>
            <textarea
              {...register("description", {
                required: "Description is requires",
              })}
              className="textarea w-full input-bordered"
              id="description"
              placeholder="Service descriptions"
            ></textarea>
            <p className="text-red-500 text-sm">{errors?.title?.message}</p>
          </div>
          <div className="single-input-item mb-5">
            <label htmlFor="image" className="leading-loose">
              Image
            </label>

            <input
              {...register("image", { required: "image is require" })}
              type="file"
              id="image"
              className="file-input file-input-bordered file-input-md w-full "
            />
            <p className="text-red-500 text-sm">{errors?.image?.message}</p>
          </div>

          <div className="service-add-button">
            <button className="btn btn-primary text-white">Add Service</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddService;
