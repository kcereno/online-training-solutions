import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";

import useDatabase from "../../hooks/useDatabase";

import { Client } from "../../data/interfaces";

import "./ClientProfilePage.css";

const ClientProfilePage = () => {
  const { client: clientId } = useParams();
  const { fetchUser } = useDatabase();
  const client = fetchUser(clientId!) as Client;

  const cardStyle = { width: "auto", background: "grey" };

  return (
    <Container className="text-white my-5">
      <Card style={cardStyle}>
        <h1>{client?.info.firstName}'s' profile page</h1>
      </Card>
      <Card style={cardStyle}>
        <h1>{client?.info.firstName}'s Program</h1>
        {client.trainingPlan.assignedExercises.map((exercise) => {
          return (
            <p>{`Exercise: ${exercise.exercise} Target Weight: ${exercise.weight} Target Reps:${exercise.reps} Target Sets: ${exercise.sets}`}</p>
          );
        })}
      </Card>

      {/* <Row>
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
      </Row> */}
    </Container>
  );
};

export default ClientProfilePage;
