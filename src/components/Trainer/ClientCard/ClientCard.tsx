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
    console.log("clicked");
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
    <Card className="text-center card-container">
      <Card.Img
        variant="top"
        className="profile-picture"
        src={profilePicture}
      />
      <div className="my-3">
        <Card.Title className="">{`${firstName} ${lastName}`}</Card.Title>
        <Card.Subtitle>{setBadge()}</Card.Subtitle>
      </div>
    </Card>
  );

  const cardBack = (
    <Card className="text-center card-container">
      <Card.Body>
        <h3>Notes</h3>
        <hr
          style={{
            width: "100%",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        />
        <div className="client-notes">
          <p>{notes ? notes : "Client does not have notes"}</p>
        </div>
      </Card.Body>
      <Card.Footer>
        <button className="open-button" onClick={handleOpenButton}>
          Open
        </button>
      </Card.Footer>
    </Card>
  );

  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">{cardFront}</div>
        <div className="flip-card-back">{cardBack}</div>
      </div>
    </div>
  );
};

export default ClientCard;
