import { Button, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./HeroSection.scss";

const HeroSection = () => (
  <section className="hero-section ">
    <Container>
      <Row className="center w-75 ">
        <h1 className="hero-text ">Where Trainers and Clients Connect</h1>
        <Link to="/signin">
          <Button className="my-3" variant="outline-light" size="lg">
            Log In
          </Button>
        </Link>
      </Row>
    </Container>
  </section>
);
export default HeroSection;
