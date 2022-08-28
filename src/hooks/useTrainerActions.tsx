import { useContext, useCallback, useState } from "react";
import { AssignedExercise, Client } from "../data/interfaces";
import { UserType } from "../data/types";
import DatabaseContext from "../store/Database/database-context";

export const useTrainerActions = () => {
  const [selectedClientId, setSelectedClientId] = useState<string | null>(null);
  console.log(selectedClientId);

  const {
    database,
    deleteUser: deleteUserFromDB,
    addUser: addUserToDB,
    updateUser,
  } = useContext(DatabaseContext);

  // * Client related functions

  const selectClient = (clientId: string): void => {
    setSelectedClientId(clientId);
  };

  const fetchClient = (clientId: string) => {
    return database.find((user) => user.info.id === clientId) as Client;
  };

  const fetchClients = useCallback(
    (trainerId: string): UserType[] =>
      database.filter((user: UserType) =>
        (user as Client).trainingPlan.trainer === trainerId
      ),
    [database]
  );

  const deleteClient = (trainerId: string, clientId: string):void => {
    deleteUserFromDB(clientId);
  };

  const addClient = (newClient: Client, trainerId: string):void => {
    addUserToDB(newClient);
  };

  // * Exercise Functions

  const addExerciseToClientProgram = (newExercise: AssignedExercise):void => {
    const client = fetchClient(selectedClientId!);

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
  const deleteExerciseFromClientProgram = (exerciseName: string):void => {
    const client = fetchClient(selectedClientId!);

    const updatedProgram = client.trainingPlan.program.filter(
      (entry) => entry.name !== exerciseName
    );

    const updatedClient = {
      ...client,
      trainingPlan: { ...client.trainingPlan, program: updatedProgram },
    };

    updateUser(updatedClient);
  };

  // const editExercise = (exercise: any, clientId: string) => { };

  return {
    addClient,
    deleteClient,
    fetchClients,
    fetchClient,
    addExerciseToClientProgram,
    deleteExerciseFromClientProgram,
    selectClient,
  };
};
