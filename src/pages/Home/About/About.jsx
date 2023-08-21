import Button from "../../../components/Button/Button";
import Title from "../../../components/Title/Title";
import "./About.css";
import figure1 from "./figure1.jpg";
import figure2 from "./figure2.jpg";

const About = () => {
  return (
    <section className="about-section py-20 md:py-28">
      <div className="container">
        <div className="row">
          <div className="grid grid-cols-1 md:grid-cols-3 place-items-center gap-10">
            <div className="about-text">
              <Title>About Us</Title>
              <p>
                There are many variations of passages Ipsum available but the
                majority have suffered alteration.
              </p>
              <p className="mt-5 mb-8">
                in that some injected is humour or randomised words the which
                don’t look slightly a believable. If you are Lorem and Ipsum you
                isn’t anything embarrassing.
              </p>
              <Button>Contact Us</Button>
            </div>
            <div className="about-images col-span-1 md:col-span-2">
              <div className="grid grid-cols-2 gap-4 md:gap-8">
                <img
                  src={figure1}
                  alt="Figure One"
                  className="w-full rounded-lg shadow-lg"
                />
                <img
                  src={figure2}
                  alt="Figure Two"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
