import { createContext } from "react";
import { User } from "../data/types";

export interface DatabaseContextInterface {
  database: User[];
  updateDatabase: React.Dispatch<React.SetStateAction<User[]>>;
}

const DatabaseContext = createContext<DatabaseContextInterface>(
  {} as DatabaseContextInterface
);

export default DatabaseContext;
