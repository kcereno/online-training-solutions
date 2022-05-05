import { createContext } from "react";
import { User } from "../data/classes";

export interface UserContextInterface {
  activeUser: User| null;
  login: (user: User) => void;
  logout: () => void;
}

const UserContext = createContext<UserContextInterface>(
  {} as UserContextInterface
);

export default UserContext;
