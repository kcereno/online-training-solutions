import { Carousel, Container } from "react-bootstrap";
import "./TestiomonialsSection.scss";
import TestimonialCard from "./TestomonialCard/TestimonialCard";

const TestiomonialsSection = () => (
  <section className="section testimonials">
    <Container fluid className="carousel text-center text-white">
      <h2 className="subheading">Testimonials</h2>

      <div className="testimonials d-flex justify-content-center">
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </div>
    </Container>
  </section>
);
export default TestiomonialsSection;
