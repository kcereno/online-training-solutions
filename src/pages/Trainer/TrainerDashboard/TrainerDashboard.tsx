import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { Client, Trainer } from "../../../data/interfaces";
import { useTrainerActions } from "../../../hooks/useTrainerActions";
import useModal from "../../../hooks/useModal";
import ClientsSection from "../../../sections/Trainer/ClientsSection/ClientsSection";
import "./TrainerDashboard.css";

interface Props {
  trainer: Trainer;
}

const TrainerDashboard = ({
  trainer: {
    info: { id: trainerId },
  },
}: Props) => {
  const [clientList, setClientList] = useState<Client[]>([]);
  const { fetchClients } = useTrainerActions();

  const { showDeleteClientModal, showAddClientModal } = useModal();

  useEffect(() => {
    const fetchedClients = fetchClients(trainerId);
    setClientList(fetchedClients as Client[]);
  }, [fetchClients, trainerId]);

  const handleAddClient = (): void => {
    showAddClientModal();
  };

  const handleDeleteClient = (clientId: string): void => {
    showDeleteClientModal(clientId);
  };

  return (
    <section className=" py-5 trainer-dashboard">
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
          <ClientsSection
            clients={clientList}
            trainerId={trainerId}
            deleteClient={handleDeleteClient}
          />
        </Row>
      </Container>
    </section>
  );
};

export default TrainerDashboard;
