import { Container, Navbar } from "react-bootstrap";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavLinks from "./NavLinks/NavLinks";

const NavBar = () =>
(
  <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
    <Container fluid>
      <Navbar.Brand href="/">
        <FontAwesomeIcon icon={faDumbbell} className="px-2" />
        Online Training Solutions
      </Navbar.Brand>
      <NavLinks />
    </Container>
  </Navbar>
);
;

export default NavBar;
