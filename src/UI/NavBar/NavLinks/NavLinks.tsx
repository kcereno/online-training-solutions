import { Fragment } from "react";
import { Nav, Navbar } from "react-bootstrap";
import useUserContext from "../../../hooks/useUserContext";

export default function NavLinks() {
  const { activeUser, userControls } = useUserContext();

  let links;

  if (activeUser) {
    links = (
      <>
        <Nav.Link onClick={userControls.logout}>Log Out</Nav.Link>
      </>
    );
  }

  return (
    <Fragment>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto">{links}</Nav>
      </Navbar.Collapse>
    </Fragment>
  );
}
