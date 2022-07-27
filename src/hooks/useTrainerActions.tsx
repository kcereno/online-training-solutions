import { useContext, useCallback } from "react";
import { Client } from "../data/interfaces";
import { User } from "../data/types";
import DatabaseContext from "../store/Database/database-context";

export const useTrainerActions = () => {
  const {
    database,
    deleteUser: deleteUserFromDB,
    addUser: addUserToDB,
  } = useContext(DatabaseContext);

  // * Client related functions

  const fetchClient = (clientId: string) => {
    return database.find((user) => user.info.id === clientId) as Client;
  };

  const fetchClients = useCallback(
    (trainerId: string) =>
      database.filter((user: User) => {
        if (user.role === "CLIENT") {
          return user.trainingPlan.trainer === trainerId;
        }
      }),
    [database]
  );

  const deleteClient = (trainerId: string, clientId: string) => {
    deleteUserFromDB(clientId);
  };

  const addClient = (newClient: Client, trainerId: string) => {
    addUserToDB(newClient);
  };

  const unassignClient = (trainerId: string, clientId: string) => {
    // const trainer = fetchUser(trainerId) as Trainer;
    // const updatedClientList = trainer.clients.filter(
    //   (client) => client !== clientId
    // );
    // const updatedTrainer = { ...trainer, clients: updatedClientList };
    // console.log(updatedTrainer);
    // updateUser(updatedTrainer);
    // updateDBUser(updatedTrainer);
  };

  const assignClient = (trainerId: string, clientId: string) => {
    // let trainer = fetchUser(trainerId);
    // const updatedClientList = [...(trainer as Trainer).clients, clientId];
    // const updatedTrainer = {
    //   ...(trainer as Trainer),
    //   clients: updatedClientList,
    // };
    // updateUser(updatedTrainer);
    // updateDBUser(updatedTrainer);
  };

  // * Exercise Functions
  // TODO change exerciseData to interface
  const addExercise = (exerciseData: any, clientId: string) => {};
  const deleteExercise = (exercise: any, clientId: string) => {};
  const editExercise = (exercise: any, clientId: string) => {};

  return { addClient, deleteClient, assignClient, fetchClients, fetchClient };
};
