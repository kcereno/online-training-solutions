import { Route, Routes } from "react-router-dom";
import useUserContext from "../hooks/useUserContext";
import ClientDashboard from "../pages/ClientDashboard/ClientDashboard";
import ClientProfilePage from "../pages/ClientProfilePage/ClientProfilePage";
import LandingPage from "../pages/LandingPage/LandingPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import TrainerDashboard from "../pages/TrainerDashboard/TrainerDashboard";

const RouteTree = () => {
  const { activeUser } = useUserContext();
  let dashboard = <NotFoundPage />;

  if (activeUser?.role === "TRAINER") {
    dashboard = <TrainerDashboard trainer={activeUser} />;
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
