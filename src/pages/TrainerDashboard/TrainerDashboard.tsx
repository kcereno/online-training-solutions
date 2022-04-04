import ClientCard from "../../components/ClientCard/ClientCard";
import { Trainer, Client } from "../../data/classes";
import "./TrainerDashboard.css";

type Props = {
  trainer: any;
};

const TrainerDashboard = ({ trainer }: Props) => {
  console.log(trainer);
  const clients = trainer?.clients.map((client: any) => {
    return (
      <ClientCard
        key={`
          ${client.info.firstName}${client.info.lastName}
        `}
        firstName={client.info.firstName}
        lastName={client.info.lastName}
        profilePicture={client.info.profilePicture}
      />
    );
  });

  return (
    <div className=" d-flex flex-column align-items-center py-5">
      <h2 className="text-white display-4">Clients</h2>
      <hr />
      <div className="clients d-flex ">{clients}</div>
    </div>
  );
};

export default TrainerDashboard;

// card details: profile picture, name, age, current program,
