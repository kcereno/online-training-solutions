import { useContext } from "react";
import { AuthContext } from "../../store/auth-context";

export default function UserDashboard() {
  const ctx = useContext(AuthContext);

  let userName = ctx.activeUser.info.firstName;
  console.log("Active:", userName);
  return <h1 className="text-center text-white pt-5">Hello {userName} </h1>;
}
