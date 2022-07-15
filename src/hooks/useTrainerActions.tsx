import { Client } from "../data/interfaces";
import useDatabase from "./useDatabase";

export const useTrainerActions = () => {
  const { fetchUsers } = useDatabase();

  const fetchClients = (clientList: string[]) => {
    return fetchUsers(clientList) as Client[];
  };

  const deleteClient = () => {
    //unasign from trainer
    // remove from DUMMY
  };

  const unassignClient = () => {
    //fetch user from db
    // create updatedClient array
    // override users client array
  };

  //addClient
  //Unassign Client
  //assign CLient
  return { deleteClient, fetchClients };
};

// contains all trainer methods
