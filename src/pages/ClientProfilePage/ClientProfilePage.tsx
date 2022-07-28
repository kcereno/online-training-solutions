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
    // Profile Name Card
    <Container className="text-white my-5">
      <Card style={cardStyle}>
        <h1>{client?.info.firstName}'s' profile page</h1>
      </Card>

      {/* Program Card */}
      <Card style={cardStyle}>
        <h1>{client?.info.firstName}'s Program</h1>
        {client!.trainingPlan.assignedExercises.map((exercise: any) => {
          return (
            <p>{`Exercise: ${exercise.name} Target Weight: ${exercise.weight} Target Reps:${exercise.reps} Target Sets: ${exercise.sets}`}</p>
          );
        })}
      </Card>

      {/* Exercise Log */}

      <ExerciseLog logs={client.trainingPlan.log} />
    </Container>
  );
};

export default ClientProfilePage;
