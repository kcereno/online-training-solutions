import { createContext } from "react";
import { Client } from "../data/interfaces";
import { UserType } from "../data/types";

export interface UserContextInterface {
  activeUser: UserType;
  addClient: (newClient: Client) => void;
  login: (user: UserType | null) => void;
  logout: () => void;
}

const UserContext = createContext<UserContextInterface>(
  {} as UserContextInterface
);

export default UserContext;
