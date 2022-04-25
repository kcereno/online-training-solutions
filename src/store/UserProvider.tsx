import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Karl } from "../data/TRAINERS";
import { UserType } from "../data/types";
import UserContext, { UserContextInterface } from "./user-context";

type PropTypes = {
  children?: React.ReactNode;
};

const UserProvider = ({ children }: PropTypes) => {
  // State
  const [activeUser, setActiveUser] = useState<UserType>(Karl);

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

  // Context Value
  const UserContextValue: UserContextInterface = {
    activeUser,
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
