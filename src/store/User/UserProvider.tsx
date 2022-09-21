import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserType } from "../../data/types";
import UserContext, { UserContextInterface } from "./user-context";
import DatabaseContext from "../Database/database-context";

type PropTypes = {
  children?: React.ReactNode;
};

const UserProvider = ({ children }: PropTypes) => {
  const [activeUser, setActiveUser] = useState<UserType | null>(null);

  const { database, updateUser } = useContext(DatabaseContext);

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

  const updateActiveUser = (updatedUser: UserType): void => {
    setActiveUser(updatedUser);
    updateUser(updatedUser);

    // const updatedDatabase = [...database];
    // const updatedUserIndex = database.findIndex(
    //   (user) => user.info.id === updatedUser.info.id
    // );

    // updatedDatabase[updatedUserIndex] = updatedUser;
    // updateDatabase(updatedDatabase);
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
    updateActiveUser,
    validateUser,
  };

  return (
    <UserContext.Provider value={UserContextValue}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
