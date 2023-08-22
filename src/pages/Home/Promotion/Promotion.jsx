import Button from "../../../components/Button/Button";
import Title from "../../../components/Title/Title";
import "./Promotion.css";

const Promotion = () => {
  return (
    <section className="promotion-section py-20 md:py-28">
      <div className="container">
        <div className="row">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="promotion-content text-center md:text-left">
              <Title className="text-white mobile-center">
                Promotion Offer
              </Title>
              <p className="text-primary text-xl md:text-2xl">
                Out sepcial hand made cream
              </p>
              <p className="my-8 text-white opacity-90">
                There are many variations of passages of Lorem Ipsum majority
                have is suffered alteration in that some form believable.
              </p>
              <Button>Book now</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promotion;
