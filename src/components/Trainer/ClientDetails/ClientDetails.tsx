import React from "react";
import { Button, Card, Container } from "react-bootstrap";
import { UserInfo } from "../../../data/interfaces";
import Separator from "../../../UI/Separator/Separator";
import { dateToString } from "../../../data/functions";
import "./ClientDetails.css";
interface Props {
  info: UserInfo;
  goal: string;
  notes?: string;
  deleteClient: (clientId: string) => void;
}

const ClientDetails = ({
  info: { firstName, lastName, birthday, email, profilePicture, id },
  goal,
  notes,
  deleteClient,
}: Props) => {
  const handleDeleteButtonClick = () => {
    deleteClient(id);
  };

  return (
    <Card
      className="client-details-container mb-3"
      style={{ marginRight: "auto", marginLeft: "auto" }}
    >
      <Card.Img
        className="pb-2 card-img"
        src={profilePicture}
        alt="Card image"
      />
      <h1 className="text-center client-details-name display-6">
        {firstName} {lastName}
      </h1>
      <Separator />
      <Container fluid className="my-3">
        <p className="text-muted info-field">Contact Email</p>
        <p>{email}</p>
        <p className="text-muted info-field  mb-0">Birthday</p>
        <p>{dateToString(birthday)}</p>
      </Container>
      <Separator />

      <Container fluid className="my-3">
        <p className="text-muted info-field">Goal</p>
        <p>{goal}</p>
        <p className="text-muted info-field">Notes</p>
        <p>{notes}</p>
      </Container>
      <Separator />

      <Container className="my-3 d-grid gap-2">
        <Button variant="danger" onClick={handleDeleteButtonClick}>
          Delete
        </Button>
      </Container>
    </Card>
  );
};

export default ClientDetails;
