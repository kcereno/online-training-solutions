import { Container } from "react-bootstrap";
import "./TestiomonialsSection.scss";
import TestimonialCard from "./TestomonialCard/TestimonialCard";

import image1 from "./../../../assets/images/testimonial-faces/image-lorem-face-3134.jpeg";
import image2 from "../../../assets//images//testimonial-faces/image-lorem-face-34343134.jpeg";
import image3 from "../../../assets/images/testimonial-faces/image-lorem-face-5178.jpeg";

const TestiomonialsSection = () => (
  <section className="section testimonials">
    <Container fluid className="carousel text-center text-white">
      <h2 className="subheading">Testimonials</h2>

      <div className="testimonials d-flex justify-content-center flex-wrap">
        <TestimonialCard name="Hector Fabuloso" photo={image1} />
        <TestimonialCard name="Patrick Bueno" photo={image2} />
        <TestimonialCard name="Ricardo Mantalban" photo={image3} />
      </div>
    </Container>
  </section>
);
export default TestiomonialsSection;
