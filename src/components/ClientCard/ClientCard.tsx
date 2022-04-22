import {
  Card,
  ButtonGroup,
  DropdownButton,
  Dropdown,
  Modal,
  Button,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import "./ClientCard.css";

type PropTypes = {
  id: string;
  trainerId: string;
  firstName: string;
  lastName: string;
  profilePicture: string;
  deleteClient: (clientId: string) => void;
  goal: string;
};
export default function ClientCard({
  id,
  trainerId,
  firstName,
  lastName,
  profilePicture,
  deleteClient,
  goal,
}: PropTypes) {
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  const showModalHandler = () => {
    setShowModal(true);
  };

  const hideModalHandler = () => {
    setShowModal(false);
  };

  const openButtonHandler = () => {
    navigate(`/dashboard/${trainerId}/client/${id}`);
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
        <Card.Title className="text-center mt-2">{`${firstName} ${lastName}`}</Card.Title>
        <Card.Subtitle className="text-muted">{`Goal: ${goal}`}</Card.Subtitle>
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

//props
