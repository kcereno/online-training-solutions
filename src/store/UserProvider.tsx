import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Client } from "../data/interfaces";
import { UserType } from "../data/types";
import { addToClientList, removeFromClientList } from "../data/Users/Clients";
import { assignToTrainer, removeFromTrainer } from "../data/Users/Trainers";
import UserContext, { UserContextInterface } from "./user-context";

type PropTypes = {
  children?: React.ReactNode;
};

const UserProvider = ({ children }: PropTypes) => {
  // State
  const [activeUser, setActiveUser] = useState<UserType>(null);

  // Navigate
  const navigate = useNavigate();

  // Functions
  const login = (user: UserType) => {
    setActiveUser(user);
    navigate("dashboard/" + user!.info.id);
  };

  const logout = () => {
    setActiveUser(null);
    navigate("/");
  };

  const addClient = (newClient: Client) => {
    addToClientList(newClient);
    assignToTrainer(newClient.info.id, activeUser!.info.id!);
  };

  const deleteClient = (clientId: string) => {
    removeFromClientList(clientId);
    removeFromTrainer(clientId, activeUser!.info.id);
  };

  // Context Value
  const UserContextValue: UserContextInterface = {
    activeUser,
    addClient,
    deleteClient,
    login,
    logout,
  };

  return (
    <UserContext.Provider value={UserContextValue}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
