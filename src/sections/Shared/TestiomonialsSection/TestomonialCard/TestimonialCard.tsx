import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container } from "react-bootstrap";
import SurfaceCard from "../../../../UI/SurfaceCard/SurfaceCard";
import "./TestimonialCard.scss";

interface Props {
  name: string;
  photo: string;
}
const TestimonialCard = ({ name, photo }: Props) => {
  return (
    <SurfaceCard className="testimonial-card ">
      <Container>
        <img
          className="rounded-circle testimonial-img"
          src={photo}
          alt="testimonial"
        />

        <div className="testimonial-text">
          <span className="mx-2">
            <FontAwesomeIcon icon={faQuoteLeft} />
          </span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
          <span className="mx-2">
            <FontAwesomeIcon icon={faQuoteRight} />{" "}
          </span>
        </div>
        <div className="testimonial-name my-3">
          <p>
            <strong>{name}</strong>
          </p>
        </div>
      </Container>
    </SurfaceCard>
  );
};

export default TestimonialCard;
