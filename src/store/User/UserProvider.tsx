import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "../../data/types";
import UserContext, { UserContextInterface } from "./user-context";

type PropTypes = {
  children?: React.ReactNode;
};

const UserProvider = ({ children }: PropTypes) => {
  // State
  const [activeUser, setActiveUser] = useState<User | null>(null);

  // Navigate
  const navigate = useNavigate();

  // Functions
  const login = (user: User) => {
    setActiveUser(user);
    navigate("dashboard/" + user!.info.id);
  };

  const logout = () => {
    setActiveUser(null);
    navigate("/");
  };

  const updateUser = (updatedUser: User) => {
    setActiveUser((prevVal) => (prevVal = updatedUser));
  };
  // Context Value
  const UserContextValue: UserContextInterface = {
    activeUser,
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
