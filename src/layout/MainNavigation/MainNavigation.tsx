import { Container, Navbar } from "react-bootstrap";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { AuthContext } from "../../store/auth-context";
import NavLinks from "./NavLinks/NavLinks";

export default function MainNavigation() {
  const ctx = useContext(AuthContext);

  const { isLoggedIn } = ctx;
  
  return (
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
      <Container fluid>
        <Navbar.Brand href="/">
          <FontAwesomeIcon icon={faDumbbell} className="px-2" />
          Online Training Solutions
        </Navbar.Brand>

        {isLoggedIn ? <NavLinks /> : null}
      </Container>
    </Navbar>
  );
}
