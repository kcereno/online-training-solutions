import { useContext } from "react";
import ClientCard from "../../components/ClientCard/ClientCard";
import { User } from "../../constants/interfaces";
import { AuthContext } from "../../store/auth-context";

export default function UserDashboard(props: any) {
  const ctx = useContext(AuthContext);
  let userName = ctx.activeUser.info.firstName;
  const clientArr = ctx.activeUser.clientList;

  console.log(ctx);

  // const clients = clientArr.map((client: any) => {
  //   const { firstName, lastName, profilePicture } = client;
  //   const clientFullName = firstName + lastName;

  //   return (
  //     <ClientCard
  //       key={clientFullName}
  //       profilePicture={profilePicture}
  //       name={clientFullName}
  //     />
  //   );
  // });

  return (
    <div className="">
      <h1 className="text-center text-white pt-5">Hello {userName} </h1>
      {/* {clients} */}
    </div>
  );
}

// card details: profile picture, name, age, current program,
