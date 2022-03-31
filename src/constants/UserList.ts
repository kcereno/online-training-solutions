interface UserInfoInterface {
  firstName: string;
  lastName: string;
  birthday: Date;
  role: "TRAINER" | "CLIENT";
  profilePicture: string;
}

interface LoginCredentialsInterface {
  email: string;
  password: string;
}

interface ProgramInterface {
  name: string;
  exerciseList: ExerciseInterface[];
}

interface ExerciseInterface {
  name: string;
  weight: string;
  reps: string;
}

export class User {
  constructor(
    public info: UserInfoInterface,
    public loginCredentials: LoginCredentialsInterface
  ) {
    this.info.firstName = info.firstName;
    this.info.lastName = info.lastName;
    this.info.birthday = info.birthday;
    this.info.role = info.role;
  }
}

// TODO: Use setters and getters for the methods

 export class Trainer extends User {
  constructor(
    public info: UserInfoInterface,
    public loginCredentials: LoginCredentialsInterface,
    public clientList: Client[]
  ) {
    super(info, loginCredentials);
  }

  // client: object = {
  //   add(client: Client): void {},
  //   remove(client: Client): void {},
  //   edit(client: Client): void {},
  // };
  // program: object = {
  //   add(client: Client, program: ProgramInterface): void {},
  //   remove(client: Client, program: ProgramInterface): void {},
  //   edit(client: Client, program: ProgramInterface): void {},
  // };
  // exercise: object = {
  //   add(client: Client, exercise: ExerciseInterface): void {},
  //   remove(client: Client, exercise: ExerciseInterface): void {},
  //   edit(client: Client, exercise: ExerciseInterface): void {},
  // };
}

export class Client extends User {
  recordSet(weight: number, set: number): void {}
  editSet(weight: number, set: number): void {}
}

const Ana = new Client(
  {
    firstName: "Ana",
    lastName: "Li",
    birthday: new Date(1989, 11, 31),
    role: "CLIENT",
    profilePicture:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    email: "trainer@gmail.com",
    password: "password",
  }
);

const Ana2 = new Client(
  {
    firstName: "Ana2",
    lastName: "Li",
    birthday: new Date(1989, 11, 31),
    role: "CLIENT",
    profilePicture:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    email: "trainer@gmail.com",
    password: "password",
  }
);

export const Karl = new Trainer(
  {
    firstName: "Karl",
    lastName: "Cereno",
    birthday: new Date(1989, 0o4, 18),
    role: "TRAINER",
    profilePicture:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    email: "trainer@gmail.com",
    password: "password",
  },
  [Ana]
);

export const USERS: User[] = [Karl, Ana, Ana2];
