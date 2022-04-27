import { Container, Navbar } from "react-bootstrap";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavLinks from "../../UI/NavBar/NavLinks/NavLinks";
import { useContext } from "react";
import UserContext from "../../store/user-context";

const NavBar = () => {
  const userCtx = useContext(UserContext);
  const { activeUser } = userCtx;
  return (
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
      <Container fluid>
        <Navbar.Brand href="/">
          <FontAwesomeIcon icon={faDumbbell} className="px-2" />
          Online Training Solutions
        </Navbar.Brand>
        {activeUser && <NavLinks />}
      </Container>
    </Navbar>
  );
};

export default NavBar;