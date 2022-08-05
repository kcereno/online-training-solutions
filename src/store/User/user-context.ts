import { createContext } from "react";
import { UserType } from "../../data/types";

export interface UserContextInterface {
  activeUser: UserType | null;
  selectedClient: string | null;
  selectClient: (clientId: string) => void;
  login: (user: UserType) => void;
  logout: () => void;
  updateUser: (updatedUser: UserType) => void;
}

const UserContext = createContext<UserContextInterface>(
  {} as UserContextInterface
);

export default UserContext;
