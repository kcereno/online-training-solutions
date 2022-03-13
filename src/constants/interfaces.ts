// Enums
export enum Role {
  Trainer,
  Client,
}

// Intefaces

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
  role: Role;
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
