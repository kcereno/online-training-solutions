import { useContext } from "react";
import UserContext from "../store/user-context";

const useUserContext = () => {
  const { activeUser, login, logout } = useContext(UserContext);

  return {
    activeUser,
    userControls: {
      login,
      logout,
    },
  };
};

export default useUserContext;
