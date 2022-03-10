import { createContext, useCallback, useState } from "react";
import { USERS } from "../constants/UserList";

export const AuthContext = createContext({
  isLoggedIn: false,
  activeUser: undefined,
  login: (email: string, password: string): any => {},
  logout: () => {},
});

export default function AuthContextProvider(props: any) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeUser, setActiveUser] = useState(undefined);

  const login = useCallback(
    (email: string, password: string): any => {
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
