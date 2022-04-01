import ClientCard from "../../components/ClientCard/ClientCard";
import { Trainer, Client, User } from "../../constants/UserList";
import "./TrainerDashboard.css";

export default function TrainerDashboard({ trainer }: any) {
  console.log(trainer.clientList);

  const clients = trainer.clientList.map((client: any) => {
    return (
      <ClientCard
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
}

// card details: profile picture, name, age, current program,
