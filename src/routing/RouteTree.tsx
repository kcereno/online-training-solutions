import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import ClientDashboard from "../pages/Client/ClientDashboard/ClientDashboard";
import ClientProfilePage from "../pages/Trainer/ClientProfilePage/ClientProfilePage";
import LandingPage from "../pages/Shared/LandingPage/LandingPage";
import LoginPage from "../pages/Shared/LoginPage/LoginPage";
import NotFoundPage from "../pages/Shared/NotFoundPage/NotFoundPage";
import TrainerDashboard from "../pages/Trainer/TrainerDashboard/TrainerDashboard";
import UserContext from "../store/User/user-context";
import { Trainer, Client } from "../data/interfaces";

const RouteTree = () => {
  const { activeUser } = useContext(UserContext);

  let dashboard = <NotFoundPage />;

  if (activeUser?.role === "TRAINER")
    dashboard = <TrainerDashboard trainer={activeUser as Trainer} />;
  if (activeUser?.role === "CLIENT")
    dashboard = <ClientDashboard client={activeUser as Client} />;

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
