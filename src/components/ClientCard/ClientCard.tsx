import { Card, ButtonGroup, Dropdown, Button, Badge } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./ClientCard.css";

type PropTypes = {
  key: string;
  info: any;
  trainingPlan: any;
  deleteClient: (clientId: string) => void;
};

const ClientCard = ({ info, trainingPlan, deleteClient }: PropTypes) => {
  const { id, firstName, lastName, profilePicture } = info;
  const { goal, trainer } = trainingPlan;

  const navigate = useNavigate();

  // Handlers
  const handleOpenButton = () => {
    navigate(`/dashboard/${trainer}/client/${id}`);
  };

  const handleDeleteButton = () => {
    deleteClient(id);
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
          className="profile-picture pt-2"
          src={profilePicture}
        />
        <Card.Title className="mt-2">{`${firstName} ${lastName}`}</Card.Title>
        <Card.Subtitle>{setBadge()}</Card.Subtitle>
        <Card.Body>
          <Dropdown as={ButtonGroup}>
            <Button variant="primary" onClick={handleOpenButton}>
              Open
            </Button>

            <Dropdown.Toggle
              split
              variant="primary"
              id="dropdown-split-basic"
            />

            <Dropdown.Menu>
              <Dropdown.Item eventKey="1">Edit</Dropdown.Item>
              <Dropdown.Item eventKey="2" onClick={handleDeleteButton}>
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
