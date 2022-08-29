import { AssignedExercise, Client } from "../../data/interfaces";

export interface TrainerContexInterface {
  selectedClientId: string | null;
  selectClient: (clientId: string) => void;
  fetchClient: (clientId: string) => Client;
  fetchClients: (trainerId: string) => Client[];
  addClient: (newCLient: Client) => void;
  deleteClient: (clientId: string) => void;
  addExercise: (newExercise: AssignedExercise) => void;
  deleteExercise: (exerciseName: string) => void;
}
