import { useContext, useCallback } from "react";
import { deleteUser } from "../data/DUMMY_DB";
import { Client, Trainer } from "../data/interfaces";
import UserContext from "../store/user-context";
import useDatabase from "./useDatabase";

export const useTrainerActions = () => {
  const { fetchUsers, fetchUser, addUser } = useDatabase();
  const { updateUser } = useContext(UserContext);

  const fetchClients = useCallback((clientList: string[]) => {
    console.log("clients fetched");
    return fetchUsers(clientList) as Client[];
  }, [fetchUsers]);

  // Add/Delete Clients
  const deleteClient = (trainerId: string, clientId: string) => {
    console.log("delete Client id", clientId);
    deleteUser(clientId);
    unassignClient(trainerId, clientId);
  };

  const addClient = (newClient: Client) => {
    addUser(newClient);
  };

  // Assign / Unassign Clients
  const unassignClient = (trainerId: string, clientId: string) => {
    let trainer = fetchUser(trainerId);

    const updatedClientList = (trainer as Trainer).clients.filter(
      (client) => client !== clientId
    );
    const updatedTrainer = {
      ...(trainer as Trainer),
      clients: updatedClientList,
    };
    updateUser(updatedTrainer);
  };

  const assignClient = (trainerId: string, clientId: string) => {
    let trainer = fetchUser(trainerId);

    const updatedClientList = [...(trainer as Trainer).clients, clientId];
    const updatedTrainer = {
      ...(trainer as Trainer),
      clients: updatedClientList,
    };
    updateUser(updatedTrainer);
  };

  return { addClient, deleteClient, fetchClients, assignClient };
};

// contains all trainer methods
