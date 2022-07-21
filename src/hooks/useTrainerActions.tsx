import { useContext, useCallback, useState } from "react";
import { Client, Trainer } from "../data/interfaces";
import UserContext from "../store/user-context";
import useDatabase from "./useDatabase";

export const useTrainerActions = () => {
  const [selectedClient, setSelectedClient] = useState<Client | null>(null);

  const { fetchUser, addUserToDB, updateDBUser, deleteUserFromDB, fetchUsers } =
    useDatabase();
  const { updateUser } = useContext(UserContext);

  const selectClient = (client: Client) => {
    selectClient(client);
  };

  const getClients = useCallback(
    (clients: string[]) => {
      return fetchUsers(clients) as Client[];
    },
    [fetchUsers]
  );

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

  return { addClient, deleteClient, assignClient, getClients, selectClient };
};
