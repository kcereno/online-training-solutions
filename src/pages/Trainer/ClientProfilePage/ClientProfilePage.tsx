import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import "./ClientProfilePage.scss";
import { useTrainerActions } from "../../../hooks/useTrainerActions";
import ClientDetails from "../../../components/Trainer/ClientDetails/ClientDetails";
import ClientProgram from "../../../components/Trainer/ClientProgram/ClientProgram";
import useModal from "../../../hooks/useModal";
import ExerciseLog from "../../../components/Client/ExerciseLog/ExerciseLog";

const ClientProfilePage = () => {
  const { client: clientId } = useParams();

  const { fetchClient, deleteExerciseFromClientProgram } = useTrainerActions();
  const client = fetchClient(clientId!);
  const { showAddExerciseModal, showDeleteClientModal } = useModal();

  const handleDeleteExercise = (exerciseName: string) => {
    deleteExerciseFromClientProgram(clientId!, exerciseName);
  };

  return (
    <Container className="text-white content-container">
      <Row>
        <Col xs="12" md="4">
          <ClientDetails
            info={client.info}
            goal={client.trainingPlan.goal}
            notes={client.trainingPlan.notes}
            deleteClient={showDeleteClientModal}
          />
        </Col>
        <Col>
          <ClientProgram
            program={client.trainingPlan.program}
            addExercise={showAddExerciseModal}
            deleteExercise={handleDeleteExercise}
          />
          <ExerciseLog history={client.trainingPlan.history} />
        </Col>
      </Row>
    </Container>
  );
};

export default ClientProfilePage;
