import ClientCard from "../../components/ClientCard/ClientCard";
import "./TrainerDashboard.css";
import { Client, Trainer } from "../../data/classes";
import { useContext } from "react";
import ModalContext from "../../store/modal-context";
import { Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";

type PropTypes = {
  trainer: Trainer;
};

const TrainerDashboard = ({ trainer }: PropTypes) => {
  const clientList = trainer.clients;

  const { showDeleteClientModal, showAddClientModal } =
    useContext(ModalContext);

  const HandleAddClient = (): void => {
    showAddClientModal()
  };

  const HandleDeleteClient = (clientId: string): void => {
    showDeleteClientModal(clientId);
  };

  let clientCards = clientList.map((client: Client) => {
    return (
      <ClientCard
        key={client.info.id}
        info={client.info}
        trainingPlan={client.trainingPlan}
        deleteClient={HandleDeleteClient}
      />
    );
  });

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
              onClick={HandleAddClient}
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
