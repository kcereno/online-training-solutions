import { Fragment } from "react";
import { Nav, Navbar } from "react-bootstrap";

type Props = {
  logoutUser: () => void;
};

export default function NavLinks({ logoutUser }: Props) {
  return (
    <Fragment>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link>Add Client</Nav.Link>
          <Nav.Link onClick={logoutUser}>Log Out</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Fragment>
  );
}
