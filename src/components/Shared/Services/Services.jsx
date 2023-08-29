import { useQuery } from "react-query";
import axios from "axios";
import Button from "../../Button/Button";
import style from "./Services.module.css";

const Services = () => {
  const { data: services = [], isLoading } = useQuery("services", async () => {
    return await axios.get(`http://localhost:5000/services`).then((res) => res);
  });

  if (isLoading) {
    return "Loading...";
  } else {
    console.log(services.data);
  }

  return (
    <section className="service-section py-20 md:py-28 bg-slate-50">
      <div className="container">
        <div className="row">
          <div className="grid grid-cols-1">
            <div className="service-content">
              <h3 className="section-title text-2xl md:text-4xl font-semibold relative pb-4 mb-8 undefined">
                Services
              </h3>
              <p>Out top of the salion services</p>
            </div>
          </div>
        </div>

        <div className="row mt-10">
          <div className="service-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services?.data?.map((service) => (
              <div
                className={`${style.singleService} relative overflow-hidden z-10`}
                key={service._id}
              >
                <div className="service-image">
                  <img
                    src={service.imageURL}
                    alt={service.title}
                    className="aspect-square w-full object-cover shadow rounded-md"
                  />
                </div>
                <div
                  className={`${style.serviceText} p-5 absolute text-white transition `}
                >
                  <h3 className="text-2xl">
                    {service.title}{" "}
                    <strong className="float-right">{service.price}</strong>
                  </h3>
                  <p className="my-3">{service.description}</p>
                  <Button>Book Now</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
