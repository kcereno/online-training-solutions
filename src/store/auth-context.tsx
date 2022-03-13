import { createContext, useCallback, useState } from "react";
import { USERS } from "../constants/UserList";
import {
  AuthInterface,
  LoginCredentials,
  ChildrenInterface,
  UserInterface,
} from "../constants/interfaces";

export const AuthContext = createContext<AuthInterface>({
  activeUser: undefined,
  login: () => {},
  logout: () => {},
});

export default function AuthContextProvider(props: ChildrenInterface) {
  const [activeUser, setActiveUser] = useState<UserInterface | undefined>(
    undefined
  );

  const login = useCallback(
    (loginCredentials: LoginCredentials): undefined | UserInterface => {
      const { email, password } = loginCredentials;

      let foundUser = USERS.find(
        (user) => user.loginCredentials.email === email
      );

      console.log(foundUser);

      if (!foundUser || foundUser.loginCredentials.password !== password) {
        return undefined;
      } else {
        setActiveUser(foundUser);
        return foundUser;
      }
    },
    []
  );

  const logout = useCallback(() => {
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
