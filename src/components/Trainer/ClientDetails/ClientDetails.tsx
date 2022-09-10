import React from "react";
import { Card, Container } from "react-bootstrap";
import { UserInfo } from "../../../data/interfaces";
import Separator from "../../../UI/Separator/Separator";
import { dateToString } from "../../../data/functions";
import "./ClientDetails.css";
interface Props {
  info: UserInfo;
  goal: string;
  notes?: string;
}

const ClientDetails = ({
  info: { firstName, lastName, birthday, email, profilePicture },
  goal,
  notes,
}: Props) => {
  return (
    <Card className="client-details-container ">
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
        <p className="text-muted info-field">Birthday</p>
        <p>{dateToString(birthday)}</p>
      </Container>
      <Separator />

      <Container fluid className="my-3">
        <p className="text-muted info-field">Goal</p>
        <p>{goal}</p>
        <p className="text-muted info-field">Notes</p>
        <p>{notes}</p>
      </Container>
    </Card>
  );
};

export default ClientDetails;
