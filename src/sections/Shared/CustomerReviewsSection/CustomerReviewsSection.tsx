import { Carousel, Container } from "react-bootstrap";
import "./CustomerReviewsSection.scss";

const CustomerReviewsSection = () => (
  <section className="section testimonials">
    <Container fluid className="carousel text-center text-white">
      <h2 className="subheading">Testimonials</h2>
      <Carousel controls={false}>
        <Carousel.Item>
          <div className="pb-5">
            <p className="testimonial-text">
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Laborum, temporibus?"
            </p>
            <h4>Ana</h4>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="pb-5">
            <p>
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              assumenda sunt."
            </p>
            <h4>Karl</h4>
          </div>
        </Carousel.Item>
      </Carousel>
    </Container>
  </section>
);
export default CustomerReviewsSection;
