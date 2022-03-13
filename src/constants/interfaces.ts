
// Interfaces
export interface ChildrenInterface {
  children: object;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface UserInterface {
  info: {
    firstName: string | undefined;
    lastName: string | undefined;
  };
  role: "TRAINER" | "CLIENT";
  loginCredentials: {
    email: string | undefined;
    password: string | undefined;
  };
}

export interface AuthInterface {
  activeUser: UserInterface | undefined;
  login: Function;
  logout: Function;
}
