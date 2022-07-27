import { createContext } from "react";
import { User } from "../../data/types";

export interface UserContextInterface {
  activeUser: User | null;
  login: (user: User) => void;
  logout: () => void;
  updateUser: (updatedUser: User) => void;
}

const UserContext = createContext<UserContextInterface>(
  {} as UserContextInterface
);

export default UserContext;
