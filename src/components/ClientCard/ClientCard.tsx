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

  let goalBadge = null;
  if (goal === "BUILD MUSCLE") {
    goalBadge = <Badge bg="primary">BUILD MUSCLE</Badge>;
  }

  switch (goal) {
    case "BUILD MUSCLE":
      goalBadge = <Badge bg="primary">BUILD MUSCLE</Badge>;
      break;
    case "LOSE FAT":
      goalBadge = <Badge bg="danger">LOSE FAT</Badge>;
      break;
    case "GAIN STRENGTH":
      goalBadge = <Badge bg="success">GAIN STRENGTH</Badge>;
      break;
    case "BODY RECOMPOSITION":
      goalBadge = <Badge bg="secondary">BODY RECOMPOSITION</Badge>;
      break;
    case "SPORTS SPECIFIC":
      goalBadge = <Badge bg="warning">SPORTS SPECIFIC</Badge>;
      break;
    default:
      break;
  }

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
            Save Changes
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
        <Card.Subtitle>{goalBadge}</Card.Subtitle>
        <Card.Body>
          <DropdownButton
            as={ButtonGroup}
            title="Actions"
            id="bg-nested-dropdown"
          >
            <Dropdown.Item eventKey="1" onClick={openButtonHandler}>
              Open
            </Dropdown.Item>
            <Dropdown.Item eventKey="2">Edit</Dropdown.Item>
            <Dropdown.Item eventKey="3" onClick={showModalHandler}>
              Delete
            </Dropdown.Item>
          </DropdownButton>
        </Card.Body>
      </Card>
    </>
  );
}
