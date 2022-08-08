import {
  Card,
  ButtonGroup,
  Dropdown,
  Button,
  Badge,
  Container,
} from "react-bootstrap";
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
      <Card className="text-center card-container mx-4 mb-4">
        <Card.Img
          variant="top"
          className="profile-picture"
          src={profilePicture}
        />
        <Card.Title className="my-2">{`${firstName} ${lastName}`}</Card.Title>
        <Card.Subtitle>{setBadge()}</Card.Subtitle>
        <hr style={{ width: "80%", marginLeft: "auto", marginRight: "auto" }} />
        <Card.Body style={{ padding: "0px", marginBottom: "15px" }}>
          <Container>
            <p>
              Area for client notes. Important stuff to keep in mind such as
              injuries, special accomodations and what not
            </p>
          </Container>
          <hr
            style={{ width: "80%", marginLeft: "auto", marginRight: "auto" }}
          />
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
