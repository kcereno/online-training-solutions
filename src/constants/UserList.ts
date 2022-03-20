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
    protected loginCredentials: LoginCredentialsInterface
  ) {
    this.info.firstName = info.firstName;
    this.info.lastName = info.lastName;
    this.info.birthday = info.birthday;
    this.info.role = info.role;
  }
}

class Trainer extends User {
  getName(): void {
    console.log(this.info.firstName);
  }
}

class Client extends User {}

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
