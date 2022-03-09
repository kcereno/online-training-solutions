import { USERS } from "../constants/UserList";

export default function validateCredentials(email: string, password: string) {
  let foundUser = USERS.find(
    (user: any) => user.loginCredentials.email === email
  );

  if (!foundUser) {
    return false;
  }
}
