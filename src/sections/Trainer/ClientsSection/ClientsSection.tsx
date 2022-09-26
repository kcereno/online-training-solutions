import { Client } from "../../../data/interfaces";
import ClientCard from "../../../components/Trainer/ClientCard/ClientCard";
import "../../../global.scss";

interface Props {
  clients: Client[];
  trainerId: string;
}

const ClientsSection = ({ clients, trainerId }: Props) => {
  const clientCards = clients.map((client) => (
    <ClientCard
      key={client.info.id}
      info={client.info}
      trainer={trainerId}
      trainingPlan={client.trainingPlan}
    />
  ));

  return (
    <div className="d-flex flex-wrap justify-content-center ">
      {clients.length === 0 ? (
        <h1 style={{ color: "white", textAlign: "center" }}>
          No clients. Please add.
        </h1>
      ) : (
        clientCards
      )}
    </div>
  );
};

export default ClientsSection;
