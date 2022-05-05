import { Trainer, User } from "./classes";

export const isTrainer = (user: User) => {
  return user instanceof Trainer;
};
