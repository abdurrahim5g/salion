import Button from "../../../components/Button/Button";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-section ">
      <div className="hero-container">
        <div className="container">
          <div className="hero-contents text-center md:text-left w-full md:w-3/4 lg:w-3/4">
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold text-white ">
              COLLECTION <br />
              HAIRCUT BEARD
            </h1>
            <p className="text-white max-w-3xl my-7 text-xl lg:text-2xl">
              There are many variations passages of Lorem Ipsum available but
              the dumm suffered which do not look even slightly believable.
            </p>
            <Button>Book Appointment</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
