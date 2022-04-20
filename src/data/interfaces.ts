import { Trainer } from "./classes";

export interface UserInfo {
  id: string;
  firstName: string;
  lastName: string;
  birthday: Date;
  role: "TRAINER" | "CLIENT";
  trainer?: Trainer;
  profilePicture: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface UserData {
  data: {
    basicInfo: {
      firstName: string;
      lastName: string;
      birthday: Date;
      role: "TRAINER" | "CLIENT";
      profilePicture: string;
    };
    accountInfo: {
      email: string;
      password: string;
    };
  };
}
