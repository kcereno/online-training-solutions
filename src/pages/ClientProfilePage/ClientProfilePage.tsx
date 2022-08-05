import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import "./ClientProfilePage.css";
import { useTrainerActions } from "../../hooks/useTrainerActions";
import ExerciseLog from "../../components/ExerciseLog/ExerciseLog";
import ClientDetails from "../../components/ClientDetails/ClientDetails";
import ClientProgram from "../../components/ClientProgram/ClientProgram";
import useModal from "../../hooks/useModal";

const ClientProfilePage = () => {
  const { client: clientId } = useParams();
  const { fetchClient, selectClient } = useTrainerActions();
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
          />
          <ExerciseLog logs={client.trainingPlan.logs} />
        </Col>
      </Row>
    </Container>
  );
};

export default ClientProfilePage;
