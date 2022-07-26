import { useContext, useCallback, useState } from "react";
import { Client, Trainer } from "../data/interfaces";
import UserContext from "../store/user-context";
import useDatabase from "./useDatabase";

export const useTrainerActions = () => {
  const {
    fetchUser,
    addUserToDB,
    updatedUserinDB,
    deleteUserFromDB,
    fetchUsers,
  } = useDatabase();
  const { updateUser } = useContext(UserContext);

  // * Client related functions
  const getClients = useCallback(
    (clients: string[]) => {
      return fetchUsers(clients) as Client[];
    },
    [fetchUsers]
  );

  const deleteClient = (trainerId: string, clientId: string) => {
    unassignClient(trainerId, clientId);
    // deleteUserFromDB(clientId);
  };

  const addClient = (newClient: Client, trainerId: string) => {
    assignClient(trainerId, newClient.info.id);
    addUserToDB(newClient);
  };

  const unassignClient = (trainerId: string, clientId: string) => {
    const trainer = fetchUser(trainerId) as Trainer;

    const updatedClientList = trainer.clients.filter(
      (client) => client !== clientId
    );
    const updatedTrainer = { ...trainer, clients: updatedClientList };
    console.log(updatedTrainer);
    // updateUser(updatedTrainer);
    // updateDBUser(updatedTrainer);
  };

  const assignClient = (trainerId: string, clientId: string) => {
    let trainer = fetchUser(trainerId);

    const updatedClientList = [...(trainer as Trainer).clients, clientId];
    const updatedTrainer = {
      ...(trainer as Trainer),
      clients: updatedClientList,
    };
    updateUser(updatedTrainer);
    // updateDBUser(updatedTrainer);
  };

  // * Exercise Functions
  // TODO change exerciseData to interface
  const addExercise = (exerciseData: any, clientId: string) => {};
  const deleteExercise = (exercise: any, clientId: string) => {};
  const editExercise = (exercise: any, clientId: string) => {};

  return { addClient, deleteClient, assignClient, getClients };
};
