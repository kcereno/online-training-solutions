import { Fragment } from "react";
import { FloatingLabel, Form, Nav, Navbar } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import UserContext from "../../../store/user-context";
import { useContext } from "react";
import ModalContext from "../../../store/modal-context";

export default function NavLinks() {
  const userCtx = useContext(UserContext);
  const { activeUser, logout } = userCtx;

  const modalCtx = useContext(ModalContext);
  const { showModal } = modalCtx;

  const location = useLocation();

  const addClientHandler = () => {
    showModal({
      title: "Add Client",
      body: modalBody,
      footer: "SUBMIT BUTTONS",
    });
  };

  const modalBody = (
    <Form>
      <FloatingLabel label="First Name" controlId="firstName" className="mb-3">
        <Form.Control type="text" />
      </FloatingLabel>
      <FloatingLabel label="Last Name" controlId="lastName" className="mb-3">
        <Form.Control type="text" />
      </FloatingLabel>
      <FloatingLabel label="Birthday" controlId="birthday" className="mb-3">
        <Form.Control type="date" />
      </FloatingLabel>
    </Form>
  );

  let links = null;

  if (location.pathname === "/dashboard/" + activeUser?.info.id) {
    links = <Nav.Link onClick={addClientHandler}>Add Client</Nav.Link>;
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
