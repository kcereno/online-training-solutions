import { createContext } from "react";
import { Client } from "../data/interfaces";
import { User } from "../data/types";

export interface UserContextInterface {
  activeUser: User | null;
  addClient: (newClient: Client) => void;
  deleteClient: (cliendId: string) => void;
  login: (user: User) => void;
  logout: () => void;
}

const UserContext = createContext<UserContextInterface>(
  {} as UserContextInterface
);

export default UserContext;
