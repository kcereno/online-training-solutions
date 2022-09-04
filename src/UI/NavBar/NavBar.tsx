import { Container, Navbar } from "react-bootstrap";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import UserContext from "../../store/User/user-context";

import NavBarToggleMenu from "./NavBarToggleMenu/NavBarToggleMenu";

const NavBar = () => {
  const { activeUser, logout } = useContext(UserContext);

  return (
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
      <Container fluid>
        <Navbar.Brand href="/">
          <FontAwesomeIcon icon={faDumbbell} className="px-2" />
          Online Training Solutions
        </Navbar.Brand>
        {activeUser && (
          <NavBarToggleMenu activeUser={activeUser} logout={logout} />
        )}
      </Container>
    </Navbar>
  );
};

export default NavBar;
