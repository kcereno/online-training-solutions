import { useContext, useCallback, useState } from "react";
import { Client, Trainer } from "../data/interfaces";
import { User } from "../data/types";
import DatabaseContext from "../store/database-context";
import UserContext from "../store/user-context";
import useDatabase from "./useDatabase";

export const useTrainerActions = () => {
  const {
    database,
    deleteUser: deleteUserFromDB,
    addUser: addUserToDB,
  } = useContext(DatabaseContext);

  const { updateUser } = useContext(UserContext);

  // * Client related functions
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

  return { addClient, deleteClient, assignClient, fetchClients };
};
