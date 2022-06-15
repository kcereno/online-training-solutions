import { useContext } from "react";
import UserContext from "../store/user-context";

const useUserContext = () => {
  const { activeUser, login, logout, addClient } = useContext(UserContext);

  return {
    activeUser,
    userControls: {
      login,
      logout,
    },
    addClient,
  };
};

export default useUserContext;
