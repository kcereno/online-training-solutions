import { Button, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./HeroSection.scss";

const HeroSection = () => (
  <section id="showcase">
    <Container className="text-white text-center ">
      <Row className="mx-auto vertical-center">
        <h1 className="display-2 py-3 hero-text ">
          Where Trainers and Clients Connect
        </h1>
        <div className="button-group">
          <Link to="/signin">
            <Button className="mx-2" variant="outline-light" size="lg">
              Log In
            </Button>
          </Link>
        </div>
      </Row>
    </Container>
  </section>
);
export default HeroSection;
