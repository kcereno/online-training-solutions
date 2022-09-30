import { Container, Navbar } from "react-bootstrap";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UserContext from "../../store/User/user-context";
import NavBarToggleMenu from "./NavBarToggleMenu/NavBarToggleMenu";
import { useContext } from "react";
import "./Navbar.scss";

const NavBar = () => {
  const { activeUser, logout } = useContext(UserContext);

  return (
    <Navbar collapseOnSelect expand="md" variant="dark" className="navbar py-1">
      <Container fluid className="py-2">
        <Navbar.Brand href="/" className="body-text">
          <FontAwesomeIcon icon={faDumbbell} className="px-2" />
          Online Training Solutions
        </Navbar.Brand>
        {activeUser?.role === "TRAINER" && (
          <NavBarToggleMenu activeUser={activeUser} logout={logout} />
        )}
      </Container>
    </Navbar>
  );
};

export default NavBar;
