import { createContext } from "react";
import { UserType } from "../data/types";

export interface UserContextInterface {
  activeUser: UserType;
  login: (user: UserType) => void;
  logout: () => void;
}

const UserContext = createContext<UserContextInterface>(
  {} as UserContextInterface
);

export default UserContext;
