import ClientCard from "../../components/ClientCard/ClientCard";
import "./TrainerDashboard.css";
import { Client, Trainer } from "../../data/classes";
import { useState, useContext } from "react";
import ModalContext from "../../store/modal-context";
import { Button } from "react-bootstrap";

type PropTypes = {
  trainer: Trainer;
};

const TrainerDashboard = ({ trainer }: PropTypes) => {
  // State
  const [clientList, setClients] = useState(trainer.clients);

  // Context
  const modalCtx = useContext(ModalContext);
  const { showModal, hideModal } = modalCtx;

  // Functions
  const deleteClient = (clientId: string): void => {
    
    const confirmDelete = () => {
      let updatedClientList = trainer.deleteClient(clientId);
      setClients(updatedClientList);
      hideModal();
    };

    showModal({
      title: "Attention",
      body: "Are you sure you want to delete this client?",
      footer: (
        <>
          <Button variant="secondary" onClick={hideModal}>
            Cancel
          </Button>
          <Button variant="danger" onClick={confirmDelete}>
            DELETE
          </Button>
        </>
      ),
    });
  };

  let clients = clientList.map((client: Client) => {
    return (
      <ClientCard
        key={client.info.id}
        trainerId={trainer.info.id}
        client={client}
        deleteClient={deleteClient}
      />
    );
  });

  return (
    <>
      <div className=" d-flex flex-column align-items-center py-5">
        <h2 className="text-white display-4">Clients</h2>
        <hr />
        <div className="client-container d-flex justify-content-center flex-wrap ">
          {clients}
        </div>
      </div>
    </>
  );
};

export default TrainerDashboard;

// card details: profile picture, name, age, current program,
