export interface ChildrenInterface {
  children: object;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface User {
  info: {
    firstName: string;
    lastName: string;
  };
  loginCredentials: {
    email: string;
    password: string;
  };
  role: "TRAINER" | "CLIENT";
}

