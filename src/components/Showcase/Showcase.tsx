import { Button, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Showcase.css";
export default function Showcase() {
  return (
    <section id="showcase">
      <div className="vertical-align">
        <Container className="text-white text-center">
          <Row className="">
            <div className="">
              <h1 className="display-2 py-3 ">
                Where Trainers and Clients Connect
              </h1>
              <div className="button-group">
                <Link to="/signin">
                  <Button className="mx-2" variant="outline-light" size="lg">
                    Log In
                  </Button>
                </Link>

                <Button className="mx-2" variant="outline-light" size="lg">
                  Sign Up
                </Button>
              </div>
            </div>
          </Row>
        </Container>
      </div>
    </section>
  );
}
