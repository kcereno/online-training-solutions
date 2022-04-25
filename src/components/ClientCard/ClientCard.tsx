import {
  Card,
  ButtonGroup,
  DropdownButton,
  Dropdown,
  Modal,
  Button,
  Badge,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./ClientCard.css";
import { Client } from "../../data/classes";

type PropTypes = {
  key: string;
  trainerId: string;
  deleteClient: (clientId: string) => void;
  client: Client;
};

export default function ClientCard({
  trainerId,
  deleteClient,
  client,
}: PropTypes) {
  const [showModal, setShowModal] = useState(false);

  const { id, firstName, lastName, profilePicture } = client.info;
  const { goal } = client.trainingPlan;

  const navigate = useNavigate();

  // Handlers
  const showModalHandler = () => {
    setShowModal(true);
  };

  const hideModalHandler = () => {
    setShowModal(false);
  };

  const openButtonHandler = () => {
    navigate(`/dashboard/${trainerId}/client/${id}`);
  };

  interface BadgeIndexSignature {
    [key: string]: JSX.Element;
  }

  const getBadge = () => {
    const cases: BadgeIndexSignature = {
      "BUILD MUSCLE": <Badge bg="primary">BUILD MUSCLE</Badge>,
      "LOSE FAT": <Badge bg="danger">LOSE FAT</Badge>,
      "GAIN STRENGTH": <Badge bg="success">GAIN STRENGTH</Badge>,
      "BODY RECOMPOSITION": <Badge bg="secondary">BODY RECOMPOSITION</Badge>,
      "SPORTS SPECIFIC": <Badge bg="warning">SPORTS SPECIFIC</Badge>,
    };

    return cases[goal];
  };

  return (
    <>
      <Modal show={showModal} onHide={hideModalHandler} centered>
        <Modal.Header>
          <Modal.Title>Attention</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete client?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={hideModalHandler}>
            Cancel
          </Button>
          <Button variant="danger" onClick={() => deleteClient(id)}>
            DELETE
          </Button>
        </Modal.Footer>
      </Modal>

      <Card className="text-center text-white card-container bg-dark mx-3 my-3">
        <Card.Img
          variant="top"
          className="profile-picture"
          src={profilePicture}
        />
        <Card.Title className="mt-2">{`${firstName} ${lastName}`}</Card.Title>
        <Card.Subtitle>{getBadge()}</Card.Subtitle>
        <Card.Body>
          <Dropdown as={ButtonGroup}>
            <Button variant="primary">Open</Button>
            <Dropdown.Toggle
              split
              variant="primary"
              id="dropdown-split-basic"
            />

            <Dropdown.Menu>
              <Dropdown.Item eventKey="1">Edit</Dropdown.Item>
              <Dropdown.Item eventKey="2" onClick={showModalHandler}>
                Delete
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Card.Body>
      </Card>
    </>
  );
}
