import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import "./ClientProfilePage.css";
import { useTrainerActions } from "../../hooks/useTrainerActions";
import ClientDetails from "../../components/Trainer/ClientDetails/ClientDetails";
import ClientProgram from "../../components/Trainer/ClientProgram/ClientProgram";
import useModal from "../../hooks/useModal";
import ExerciseLog from "../../components/ExerciseLog/ExerciseLog";

const ClientProfilePage = () => {
  const { client: clientId } = useParams();
  const { fetchClient, selectClient, deleteExerciseFromClientProgram } =
    useTrainerActions();
  const client = fetchClient(clientId!);
  const { showAddExerciseModal } = useModal();

  useEffect(() => {
    selectClient(clientId!);
  }, [clientId, selectClient]);

  return (
    <Container className="text-white my-5">
      <Row>
        <Col xs="12" md="4">
          <ClientDetails info={client.info} />
        </Col>
        <Col>
          <ClientProgram
            program={client.trainingPlan.program}
            addExercise={showAddExerciseModal}
            deleteExercise={deleteExerciseFromClientProgram}
          />
          <ExerciseLog logs={client.trainingPlan.log} />
        </Col>
      </Row>
    </Container>
  );
};

export default ClientProfilePage;
