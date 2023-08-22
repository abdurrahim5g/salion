import "./Partners.css";

// import images
import partner4 from "./images/04_Logo-1.png";
import partner5 from "./images/05_Logo-1.png";
import partner6 from "./images/06_Logo-1.png";
import partner7 from "./images/07_Logo-1.png";
import partner8 from "./images/08_Logo-1.png";
import partner9 from "./images/09_Logo-1.png";

const partners = [partner4, partner5, partner6, partner7, partner8, partner9];

const Partners = () => {
  return (
    <section className="partners-section p-16 ">
      <div className="container">
        <div className="row">
          <div className="partnets-images flex flex-wrap gap-10 items-center justify-center">
            {partners.map((img, index) => (
              <img key={index} src={img} alt="Partner image" className="w-40" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
