import { Card, ButtonGroup, Dropdown, Button, Badge } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./ClientCard.css";
import { Client } from "../../data/classes";

type PropTypes = {
  key: string;
  trainerId: string;
  deleteButtonHandler: (clientId: string) => void;
  client: Client;
};

const ClientCard = ({ trainerId, deleteButtonHandler, client }: PropTypes) => {
  const { id, firstName, lastName, profilePicture } = client.info;
  const { goal } = client.trainingPlan;

  const navigate = useNavigate();

  const openButtonHandler = () => {
    navigate(`/dashboard/${trainerId}/client/${id}`);
  };

  interface stringToJSXElementIndex {
    [key: string]: JSX.Element;
  }

  const setBadge = () => {
    const cases: stringToJSXElementIndex = {
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
      <Card className="text-center text-white card-container bg-dark mx-3 my-3">
        <Card.Img
          variant="top"
          className="profile-picture"
          src={profilePicture}
        />
        <Card.Title className="mt-2">{`${firstName} ${lastName}`}</Card.Title>
        <Card.Subtitle>{setBadge()}</Card.Subtitle>
        <Card.Body>
          <Dropdown as={ButtonGroup}>
            <Button variant="primary" onClick={openButtonHandler}>
              Open
            </Button>

            <Dropdown.Toggle
              split
              variant="primary"
              id="dropdown-split-basic"
            />

            <Dropdown.Menu>
              <Dropdown.Item eventKey="1">Edit</Dropdown.Item>
              <Dropdown.Item
                eventKey="2"
                onClick={() => {
                  deleteButtonHandler(id);
                }}
              >
                Delete
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Card.Body>
      </Card>
    </>
  );
};

export default ClientCard;
