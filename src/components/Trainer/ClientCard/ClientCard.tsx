import { faBullseye, faLocationPin } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import './ClientCard.scss';

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
    navigate(`/dashboard/${trainer}/client/${id}`);
  };

  interface GoalColorsInterface {
    [key: string]: string;
  }

  const goalColors: GoalColorsInterface = {
    'Build muscle': 'red',
    'Lose fat': 'yellow',
    'Gain strength': 'orange',
    'Body recomposition': 'green',
    'Sports specific': 'pink',
  };

  return (
    <Card className="text-center card-container m-3">
      <Card.Img
        variant="top"
        className="profile-picture"
        src={profilePicture}
      />

      <div className="my-2 card-content">
        <Card.Title className="card-title">
          <h3>{`${firstName} ${lastName}`}</h3>
        </Card.Title>
        <div className="d-flex card-subtitle justify-content-center">
          <div className="mx-1">
            <FontAwesomeIcon icon={faBullseye} />{' '}
            <span style={{ color: `${goalColors[goal]}` }}>{goal}</span>
          </div>
          <div className="mx-1">
            <FontAwesomeIcon icon={faLocationPin} /> <span>New York, NY</span>
          </div>
        </div>
      </div>

      <Card.Footer>
        <div className="d-grid gap-2 ">
          <Button onClick={handleOpenButton}>Open</Button>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default ClientCard;
