import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { Client, Trainer } from "../../data/interfaces";
import ClientCard from "../../components/ClientCard/ClientCard";
import "./TrainerDashboard.css";
import { useTrainerActions } from "../../hooks/useTrainerActions";
import useModal from "../../hooks/useModal";

interface Props {
  trainer: Trainer;
}

const TrainerDashboard = ({ trainer: { clients } }: Props) => {
  const [clientList, setClientList] = useState<Client[]>([]);
  const { getClients } = useTrainerActions();

  useEffect(() => {
    const fetchedClients = getClients(clients);
    setClientList(fetchedClients);
  }, [clients, getClients]);

  const { showDeleteClientModal, showAddClientModal } = useModal();

  const handleAddClient = (): void => {
    showAddClientModal();
  };

  const handleDeleteClient = (clientId: string): void => {
    showDeleteClientModal(clientId);
  };

  const clientCards = clientList.map((client) => (
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
