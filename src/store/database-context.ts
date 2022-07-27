import { createContext } from "react";
import { User } from "../data/types";

export interface DatabaseContextInterface {
  database: User[];
  updateDatabase: React.Dispatch<React.SetStateAction<User[]>>;
  addUser: (user: User) => void;
  deleteUser: (userId: string) => void;
  validateUser: (email: string, password: string) => User | undefined;
}

const DatabaseContext = createContext<DatabaseContextInterface>(
  {} as DatabaseContextInterface
);

export default DatabaseContext;
