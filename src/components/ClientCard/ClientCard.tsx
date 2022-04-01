import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import "./ClientCard.css";

interface Props {
  firstName: string;
  lastName: string;
  profilePicture: string;
}
export default function ClientCard({
  firstName,
  lastName,
  profilePicture,
}: Props) {
  return (
    <Card className="text-center text-white card-container bg-dark mx-5">
      <Card.Img
        variant="top"
        className="profile-picture"
        src={profilePicture}
      />
      <Card.Title className="text-center mt-2">{`${firstName} ${lastName}`}</Card.Title>
      <Card.Body>
        <Button>Open</Button>
      </Card.Body>
    </Card>
  );
}

//props
