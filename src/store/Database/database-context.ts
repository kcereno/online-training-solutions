import { createContext } from "react";
import { UserType } from "../../data/types";

export interface DatabaseContextInterface {
  database: UserType[];
  addUser: (newUser: UserType) => void;
  fetchUser: (userId: string) => UserType | undefined;
  updateUser: (updatedUser: UserType) => void;
  deleteUser: (userId: string) => void;
}

const DatabaseContext = createContext<DatabaseContextInterface>(
  {} as DatabaseContextInterface
);

export default DatabaseContext;
