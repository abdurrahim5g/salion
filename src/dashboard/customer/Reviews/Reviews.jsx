import { FaStar } from "react-icons/fa";

const Reviews = () => {
  return (
    <section className="reviews-page">
      <div className="reviews-container">
        <div className="review-grid grid grid-cols-1 md:grid-cols-2">
          <div className="single-review p-6 shadow hover:shadow-md rounded-lg">
            <div className="flex items-start gap-5">
              <img
                src="https://s3.ap-south-1.amazonaws.com/cdn-shebaxyz/images/categories_images/thumbs/1644916789_salonservicesformen.jpg"
                alt=""
                className="w-40 object-contain rounded-lg"
              />
              <div className="review-text">
                <div className="title-rating flex items-center gap-5">
                  <h4 className="text-2xl">Service title</h4>

                  <div className="star-review flex gap-1 text-yellow-400">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>
                <div className="service-content">
                  <p className="comment mt-3">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Animi reprehenderit similique, et officia necessitatibus
                    libero minus laudantium, dolorem .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
