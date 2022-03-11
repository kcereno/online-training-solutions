import { createContext, useCallback, useState } from "react";
import { USERS } from "../constants/UserList";
import { ChildrenInterface, LoginCredentials } from "../constants/interfaces";

export const AuthContext = createContext({
  isLoggedIn: false,
  activeUser: undefined,
  login: (loginCredentials: LoginCredentials): any => {},
  logout: () => {},
});

export default function AuthContextProvider(props: ChildrenInterface) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeUser, setActiveUser] = useState(undefined);

  const login = useCallback(
    (loginCredentials: LoginCredentials): any => {
      const { email, password } = loginCredentials;

      let foundUser = USERS.find(
        (user: any) => user.loginCredentials.email === email
      );

      if (!foundUser || foundUser.loginCredentials.password !== password) {
        return null;
      } else {
        setIsLoggedIn(true);
        setActiveUser(foundUser);
        return activeUser;
      }
    },
    [activeUser]
  );

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  const authContextValue = {
    isLoggedIn,
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
