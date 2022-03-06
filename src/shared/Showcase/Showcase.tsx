import { Button, Container, Row } from "react-bootstrap";

export default function Showcase() {
  return (
    <section id="showcase">
      <div className="primary-overlay">
        <Container className="d-flex h-100">
          <Row className="justify-content-center align-self-center text-center">
            <div className="col-sm-6">
              <div className="text-white">
                <h1 className="display-2 py-3   ">
                  Where Trainers and Clients Connect
                </h1>
                <div>
                  <Button className="mx-2" variant="outline-light" size="lg">
                    Log In
                  </Button>
                  <Button className="mx-2" variant="outline-light" size="lg">
                    Sign Up
                  </Button>
                </div>
              </div>
            </div>
            <div className="col-sm-6"></div>
          </Row>
        </Container>
      </div>
    </section>
  );
}
