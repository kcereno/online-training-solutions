import { Route, Routes } from "react-router-dom";
import { Client, Trainer } from "../data/classes";
import { isTrainer } from "../data/functions";
import useUserContext from "../hooks/useUserContext";
import ClientDashboard from "../pages/ClientDashboard/ClientDashboard";
import ClientProfilePage from "../pages/ClientProfilePage/ClientProfilePage";
import LandingPage from "../pages/LandingPage/LandingPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import TrainerDashboard from "../pages/TrainerDashboard/TrainerDashboard";

const RouteTree = () => {
  const { activeUser } = useUserContext();

  // Renders certain dashboards depending on activeUser class
  let dashboard: JSX.Element;

  if (!activeUser) {
    dashboard = <NotFoundPage />;
  }

  if (isTrainer(activeUser)) {
    dashboard = <TrainerDashboard trainer={activeUser as Trainer} />;
  } else {
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
