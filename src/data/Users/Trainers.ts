import { Trainer } from "../classes";
import { getClients } from "../functions";

export const Karl = new Trainer({
  basicInfo: {
    id: "kcereno1989",
    firstName: "Karl",
    lastName: "Cereno",
    birthday: new Date(1989, 0o4, 18),
    email: "trainer@gmail.com",
    password: "password",
    profilePicture:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  clientList: getClients("kcereno1989"),
});

export const TRAINERS: Trainer[] = [Karl];
