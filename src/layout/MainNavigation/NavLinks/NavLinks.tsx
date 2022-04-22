import { Fragment } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import UserContext from "../../../store/user-context";
import { useContext } from "react";

export default function NavLinks() {
  const userCtx = useContext(UserContext);

  const location = useLocation();
  console.log(location);

  let links = null;

  if (location.pathname === "/dashboard/" + userCtx.activeUser?.userInfo.id) {
    links = <Nav.Link>Add Client</Nav.Link>;
  }

  return (
    <Fragment>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto">
          {links}
          <Nav.Link>Log Out</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Fragment>
  );
}
