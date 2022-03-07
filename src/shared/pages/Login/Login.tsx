import "./Login.css";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Container, Form, Row } from "react-bootstrap";

export default function Login() {
  return (
    <Container className="form-container text-white text-center">
      <Row className="align-items-center h-100">
        <Form>
          <FontAwesomeIcon
            className="icon mb-4"
            icon={faDumbbell}
            size="6x"
            color="white"
          />
          <h1 className="display-5 mb-3">Please sign in</h1>
          <div className="input-fields mb-3">
            <Form.Control
              className="w-100"
              type="email"
              placeholder="Email Adrress"
            />
            <Form.Control
              className="w-100"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="d-grid gap-2">
            <Button variant="outline-light" size="lg" type="submit">
              Sign In
            </Button>
          </div>
        </Form>
      </Row>
    </Container>
  );
}
