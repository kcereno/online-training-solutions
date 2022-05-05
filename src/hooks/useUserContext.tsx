import { useContext } from "react";
import UserContext from "../store/user-context";

const useUserContext = () => {
  const { activeUser, logout, login } = useContext(UserContext);

  return { activeUser, login, logout };
};

export default useUserContext;
