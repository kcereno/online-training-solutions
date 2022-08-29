import { Container, Navbar, Nav } from "react-bootstrap";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import UserContext from "../../store/User/user-context";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const { activeUser, logout } = useContext(UserContext)
  const navigate = useNavigate()

  const navLinks = <>
    <Nav.Link
      onClick={() => {
        navigate(`/dashboard/${activeUser?.info.id}`, { replace: true });
      }}
    >
      Clients
    </Nav.Link>
    <Nav.Link onClick={logout}>Log Out</Nav.Link>
  </>

  const toggleMenu = <>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="respnsive-navbar-nav">
      <Nav className="ms-auto">
        {navLinks}
      </Nav>
    </Navbar.Collapse></>

  return (
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
      <Container fluid>
        <Navbar.Brand href="/">
          <FontAwesomeIcon icon={faDumbbell} className="px-2" />
          Online Training Solutions
        </Navbar.Brand>
        {activeUser && toggleMenu}
      </Container>
    </Navbar>
  );
}

export default NavBar;
