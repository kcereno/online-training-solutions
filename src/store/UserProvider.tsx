import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Client, Trainer } from "../data/interfaces";
import { UserType } from "../data/types";
import { ALL_CLIENTS } from "../data/Users/Clients";
import { kcereno } from "../data/Users/Trainers";
import UserContext, { UserContextInterface } from "./user-context";

type PropTypes = {
  children?: React.ReactNode;
};

const UserProvider = ({ children }: PropTypes) => {
  // State
  const [activeUser, setActiveUser] = useState<UserType>(kcereno);

  // Navigate
  const navigate = useNavigate();

  // Functions
  const login = (user: UserType) => {
    setActiveUser(user);
    navigate("dashboard/" + user?.info.id);
  };

  const logout = () => {
    setActiveUser(null);
    navigate("/");
  };

  const addClient = (newClient: Client) => {
    (activeUser as Trainer).clients.push(newClient);
  };

  // Context Value
  const UserContextValue: UserContextInterface = {
    activeUser,
    addClient,
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
