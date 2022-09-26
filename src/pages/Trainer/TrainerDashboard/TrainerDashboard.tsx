import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { Client, Trainer } from "../../../data/interfaces";
import { useTrainerActions } from "../../../hooks/useTrainerActions";
import useModal from "../../../hooks/useModal";
import ClientsSection from "../../../sections/Trainer/ClientsSection/ClientsSection";
import "./TrainerDashboard.scss";
import Separator from "../../../UI/Separator/Separator";

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

  const { showAddClientModal } = useModal();

  useEffect(() => {
    const fetchedClients = fetchClients(trainerId);
    setClientList(fetchedClients as Client[]);
  }, [fetchClients, trainerId]);

  const handleAddClient = (): void => {
    showAddClientModal();
  };

  return (
    <Container className="section" fluid>
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
        <Separator width={90} />
      </Row>
      <Row>
        <ClientsSection clients={clientList} trainerId={trainerId} />
      </Row>
    </Container>
  );
};

export default TrainerDashboard;
