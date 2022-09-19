import { useContext, useCallback } from "react";
import { AssignedExercise, Client } from "../data/interfaces";
import { UserType } from "../data/types";
import DatabaseContext from "../store/Database/database-context";

export const useTrainerActions = () => {
  const { database, addUser, deleteUser, fetchUser, updateUser } = useContext(DatabaseContext);

  // * Fetch
  const fetchClient = (clientId: string) => fetchUser(clientId) as Client

  const fetchClients = useCallback(
    (trainerId: string): UserType[] =>
      database.filter(
        (user) =>
          user.role === "CLIENT" && user.trainingPlan.trainer === trainerId
      ),
    [database]
  );

  // * Client CRUD
  const addClient = (newClient: Client): void => {
    addUser(newClient)
  };

  const deleteClient = (clientId: string): void => {
    deleteClient(clientId)
  };

  // * Exercise CRUD
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

  return {
    addClient,
    deleteClient,
    fetchClients,
    fetchClient,
    addExerciseToClientProgram,
    deleteExerciseFromClientProgram,
  };
};
