import { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import UserContext from '../../../store/User/user-context';
import './LoginPage.scss';

const LoginPage = () => {
  // States
  const [credentialsValid, setCredentialsValid] = useState<boolean>(true);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

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
    setEmail('');
    setPassword('');
  };

  return (
    <section className="primary-bg text-white text-center pt-5 page">
      <Container>
        <Form onSubmit={onSubmitHandler}>
          <FontAwesomeIcon
            className="icon mb-2"
            icon={faDumbbell}
            size="6x"
            color="white"
          />
          <h1 className="display-5 mb-3">Please sign in</h1>
          <div className="login-input mb-3 mw-50">
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
                className="w-100 mb-3"
                type="password"
                placeholder="Password"
                onChange={passwordChangeHandler}
                value={password}
              />
            </Form.Group>

            {!credentialsValid && (
              <p className="my-2 red-text">Incorrect Email or Password</p>
            )}
            <div className="d-grid gap-2">
              <Button
                variant="outline-light"
                size="lg"
                type="submit"
              >
                Sign In
              </Button>
            </div>
          </div>

          <div className="my-3"></div>
          <p className="my-2">For Demo Purposes: </p>
          <p className="my-1">
            Trainer Credentials: trainer@gmail.com : password
          </p>
          <p>Client Credentials: client@gmail.com : password </p>
        </Form>
      </Container>
    </section>
  );
};

export default LoginPage;
