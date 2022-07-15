import { useContext } from "react";
import { deleteUser } from "../data/DUMMY_DB";
import { Client, Trainer } from "../data/interfaces";
import UserContext from "../store/user-context";
import useDatabase from "./useDatabase";

export const useTrainerActions = () => {
  const { fetchUsers, fetchUser } = useDatabase();
  const { activeUser } = useContext(UserContext);

  const fetchClients = (clientList: string[]) => {
    console.log("clients fetched");
    return fetchUsers(clientList) as Client[];
  };

  const deleteClient = (trainerId: string, clientId: string) => {
    unassignClient(trainerId, clientId);
    deleteUser(clientId);
  };

  const unassignClient = (trainerId: string, clientId: string) => {
    let trainer = fetchUser(trainerId);

    const updatedClientList = (trainer as Trainer).clients.filter(
      (client) => client !== clientId
    );

    (trainer as Trainer).clients = updatedClientList;
  };

  //addClient
  //Unassign Client
  //assign CLient
  return { deleteClient, fetchClients };
};

// contains all trainer methods
