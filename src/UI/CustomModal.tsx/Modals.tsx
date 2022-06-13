import { useContext } from "react";
import {
  Modal,
  Button,
  Accordion,
  Form,
  FloatingLabel,
  Col,
  Row,
} from "react-bootstrap";
import ModalContext from "../../store/modal-context";
import UserContext from "../../store/user-context";
// import { Trainer } from "../../data/classes";

type DeleteModalPropTypes = {
  clientId: string;
};

export const DeleteClientModal = (props: DeleteModalPropTypes) => {
  const { clientId } = props;

  // const { hideModal } = useContext(ModalContext);
  // const { activeUser } = useContext(UserContext);

  const handleConfirmDeletClient = () => {
    //   if (activeUser instanceof Trainer && clientId) {
    //     activeUser.deleteClient(clientId);
    //   }
    //   hideModal();
  };

  return (
    <>
      <Modal.Header>
        <Modal.Title>Attention</Modal.Title>
      </Modal.Header>
      <Modal.Body>"Are you sure you want to delete this client?"</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => {}}>
          Cancel
        </Button>
        <Button variant="danger" onClick={handleConfirmDeletClient}>
          DELETE
        </Button>
      </Modal.Footer>
    </>
  );
};

export const AddClientModal = () => {
  const { hideModal } = useContext(ModalContext);

  return (
    <>
      <Modal.Header>
        <Modal.Title>Attention</Modal.Title>
      </Modal.Header>
      <Modal.Body>
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
        "
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={hideModal}>
          Cancel
        </Button>
        <Button variant="primary" onClick={() => {}}>
          ADD
        </Button>
      </Modal.Footer>
    </>
  );
};

// const modalBody = (

// );

// const modalFooter = (
//   <>
//     <Button variant="secondary">Cancel</Button>
//     <Button variant="primary">SUBMIT</Button>
//   </>
// );
