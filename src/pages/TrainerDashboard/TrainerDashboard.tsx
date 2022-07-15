import { useContext, useMemo } from "react";
import { Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { Trainer } from "../../data/interfaces";
import ClientCard from "../../components/ClientCard/ClientCard";
import useDatabase from "../../hooks/useDatabase";
import ModalContext from "../../store/modal-context";
import "./TrainerDashboard.css";
import { useTrainerActions } from "../../hooks/useTrainerActions";

type PropTypes = {
  trainer: Trainer;
};

const TrainerDashboard = ({ trainer }: PropTypes) => {
  const { fetchClients } = useTrainerActions();
  console.log(trainer.clients);
  let clients = useMemo(
    () => fetchClients(trainer.clients),
    [trainer.clients, fetchClients]
  );

  console.log(clients);

  const { showDeleteClientModal, showAddClientModal } =
    useContext(ModalContext);

  const handleAddClient = (): void => {
    showAddClientModal();
  };

  const handleDeleteClient = (clientId: string): void => {
    showDeleteClientModal(clientId);
  };

  const clientCards = clients.map((client) => (
    <ClientCard
      key={client.info.id}
      info={client.info}
      trainingPlan={client.trainingPlan}
      deleteClient={handleDeleteClient}
    />
  ));

  return (
    <section id="trainer-dashboard" className=" py-5">
      <Container className="dashboard-container" fluid>
        <Row>
          <div className="d-flex justify-content-center align-items-center">
            <h2 className="text-white display-4 ">Clients</h2>
            <FontAwesomeIcon
              className="header-button"
              icon={faUserPlus}
              color="white"
              onClick={handleAddClient}
            />
          </div>
          <hr />
        </Row>
        <Row className="d-flex justify-content-center flex-wrap header">
          {/* MAKE THIS LOOK BETTER */}
          {clients.length === 0 ? (
            <h1 style={{ color: "white", textAlign: "center" }}>
              ADD NO CLIENTS DATA
            </h1>
          ) : (
            clientCards
          )}
        </Row>
      </Container>
    </section>
  );
};

export default TrainerDashboard;

// card details: profile picture, name, age, current program,
