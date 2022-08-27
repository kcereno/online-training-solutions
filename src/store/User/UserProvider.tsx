import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserType } from "../../data/types";
import UserContext, { UserContextInterface } from "./user-context";
import { Client } from "../../data/interfaces";

import DatabaseContext from "../Database/database-context";
import { act } from "react-dom/test-utils";

type PropTypes = {
  children?: React.ReactNode;
};

const UserProvider = ({ children }: PropTypes) => {
  // State
  const [activeUser, setActiveUser] = useState<UserType | null>(null);
  const [selectedClient, setSelectedClient] = useState<string | null>(null);

  const { database } = useContext(DatabaseContext);

  const validateUser = (
    email: string,
    password: string
  ): UserType | undefined =>
    database.find(
      (user) => user.info.email === email && user.info.password === password
    );

  const selectClient = (clientId: string): void => {
    setSelectedClient(clientId);
  };

  // Navigation
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

  const updateUser = (updatedUser: UserType) => {
    setActiveUser((prevVal) => (prevVal = updatedUser));
  };
  // Context Value
  const UserContextValue: UserContextInterface = {
    activeUser,
    selectedClient,
    selectClient,
    login,
    logout,
    updateUser,
    validateUser,
  };

  return (
    <UserContext.Provider value={UserContextValue}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
