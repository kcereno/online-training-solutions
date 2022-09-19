import { createContext } from "react";
import { UserType } from "../../data/types";

export interface DatabaseContextInterface {
  database: UserType[];
  updateDatabase: (updatedDatabase: UserType[]) => void;
  updateUser: (updatedUser: UserType) => void;
}

const DatabaseContext = createContext<DatabaseContextInterface>(
  {} as DatabaseContextInterface
);

export default DatabaseContext;
