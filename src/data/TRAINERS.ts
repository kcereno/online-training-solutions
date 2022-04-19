import { Trainer } from "./classes";

import { CLIENTS } from "./CLIENTS";

let [Steve, John, Dave, Daniel, Kimberly] = CLIENTS;

export const Karl = new Trainer(
  {
    id: "kcereno1989",
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
  [Steve, John, Dave, Daniel, Kimberly]
);

export const TRAINERS: Trainer[] = [Karl];
