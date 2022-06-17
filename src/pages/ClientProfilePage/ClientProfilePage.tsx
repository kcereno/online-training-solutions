import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ClientCard from "../../components/ClientCards/ClientCard/ClientCard";
import { ALL_CLIENTS } from "../../data/Users/Clients";
import "./ClientProfilePage.css";

const ClientProfilePage = () => {
  const params = useParams();
  console.log(params);

  const client = ALL_CLIENTS.find((client) => client.info.id === params.client);
  console.log(client);

  return (
    <Container className="text-white my-5">
      <Row>
        <Col xs={3} style={{ background: "#121212", borderRadius: "25px" }}>
          <div className="profile-head text-center my-3">
            <img
              src={client?.info.profilePicture}
              className="profile-picture rounded "
              alt=""
            />
            <h4 className="lead mt-3">{`${client?.info.firstName} ${client?.info.lastName}`}</h4>
          </div>
          <hr style={{ width: "80%", margin: "auto" }} />
          <Container>
            <div className="client-info mt-3">
              <Row>
                <Col xs={4}>
                  <p>
                    <strong>Email</strong>
                  </p>
                  <p>
                    <strong>Birthday</strong>
                  </p>
                </Col>
                <Col>
                  <p>{client?.info.email}</p>
                  <p>May 18, 1989</p>
                </Col>
              </Row>
            </div>
            <hr style={{ width: "100%", margin: "auto" }} />
            <div className="client-training-plan mt-3">
              <Row>
                <Col xs={4}>
                  <p>Trainer:</p>
                  <p>Goal</p>
                </Col>
                <Col>
                  <p>Karl C</p>
                  <p>{client?.trainingPlan.goal}</p>
                </Col>
              </Row>
            </div>
          </Container>
        </Col>

        <Col>ADD PROGRAMS HERE</Col>
      </Row>
    </Container>
  );
};

export default ClientProfilePage;
