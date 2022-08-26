import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import ClientDashboard from "../pages/ClientDashboard/ClientDashboard";
import ClientProfilePage from "../pages/ClientProfilePage/ClientProfilePage";
import LandingPage from "../pages/LandingPage/LandingPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import TrainerDashboard from "../pages/TrainerDashboard/TrainerDashboard";
import UserContext from "../store/User/user-context";
import { Trainer, Client } from "../data/interfaces";

const RouteTree = () => {
  const { activeUser } = useContext(UserContext);

  let dashboard = <NotFoundPage />;

  if (activeUser?.role === "TRAINER") {
    dashboard = <TrainerDashboard trainer={activeUser as Trainer} />;
  } else if (activeUser?.role === "CLIENT") {
    dashboard = <ClientDashboard client={activeUser as Client} />;
  }

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signin" element={<LoginPage />} />
      <Route path="/dashboard/:user" element={dashboard} />
      <Route
        path="/dashboard/:user/client/:client"
        element={<ClientProfilePage />}
      />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default RouteTree;
