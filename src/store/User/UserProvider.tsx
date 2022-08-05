import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserType } from "../../data/types";
import UserContext, { UserContextInterface } from "./user-context";

type PropTypes = {
  children?: React.ReactNode;
};

const UserProvider = ({ children }: PropTypes) => {
  // State
  const [activeUser, setActiveUser] = useState<UserType | null>(null);
  const [selectedClient, setSelectedClient] = useState<string | null>(null);

  const selectClient = (clientId: string) => {
    setSelectedClient(clientId);
  };

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
  };

  return (
    <UserContext.Provider value={UserContextValue}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
