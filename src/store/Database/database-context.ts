import { createContext } from "react";
import { UserType } from "../../data/types";

export interface DatabaseContextInterface {
  database: UserType[];
  updateDatabase: (updatedDatabase: UserType[]) => void;
  // updateDatabase: React.Dispatch<React.SetStateAction<UserType[]>>;
  // fetchUser: (id: string) => UserType | undefined;
  // addUser: (user: UserType) => void;
  // deleteUser: (userId: string) => void;

  // updateUser: (updatedUser: UserType) => void;
}

const DatabaseContext = createContext<DatabaseContextInterface>(
  {} as DatabaseContextInterface
);

export default DatabaseContext;
