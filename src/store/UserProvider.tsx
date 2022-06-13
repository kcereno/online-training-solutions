import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserType } from "../data/types";
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
    // setActiveUser(null);
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
