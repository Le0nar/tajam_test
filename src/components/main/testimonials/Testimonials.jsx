import "./testimonials.scss";
import quotes from "../../../assets/icons/quotes.png";
import { useState } from "react";
import { reviewers } from "../../../assets/data/testimonialsList";

const Testimonials = () => {
  const [currentReviewNumber, setCurrentReviewNumber] = useState(2);
  const reviews = reviewers.testimonials;
  return (
    <section className="testimonials" id="people">
      <div className="container testimonials__container">
        <div>
          <img src={quotes} alt="quotes" className="testimonials__quotes" />
        </div>
        <p className="testimonials__review col-md-10">
          {reviews[currentReviewNumber].review}
        </p>
        <div className="testimonials__author">
          <span className="testimonials__author__name">
            {reviews[currentReviewNumber].name}
          </span>
          <span className="testimonials__author__prof">
            {reviews[currentReviewNumber].prof}
          </span>
        </div>
        <div className="testimonials__photos col-md-4">
          {reviews.map((el, i) =>
            i === currentReviewNumber ? (
              <img
                key={el.name}
                src={el.photo}
                alt="reviewer"
                className="testimonials__photos__active"
                onClick={() => setCurrentReviewNumber(i)}
              />
            ) : (
              <img
                key={el.name}
                src={el.photo}
                alt="reviewer"
                className="testimonials__photos__inactive"
                onClick={() => setCurrentReviewNumber(i)}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
