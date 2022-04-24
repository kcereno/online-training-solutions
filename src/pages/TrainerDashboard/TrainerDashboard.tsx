import ClientCard from "../../components/ClientCard/ClientCard";
import "./TrainerDashboard.css";
import { Client, Trainer } from "../../data/classes";
import { useState } from "react";

type Props = {
  trainer: Trainer;
};

const TrainerDashboard = ({ trainer }: Props): JSX.Element => {
  const [clientList, setClients] = useState(trainer.clients);

  const deleteClientHandler = (clientId: string): void => {
    let updatedClientList = trainer.deleteClient(clientId);
    setClients(updatedClientList);
  };

  let clients = clientList.map((client: Client) => {
    return (
      <ClientCard
        key={client.info.id}
        trainerId={trainer.info.id}
        deleteClient={deleteClientHandler}
        client={client}
      />
    );
  });

  return (
    <div className=" d-flex flex-column align-items-center py-5">
      <h2 className="text-white display-4">Clients</h2>
      <hr />
      <div className="client-container d-flex justify-content-center flex-wrap ">
        {clients}
      </div>
    </div>
  );
};

export default TrainerDashboard;

// card details: profile picture, name, age, current program,
