import { faBullseye, faLocationPin } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import "./ClientCard.css";

type PropTypes = {
  key: string;
  trainer: string;
  info: any;
  trainingPlan: any;
};

const ClientCard = ({
  info: { id, firstName, lastName, profilePicture },
  trainingPlan: { goal, notes },
  trainer,
}: PropTypes) => {
  const navigate = useNavigate();

  // Handlers
  const handleOpenButton = () => {
    console.log("clicked");
    navigate(`/dashboard/${trainer}/client/${id}`);
  };

  return (
    <Card className="text-center card-container mx-3 my-3">
      <Card.Img
        variant="top"
        className="profile-picture"
        src={profilePicture}
      />
      <div className="my-3 card-details">
        <Card.Title>{`${firstName} ${lastName}`}</Card.Title>
        <div className="d-flex card-subtitle justify-content-center">
          <div className="mx-1">
            <FontAwesomeIcon icon={faBullseye} /> <span>{goal}</span>
          </div>
          <div className="mx-1">
            <FontAwesomeIcon icon={faLocationPin} /> <span>New York, NY</span>
          </div>
        </div>
      </div>
      <Card.Footer>
        <div className="d-grid gap-2">
          <Button onClick={handleOpenButton}>Open</Button>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default ClientCard;
