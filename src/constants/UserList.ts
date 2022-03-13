import { UserInterface, Role } from "./interfaces";

export const USERS: UserInterface[] = [
  {
    info: {
      firstName: "Karl",
      lastName: "Cereno",
    },
    role: Role.Trainer,
    loginCredentials: {
      email: "trainer@gmail.com",
      password: "password",
    },
  },
  {
    info: {
      firstName: "Ana",
      lastName: "Li",
    },
    role: Role.Client,
    loginCredentials: {
      email: "client@gmail.com",
      password: "password",
    },
  },
];
