import "./LoginPage.css";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Container, Form } from "react-bootstrap";
import { useContext, useState } from "react";
import { CLIENTS } from "../../data/CLIENTS";
import { TRAINERS } from "../../data/TRAINERS";
import UserContext from "../../store/user-context";

export default function LoginPage() {
  // States
  const [credentialsValid, setCredentialsValid] = useState<boolean>(true);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  // Context
  const userCtx = useContext(UserContext);
  const { login } = userCtx;

  // Event Handlers
  const emailChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const passwordChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const USERS = [...CLIENTS, ...TRAINERS];
    const foundUser = USERS.find(
      (user) =>
        user.loginCredentials.email === email &&
        user.loginCredentials.password === password
    );
    if (foundUser) {
      login(foundUser);
    } else {
      setCredentialsValid(false);
      setEmail("");
      setPassword("");
    }
  };

  return (
    <Container className="text-white text-center bg-black form-container pt-5">
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
    </Container>
  );
}
