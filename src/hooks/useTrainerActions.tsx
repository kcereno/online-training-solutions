import { useContext } from "react";
import { Client, Trainer } from "../data/interfaces";
import UserContext from "../store/user-context";
import useDatabase from "./useDatabase";

export const useTrainerActions = () => {
  const { fetchUser, addUserToDB, updateDBUser, deleteUserFromDB } =
    useDatabase();
  const { updateUser } = useContext(UserContext);

  // Add/Delete Clients
  const deleteClient = (trainerId: string, clientId: string) => {
    unassignClient(trainerId, clientId);
    deleteUserFromDB(clientId);
  };

  const addClient = (newClient: Client, trainerId: string) => {
    assignClient(trainerId, newClient.info.id);
    addUserToDB(newClient);
  };

  // Assign / Unassign Clients
  const unassignClient = (trainerId: string, clientId: string) => {
    const trainer = fetchUser(trainerId) as Trainer;

    const updatedClientList = trainer.clients.filter(
      (client) => client !== clientId
    );
    const updatedTrainer = { ...trainer, clients: updatedClientList };

    updateUser(updatedTrainer);
    updateDBUser(updatedTrainer);
  };

  const assignClient = (trainerId: string, clientId: string) => {
    let trainer = fetchUser(trainerId);

    const updatedClientList = [...(trainer as Trainer).clients, clientId];
    const updatedTrainer = {
      ...(trainer as Trainer),
      clients: updatedClientList,
    };
    updateUser(updatedTrainer);
    updateDBUser(updatedTrainer);
  };

  return { addClient, deleteClient, assignClient };
};
