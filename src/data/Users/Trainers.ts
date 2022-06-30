import { Trainer } from "../interfaces";

export const trainers: Trainer[] = [
  {
    role: "TRAINER",
    info: {
      id: "kcereno",
      firstName: "Karl",
      lastName: "Cereno",
      email: "trainer@gmail.com",
      birthday: new Date(1989, 0o4, 18),
      password: "password",
      profilePicture:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    clients: ["adraymon", "ddawson", "ebutterworth", "mbrady", "tinnes"],
  },
];
