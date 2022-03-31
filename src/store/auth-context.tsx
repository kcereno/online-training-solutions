import { createContext, useCallback, useState } from "react";
import { Karl, USERS } from "../constants/UserList";
import {
  LoginCredentials,
  ChildrenInterface,
 
} from "../constants/interfaces";


type AuthContextType = {
  activeUser: any;
  login: Function;
  logout: Function;
};

export const AuthContext = createContext<AuthContextType>({
  activeUser: undefined,
  login: () => {},
  logout: () => {},
});

export default function AuthContextProvider(props: ChildrenInterface) {
  const [activeUser, setActiveUser] = useState<any | undefined>(Karl); // Change to trainer/client/undefined typr


  const login = useCallback((loginCredentials: LoginCredentials) => {

  }, []);

  const logout = useCallback((): void => {
    setActiveUser(undefined);
  }, []);

  const authContextValue = {
    login,
    logout,
    activeUser,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {props.children}
    </AuthContext.Provider>
  );
}
