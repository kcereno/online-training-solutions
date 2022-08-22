import { Client } from "../../data/interfaces";
import ClientCard from "../../components/ClientCard/ClientCard";

interface Props {
  clients: Client[];
  trainerId: string;
  deleteClient: (clientId: string) => void;
}

const ClientsSection = ({ clients, trainerId, deleteClient }: Props) => {
  const clientCards = clients.map((client) => (
    <ClientCard
      key={client.info.id}
      info={client.info}
      trainer={trainerId}
      trainingPlan={client.trainingPlan}
      deleteClient={deleteClient}
    />
  ));

  return (
    <>
      {clients.length === 0 ? (
        <h1 style={{ color: "white", textAlign: "center" }}>
          No clients. Please add.
        </h1>
      ) : (
        clientCards
      )}
    </>
  );
};

export default ClientsSection;
