import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import TrainerDashboard from "./pages/TrainerDashboard/TrainerDashboard";
import { useState } from "react";
import MainNavigation from "./layout/MainNavigation/MainNavigation";
import Footer from "./layout/Footer/Footer";
import { Client, Trainer } from "./data/classes";
import { Karl } from "./data/TRAINERS";
import ClientProfilePage from "./pages/ClientProfilePage/ClientProfilePage";

export type User = Trainer | Client | null;

function App() {
  const [activeUser, setActiveUser] = useState<User>(Karl);
  const navigate = useNavigate();

  const logoutUser = () => {
    setActiveUser(null);
    navigate("/");
  };

  // Renders dashboard based on activeUser class
  let dashboard: React.ReactElement;

  if (activeUser instanceof Trainer) {
    dashboard = (
      <Route
        path="trainer/:trainer"
        element={<TrainerDashboard trainer={activeUser} />}
      />
    );
  } else if (activeUser instanceof Client) {
    console.log("CLIENT DASH");
  }

  return (
    <div className="App">
      <MainNavigation activeUser={activeUser} logoutUser={logoutUser} />
      <div className="content">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signin" element={<LoginPage login={setActiveUser} />} />
          <Route path="*" element={<NotFoundPage />} />
          {dashboard!}
          <Route
            path="/trainer/:trainer/client/:client"
            element={ClientProfilePage}
          />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
