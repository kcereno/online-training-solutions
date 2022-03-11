import "./LoginPage.css";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Container, Form, Row } from "react-bootstrap";
import { useContext, useState } from "react";
import { AuthContext } from "../../store/auth-context";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [credentialsValid, setCredentialsValid] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();

  const ctx = useContext(AuthContext);

  const { login } = ctx;

  const emailChangeHandler = (e: any) => {
    setEmail(e.target.value);
  };

  const passwordChangeHandler = (e: any) => {
    setPassword(e.target.value);
  };

  const onSubmitHandler = (e: any) => {
    e.preventDefault();

    let loginResult = login({
      email,
      password,
    });

    if (!loginResult) {
      setCredentialsValid(false);
      setEmail("");
      setPassword("");
    } else {
      let userName = loginResult.info.firstName;
      navigate(`/user/${userName}`);
    }
  };

  return (
    <Container className="form-container text-white text-center bg-black">
      <Row className="align-items-center h-100">
        <Form onSubmit={onSubmitHandler}>
          <FontAwesomeIcon
            className="icon mb-4"
            icon={faDumbbell}
            size="6x"
            color="white"
          />
          <h1 className="display-5 mb-3">Please sign in</h1>
          <div className="input-fields mb-3">
            <Form.Group>
              <Form.Control
                className="w-100"
                type="email"
                placeholder="Email"
                onChange={emailChangeHandler}
                value={email}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                className="w-100"
                type="password"
                placeholder="Password"
                onChange={passwordChangeHandler}
                value={password}
              />
            </Form.Group>

            {!credentialsValid && (
              <p className="my-2 red-text">Incorrect Email or Password</p>
            )}
          </div>

          <div className="d-grid gap-2">
            <Button variant="outline-light" size="lg" type="submit">
              Sign In
            </Button>
          </div>
          <div id="demo" className="py-2"></div>
          <p>For Demo Purposes: </p>
          <p>Trainer Credentials: trainer@gmail.com : password</p>
          <p>Client Credentials: client@gmail.com : password </p>
        </Form>
      </Row>
    </Container>
  );
}
