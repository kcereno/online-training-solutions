import { Trainer, Client } from "./classes";

const Steve = new Client(
  {
    firstName: "Steve",
    lastName: "Porter",
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

const John = new Client(
  {
    firstName: "Jennifer",
    lastName: "Doe",
    birthday: new Date(1989, 11, 31),
    role: "CLIENT",
    profilePicture:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80",
  },
  {
    email: "trainer@gmail.com",
    password: "password",
  }
);

const Karl = new Trainer(
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
  [Steve, John]
);

export const USERS: (Trainer | Client)[] = [Karl, Steve, John];
