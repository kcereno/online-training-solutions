import { useContext } from "react";
import { Client, Trainer } from "../data/classes";
import UserContext from "../store/user-context";

const useUserContext = () => {
  const { activeUser, logout, login } = useContext(UserContext);

  return { activeUser, actions: { login, logout } };
};

export default useUserContext;
