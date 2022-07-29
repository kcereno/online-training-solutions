import React from "react";
import { Card } from "react-bootstrap";
import { UserInfo } from "../../data/interfaces";

interface Props {
  info: UserInfo;
}

const ClientDetails = ({
  info: { firstName, lastName, birthday, email, profilePicture },
}: Props) => {
  return (
    <Card style={{ width: "250px", background: "grey" }}>
      <Card.Img
        style={{ width: "200px" }}
        src={profilePicture}
        alt="Card image"
      />
      <h1>
        {firstName} {lastName}
      </h1>
      <p>{birthday.toDateString()}</p>
      <p>{email}</p>
    </Card>
  );
};

export default ClientDetails;
