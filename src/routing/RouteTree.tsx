import { Route, Routes } from "react-router-dom";
import { Client, Trainer } from "../data/classes";
import { UserType } from "../data/types";
import ClientDashboard from "../pages/ClientDashboard/ClientDashboard";
import ClientProfilePage from "../pages/ClientProfilePage/ClientProfilePage";
import LandingPage from "../pages/LandingPage/LandingPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import TrainerDashboard from "../pages/TrainerDashboard/TrainerDashboard";

type PropTypes = {
  activeUser: UserType;
};

const RouteTree = ({ activeUser }: PropTypes) => {
  
  // Renders certain dashboards depending on user class
  let dashboard = <NotFoundPage />;
  if (activeUser instanceof Trainer) {
    dashboard = <TrainerDashboard trainer={activeUser} />;
  } else if (activeUser instanceof Client) {
    dashboard = <ClientDashboard client={activeUser} />;
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
