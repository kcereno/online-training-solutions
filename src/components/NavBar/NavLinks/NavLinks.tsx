import React from "react";
import { Fragment, useContext } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import UserContext from "../../../store/User/user-context";

export default function NavLinks() {
  const navigate = useNavigate();

  const { activeUser, logout } = useContext(UserContext);

  let links;

  if (activeUser) {
    links = (
      <>
        <Nav.Link
          onClick={() => {
            navigate(`/dashboard/${activeUser.info.id}`, { replace: true });
          }}
        >
          Clients
        </Nav.Link>
        <Nav.Link onClick={logout}>Log Out</Nav.Link>
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
