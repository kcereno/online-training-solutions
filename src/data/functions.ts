import { Trainer, Client, User } from "./classes";
import { CLIENTS } from "./Users/Clients";

export const isTrainer = (user: User | null) => {
  return user instanceof Trainer;
};

export const getClients = (trainerId: string) =>
  CLIENTS.filter((client: Client) => client.trainingPlan.trainer === trainerId);

export const ping = () => {
  console.log("ping");
};
