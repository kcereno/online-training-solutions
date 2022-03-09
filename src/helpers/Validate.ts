import { USERS } from "../constants/UserList";

export default function validate(email: string, password: string) {
  let foundUser = USERS.find(
    (user: any) => user.loginCredentials.email === email
  );

  console.log(foundUser.password === password);
  console.log(foundUser);
}
