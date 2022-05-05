import { Fragment } from "react";
import {
  Accordion,
  FloatingLabel,
  Form,
  Nav,
  Navbar,
  Row,
  Col,
  Button,
} from "react-bootstrap";
import { useLocation } from "react-router-dom";
import UserContext from "../../../store/user-context";
import { useContext } from "react";
import ModalContext from "../../../store/modal-context";

export default function NavLinks() {
  const userCtx = useContext(UserContext);
  const { activeUser, logout } = userCtx;



  const location = useLocation();

  // const addClientHandler = () => {
  //   showModal({
  //     title: "Add Client",
  //     body: modalBody,
  //     footer: modalFooter,
  //   });
  // };

  const modalBody = (
    <Form>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Basic Information</Accordion.Header>
          <Accordion.Body>
            <FloatingLabel
              label="First Name"
              controlId="firstName"
              className="mb-3"
            >
              <Form.Control type="text" />
            </FloatingLabel>

            <FloatingLabel
              label="Last Name"
              controlId="lastName"
              className="mb-3"
            >
              <Form.Control type="text" />
            </FloatingLabel>
            <FloatingLabel label="Email" controlId="email" className="mb-3">
              <Form.Control type="email" />
            </FloatingLabel>
            <FloatingLabel
              label="Birthday"
              controlId="birthday"
              className="mb-3"
            >
              <Form.Control type="date" />
            </FloatingLabel>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>Profile Picture</Accordion.Header>
          <Accordion.Body>
            <Form.Check
            className="mb-3"
              type="switch"
              id="photoUrlSwitch"
              label="Add a custom profile photo?"
            />

            <FloatingLabel
              label="Photo URL"
              controlId="photoUrl"
              className="mb-3"
            >
              <Form.Control type="url" />
            </FloatingLabel>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>Training Information</Accordion.Header>
          <Accordion.Body>
            <FloatingLabel controlId="floatingSelect" label="Goal">
              <Form.Select aria-label="text">
                <option>Build Muscle</option>
                <option>Lose Fat</option>
                <option>Gain Strength</option>
                <option>Body Recomposition</option>
                <option>Sports Specific</option>
              </Form.Select>
            </FloatingLabel>

            <div className="mt-3">
              <Form.Label>Target</Form.Label>
              <Row>
                <Col>
                  <Form.Control placeholder="Weight in lbs" />
                </Col>
                <Col>
                  <Form.Control placeholder="Body Fat Percentage" />
                </Col>
              </Row>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Form>
  );

  const modalFooter = (
    <>
      <Button variant="secondary">Cancel</Button>
      <Button variant="primary">SUBMIT</Button>
    </>
  );


  return (
    <Fragment>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link onClick={logout}>Log Out</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Fragment>
  );
}
