import { Fragment } from "react";
import { Nav, Navbar } from "react-bootstrap";
export default function NavLinks() {

  
  return (
    <Fragment>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link>Sign Out</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Fragment>
  );
}
