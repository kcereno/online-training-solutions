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


