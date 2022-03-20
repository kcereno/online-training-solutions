import { createContext, useCallback, useState } from "react";
import { USERS } from "../constants/UserList";
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
  const [activeUser, setActiveUser] = useState<any | undefined>(undefined);

  const login = useCallback((loginCredentials: LoginCredentials) => {
    const { email, password } = loginCredentials;

    let foundUser = USERS.find((user) => user.loginCredentials.email === email);

    if (!foundUser || foundUser.loginCredentials.password !== password) {
      return undefined;
    } else {
      setActiveUser(foundUser);
      return foundUser;
    }
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
