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
  trainingPlan: { goal, notes },
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
      "Build muscle": <Badge bg="primary">BUILD MUSCLE</Badge>,
      "Lose fat": <Badge bg="danger">LOSE FAT</Badge>,
      "Gain strength": <Badge bg="success">GAIN STRENGTH</Badge>,
      "Body recomposition": <Badge bg="secondary">BODY RECOMPOSITION</Badge>,
      "Sports specific": <Badge bg="warning">SPORTS SPECIFIC</Badge>,
    };

    return cases[goal];
  };

  const cardFront = (
    <Card className="text-center card-container mx-4 mb-4">
      <Card.Img
        variant="top"
        className="profile-picture"
        src={profilePicture}
      />
      <Card.Title className="my-2">{`${firstName} ${lastName}`}</Card.Title>
      <Card.Subtitle>{setBadge()}</Card.Subtitle>
      <hr
        style={{
          width: "80%",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      />
    </Card>
  );

  const cardBack = (
    <Card className="text-center card-container mx-4 mb-4">
      <Card.Body style={{ padding: "0px", marginBottom: "15px" }}>
        <Container>
          <p>{notes ? notes : "Client does not have notes"}</p>
        </Container>
        <hr
          style={{
            width: "80%",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        />
        <Dropdown as={ButtonGroup}>
          <Button variant="primary" onClick={handleOpenButton}>
            Open
          </Button>

          <Dropdown.Toggle split variant="primary" id="dropdown-split-basic" />

          <Dropdown.Menu>
            <Dropdown.Item eventKey="1">Edit</Dropdown.Item>
            <Dropdown.Item eventKey="2" onClick={handleDeleteButton}>
              Delete
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Card.Body>
    </Card>
  );

  return (
    <Card className="text-center card-container mx-4 mb-4">
      <Card.Img
        variant="top"
        className="profile-picture"
        src={profilePicture}
      />
      <Card.Title className="my-2">{`${firstName} ${lastName}`}</Card.Title>
      <Card.Subtitle>{setBadge()}</Card.Subtitle>
      <hr
        style={{
          width: "80%",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      />
      <Card.Body style={{ padding: "0px", marginBottom: "15px" }}>
        <Container>
          <p>{notes ? notes : "Client does not have notes"}</p>
        </Container>
        <hr
          style={{
            width: "80%",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        />
        <Dropdown as={ButtonGroup}>
          <Button variant="primary" onClick={handleOpenButton}>
            Open
          </Button>

          <Dropdown.Toggle split variant="primary" id="dropdown-split-basic" />

          <Dropdown.Menu>
            <Dropdown.Item eventKey="1">Edit</Dropdown.Item>
            <Dropdown.Item eventKey="2" onClick={handleDeleteButton}>
              Delete
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Card.Body>
    </Card>
  );
};

export default ClientCard;
