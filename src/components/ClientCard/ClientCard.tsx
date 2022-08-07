import { Card, ButtonGroup, Dropdown, Button, Badge } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./ClientCard.css";

type PropTypes = {
  key: string;
  trainer: string;
  info: any;
  trainingPlan: any;
  deleteClient: (clientId: string) => void;
};

const ClientCard = ({
  info: { id, firstName, lastName, profilePicture },
  trainingPlan: { goal },
  deleteClient,
  trainer,
}: PropTypes) => {
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
      <Card className="text-center text-white card-container mx-3 mb-3" >
        <Card.Img
          variant="top"
          className="profile-picture"
          src={profilePicture}
        />
        <Card.Title className="my-1">{`${firstName} ${lastName}`}</Card.Title>
        {/* <Card.Subtitle>{setBadge()}</Card.Subtitle> */}
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
