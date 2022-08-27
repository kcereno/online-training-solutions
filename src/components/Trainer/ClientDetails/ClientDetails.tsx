import React from "react";
import { Card, Container } from "react-bootstrap";
import { UserInfo } from "../../../data/interfaces";
import { Row, Col } from "react-bootstrap";
import "./ClientDetails.css";

interface Props {
  info: UserInfo;
}

const ClientDetails = ({
  info: { firstName, lastName, birthday, email, profilePicture },
}: Props) => {
  return (
    <Card className="client-details-container my-3">
      <Card.Img className="pb-2" src={profilePicture} alt="Card image" />
      <h2 className="text-center client-details-name">
        {firstName} {lastName}
      </h2>
      <Container fluid>
        <Row>
          <Col>Email</Col>
          <Col>{email}</Col>
        </Row>{" "}
        <Row>
          <Col>Date of Birth</Col>
          {/* TODO: Remove day */}
          <Col>{birthday.toDateString()}</Col>
        </Row>
      </Container>
      {/* <p>{birthday.toDateString()}</p>
      <p>{email}</p> */}
    </Card>
  );
};

export default ClientDetails;
