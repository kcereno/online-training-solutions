import { useContext } from "react";
import "./TrainerDashboard.css";
import { Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import ModalContext from "../../store/modal-context";
import { Trainer } from "../../data/interfaces";
import { clients } from "../../data/Users/Clients";
import ClientCard from "../../components/ClientCard/ClientCard";

type PropTypes = {
  trainer: Trainer;
};

const TrainerDashboard = ({ trainer }: PropTypes) => {
  const clientList = clients.filter(
    (client) => client.trainingPlan.trainer === trainer.info.id
  );

  console.log(clientList);

  const { showDeleteClientModal, showAddClientModal } =
    useContext(ModalContext);

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
          {clientCards}
        </Row>
      </Container>
    </section>
  );
};

export default TrainerDashboard;

// card details: profile picture, name, age, current program,
