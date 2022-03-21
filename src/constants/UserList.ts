import { number } from "yargs";

interface UserInfoInterface {
  firstName: string;
  lastName: string;
  birthday: Date;
  role: "TRAINER" | "CLIENT";
}

interface LoginCredentialsInterface {
  email: string;
  password: string;
}

class User {
  constructor(
    protected info: UserInfoInterface,
    public loginCredentials: LoginCredentialsInterface
  ) {
    this.info.firstName = info.firstName;
    this.info.lastName = info.lastName;
    this.info.birthday = info.birthday;
    this.info.role = info.role;
  }
}

// TODO: Use setters and getters for the methods

class Trainer extends User {
  addClient(client: Client): void {}
  removeClient(client: Client): void {}
  editCleint(client: Client): void {}
}

class Client extends User {
  recordSet(weight: number, set: number): void {}
}

const Karl = new Trainer(
  {
    firstName: "Karl",
    lastName: "Cereno",
    birthday: new Date(1989, 0o4, 18),
    role: "TRAINER",
  },
  {
    email: "trainer@gmail.com",
    password: "password",
  }
);

const Ana = new Client(
  {
    firstName: "Ana",
    lastName: "Li",
    birthday: new Date(1989, 11, 31),
    role: "CLIENT",
  },
  {
    email: "trainer@gmail.com",
    password: "password",
  }
);

export const USERS: User[] = [Karl, Ana];
