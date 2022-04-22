import { Container, Navbar } from "react-bootstrap";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavLinks from "./NavLinks/NavLinks";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import UserContext from "../../store/user-context";

const MainNavigation = () => {
  const userCtx = useContext(UserContext);
  const params = useParams();
  console.log(params)
  const { activeUser, logout } = userCtx;
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

export default MainNavigation;
