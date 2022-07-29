import React from "react";
import { Card, Container } from "react-bootstrap";
import { UserInfo } from "../../data/interfaces";
import { Row, Col } from "react-bootstrap";

interface Props {
  info: UserInfo;
}

const ClientDetails = ({
  info: { firstName, lastName, birthday, email, profilePicture },
}: Props) => {
  return (
    <Card style={{ width: "auto", background: "grey" }} className="rounded">
      <Card.Img className="pb-2" src={profilePicture} alt="Card image" />
      <h2 className="text-center">
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
