import ClientCard from "../../components/ClientCard/ClientCard";
import "./TrainerDashboard.css";
import { Trainer } from "../../data/classes";

type Props = {
  trainer: Trainer;
};

const TrainerDashboard = ({ trainer }: Props): JSX.Element => {
  const clients = trainer.clientList.map((client: any) => {
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
      <div className="client-container d-flex justify-content-center flex-wrap ">
        {clients}
      </div>
    </div>
  );
};

export default TrainerDashboard;

// card details: profile picture, name, age, current program,
