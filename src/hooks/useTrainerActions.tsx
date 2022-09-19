import { useContext, useCallback } from "react";
import { AssignedExercise, Client } from "../data/interfaces";
import { UserType } from "../data/types";
import DatabaseContext from "../store/Database/database-context";

export const useTrainerActions = () => {
  const { database, updateDatabase, updateUser } = useContext(DatabaseContext);

  // * Fetch
  const fetchClient = (clientId: string) =>
    database.find((user) => user.info.id === clientId) as Client;

  const fetchClients = useCallback(
    (trainerId: string): UserType[] =>
      database.filter(
        (user) =>
          user.role === "CLIENT" && user.trainingPlan.trainer === trainerId
      ),
    [database]
  );

  // * Client CRUD
  const addClient = (newClient: Client, trainerId: string): void => {
    const updatedDatabase = [...database, newClient];

    updateDatabase(updatedDatabase);
  };
  const deleteClient = (clientId: string): void => {
    const updatedDatabase = database.filter(
      (user) => user.info.id !== clientId
    );

    updateDatabase(updatedDatabase);
  };

  // * Exercise Functions
  // TODO change exerciseData to interface
  const addExerciseToClientProgram = (
    clientId: string,
    newExercise: AssignedExercise
  ) => {
    const client = fetchClient(clientId!);

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

  const deleteExerciseFromClientProgram = (
    clientId: string,
    exerciseName: string
  ) => {
    const client = fetchClient(clientId!);

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
    fetchClients,
    fetchClient,
    addExerciseToClientProgram,
    deleteExerciseFromClientProgram,
  };
};
