import { useContext, useCallback, useState } from "react";
import { AssignedExercise, Client } from "../data/interfaces";
import { UserType } from "../data/types";
import DatabaseContext from "../store/Database/database-context";
import UserContext from "../store/User/user-context";

export const useTrainerActions = () => {
  const {
    database,
    deleteUser: deleteUserFromDB,
    addUser: addUserToDB,
    updateUser,
  } = useContext(DatabaseContext);

  const { selectClient, selectedClient } = useContext(UserContext);

  // * Client related functions

  const fetchClient = (clientId: string) => {
    return database.find((user) => user.info.id === clientId) as Client;
  };

  const fetchClients = useCallback(
    (trainerId: string) =>
      database.filter((user: UserType) => {
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

  const unassignClient = (trainerId: string, clientId: string) => {};

  const assignClient = (trainerId: string, clientId: string) => {};

  // * Exercise Functions
  // TODO change exerciseData to interface
  const addExerciseToClientProgram = (newExercise: AssignedExercise) => {
    const client = fetchClient(selectedClient!);

    const updatedProgram: AssignedExercise[] = [
      ...client.trainingPlan.program,
      newExercise,
    ];

    const updatedClient = {
      ...client,
      trainingPlan: { ...client.trainingPlan, program: updatedProgram },
    };

    updateUser(updatedClient);
  };
  const deleteExerciseFromClientProgram = (exerciseName: string) => {
    const client = fetchClient(selectedClient!);

    const updatedProgram = client.trainingPlan.program.filter(
      (entry) => entry.name !== exerciseName
    );

    const updatedClient = {
      ...client,
      trainingPlan: { ...client.trainingPlan, program: updatedProgram },
    };

    updateUser(updatedClient);
  };

  const editExercise = (exercise: any, clientId: string) => {};

  return {
    addClient,
    deleteClient,
    assignClient,
    fetchClients,
    fetchClient,
    addExerciseToClientProgram,
    deleteExerciseFromClientProgram,
    selectClient,
  };
};
