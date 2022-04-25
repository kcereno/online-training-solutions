import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import TrainerDashboard from "./pages/TrainerDashboard/TrainerDashboard";
import { useContext, useState } from "react";
import MainNavigation from "./layout/MainNavigation/MainNavigation";
import Footer from "./layout/Footer/Footer";
import { Client, Trainer } from "./data/classes";
import { Karl } from "./data/TRAINERS";
import ClientProfilePage from "./pages/ClientProfilePage/ClientProfilePage";
import ClientDashboard from "./pages/ClientDashboard/ClientDashboard";
import UserContext from "./store/user-context";
import CustomModal from "./layout/Modal/CustomModal";

export type User = Trainer | Client | null;

function App() {
  const userCtx = useContext(UserContext);
  const { activeUser } = userCtx;

  // Renders certain dashboards depending on user class
  let dashboard = <NotFoundPage />;
  if (activeUser instanceof Trainer) {
    dashboard = <TrainerDashboard trainer={activeUser} />;
  } else if (activeUser instanceof Client) {
    dashboard = <ClientDashboard client={activeUser} />;
  }

  return (
    <div className="App">
      <CustomModal />

      <MainNavigation />
      <div className="content">
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
      </div>

      <Footer />
    </div>
  );
}

export default App;
