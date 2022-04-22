import { Fragment } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import UserContext from "../../../store/user-context";
import { useContext } from "react";

export default function NavLinks() {
  const userCtx = useContext(UserContext);
  const { activeUser, logout } = userCtx;
  const location = useLocation();

  let links = null;

  if (location.pathname === "/dashboard/" + activeUser?.info.id) {
    links = <Nav.Link>Add Client</Nav.Link>;
  }

  return (
    <Fragment>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto">
          {links}
          <Nav.Link onClick={logout}>Log Out</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Fragment>
  );
}
