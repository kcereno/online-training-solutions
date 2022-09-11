import { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UserContext from "../../store/User/user-context";
import "./LoginPage.css";

const LoginPage = () => {
  // States
  const [credentialsValid, setCredentialsValid] = useState<boolean>(true);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  // Context
  const { login, validateUser } = useContext(UserContext);

  // Event Handlers
  const emailChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
  };
  const passwordChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setPassword(e.target.value);
  };

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const validatedUser = validateUser(email, password);

    validatedUser && login(validatedUser);

    setCredentialsValid(false);
    setEmail("");
    setPassword("");
  };

  return (
    <Container className="text-white text-center  form-container pt-5">
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
};

export default LoginPage;
