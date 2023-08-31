/* eslint-disable react-hooks/exhaustive-deps */
import { useForm } from "react-hook-form";
import style from "./AddService.module.css";
import axios from "axios";
import { toast } from "react-toastify";
import useDashboardContex from "../../../hooks/useDashboardContex";
import { useEffect } from "react";

const AddService = () => {
  const { setDashboardTitle } = useDashboardContex();

  useEffect(() => {
    setDashboardTitle("Add Service");
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  /**
   * Handle Add service
   */
  const handleAddService = (data) => {
    const { title, price, description, image } = data;

    let imageData = image[0];
    const formData = new FormData();
    formData.append("image", imageData);

    axios
      .post(
        `https://api.imgbb.com/1/upload?key=${
          import.meta.env.VITE_Imagebb_API
        }`,
        formData
      )
      .then((res) => {
        const data = res.data;
        if (data.success) {
          const imageURL = data.data.url;
          const serviceData = { title, price, description, imageURL };
          // post request for service
          axios
            .post("http://localhost:5000/services", serviceData)
            .then((res) => {
              const data = res.data;
              if (data.acknowledged && data.insertedId) {
                toast.success("Service added successfuly!");
                reset();
              } else {
                toast.warning("Something is wrong please try again");
              }
            });
        } else {
          toast.error("Please change the image and then try again");
        }
      });
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
              accept="image/x-png,image/jpeg"
              className="file-input file-input-bordered file-input-md w-full"
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
