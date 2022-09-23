import { createContext } from "react";
import { UserType } from "../../data/types";

export interface UserContextInterface {
  activeUser: UserType | null;
  login: (user: UserType) => void;
  logout: () => void;
  updateActiveUser: (updatedUser: UserType) => void;
  validateUser: (email: string, password: string) => UserType | undefined;
}

const UserContext = createContext<UserContextInterface>(
  {} as UserContextInterface
);

export default UserContext;
