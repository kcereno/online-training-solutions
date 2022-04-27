import ClientCard from "../../components/ClientCard/ClientCard";
import "./TrainerDashboard.css";
import { Client, Trainer } from "../../data/classes";
import { useState, useContext } from "react";
import ModalContext from "../../store/modal-context";
import {
  Button,
  Container,
  Row,
  Col,
  Form,
  Accordion,
  FloatingLabel,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";

type PropTypes = {
  trainer: Trainer;
};

const TrainerDashboard = ({ trainer }: PropTypes) => {
  // State
  const [clientList, setClients] = useState(trainer.clients);

  // Context
  const modalCtx = useContext(ModalContext);
  const { showModal, hideModal } = modalCtx;

  // Functions
  const deleteClient = (clientId: string): void => {
    const confirmDelete = () => {
      let updatedClientList = trainer.deleteClient(clientId);
      setClients(updatedClientList);
      hideModal();
    };

    showModal({
      title: "Attention",
      body: "Are you sure you want to delete this client?",
      footer: (
        <>
          <Button variant="secondary" onClick={hideModal}>
            Cancel
          </Button>
          <Button variant="danger" onClick={confirmDelete}>
            DELETE
          </Button>
        </>
      ),
    });
  };

  const addClientHandler = () => {
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

    showModal({
      title: "Add Client",
      body: modalBody,
      footer: modalFooter,
    });
  };

  let clients = clientList.map((client: Client) => {
    return (
      <ClientCard
        key={client.info.id}
        trainerId={trainer.info.id}
        client={client}
        deleteClient={deleteClient}
      />
    );
  });

  return (
    <section id="trainer-dashboard" className=" py-5">
      <Container className="dashboard-container" fluid>
        <Row>
          <div className="d-flex justify-content-center align-items-center">
            <h2 className="text-white display-4 ">Clients</h2>
            <FontAwesomeIcon
            className="header-button"
              icon={faUserPlus}
              color="white"
              onClick={addClientHandler}
            />
          </div>
          <hr />
        </Row>
        <Row className="d-flex justify-content-center flex-wrap header">
          {clients}
        </Row>
      </Container>
    </section>
  );
};

export default TrainerDashboard;

// card details: profile picture, name, age, current program,
