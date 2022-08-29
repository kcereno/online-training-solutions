import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserType } from "../../data/types";
import UserContext, { UserContextInterface } from "./user-context";
import DatabaseContext from "../Database/database-context";
import { Client } from "../../data/interfaces";

type PropTypes = {
  children?: React.ReactNode;
};

const UserProvider = ({ children }: PropTypes) => {
  const [activeUser, setActiveUser] = useState<UserType | null>(null);
  console.log("UserProvider ~ activeUser", activeUser);

  const { database } = useContext(DatabaseContext);

  // Navigation
  const navigate = useNavigate();

  // Functions

  const validateUser = (
    email: string,
    password: string
  ): UserType | undefined =>
    database.find(
      (user) => user.info.email === email && user.info.password === password
    );

  const updateUser = (updatedUser: UserType): void => {
    setActiveUser(updatedUser);
  };

  const login = (user: UserType): void => {
    setActiveUser(user);
    navigate("dashboard/" + user!.info.id);
  };

  const logout = (): void => {
    setActiveUser(null);
    navigate("/");
  };

  // Context Value
  const UserContextValue: UserContextInterface = {
    activeUser,
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
