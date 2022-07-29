import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";

import "./ClientProfilePage.css";
import { useTrainerActions } from "../../hooks/useTrainerActions";
import ExerciseLog from "../../components/ExerciseLog/ExerciseLog";

const ClientProfilePage = () => {
  const { client: clientId } = useParams();

  const { fetchClient } = useTrainerActions();
  const client = fetchClient(clientId!);

  const cardStyle = { width: "auto", background: "grey" };

  return (
    <Container className="text-white my-5">
      <Row>
        <Col>
          <Card style={cardStyle}>
            <h1>{client?.info.firstName}'s' profile page</h1>
          </Card>
          <Card style={cardStyle}>
        <h1>{client?.info.firstName}'s Program</h1>
        {client!.trainingPlan.assignedExercises.map((exercise: any) => {
          return (
            <p key={exercise.name}>{`Exercise: ${exercise.name} Target Weight: ${exercise.weight} Target Reps:${exercise.reps} Target Sets: ${exercise.sets}`}</p>
          );
        })}
      </Card>
        </Col>
        <Col>
        <ExerciseLog logs={client.trainingPlan.log} /></Col>
      </Row>

     
    </Container>
  );
};

export default ClientProfilePage;
