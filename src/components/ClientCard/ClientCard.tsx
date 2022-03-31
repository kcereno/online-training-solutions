import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import './ClientCard.css'

type PropTypes = {
  profilePicture: string;
  name: string;
};

export default function ClientCard(props: PropTypes) {
  const navigate = useNavigate();
  const { name, profilePicture } = props;

  const openButtonClickHandler = (e: object): void => {
    console.log(e);
    navigate("clients/" + "clientname");
  };

  return (
    <Card className="text-center card-container">
      <Card.Img variant="top" src={profilePicture} />
      <Card.Title className="text-center mt-1">{name}</Card.Title>
      <Card.Body>
        <Button onClick={openButtonClickHandler}>Open</Button>
      </Card.Body>
    </Card>
  );
}

//props
