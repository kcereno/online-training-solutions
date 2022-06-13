import React, { useContext } from "react";
import UserContext from "../../store/user-context";
import TrainerDashboard from "./TrainerDashboard/TrainerDashboard";

import NoUserPage from "../NoUserPage/NoUserPage";

const Dashboard = () => {
  // const {  } = useContext(UserContext);

  let content: JSX.Element = <NoUserPage />;

  // if (activeUser instanceof Trainer) {
  //   content = <TrainerDashboard clientList={activeUser.clients} />;
  // }

  return <>{content}</>;
};

export default Dashboard;
