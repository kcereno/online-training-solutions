export interface UserInfo {
  firstName: string;
  lastName: string;
  birthday: Date;
  role: "TRAINER" | "CLIENT";
  profilePicture: string | null;
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
      profilePicture: string | null;
    };
    accountInfo: {
      email: string;
      password: string;
    };
  };
}
