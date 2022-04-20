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
import ClientDashboard from "./pages/ClientDashboard/ClientDashboard";

export type User = Trainer | Client | null;

function App() {
  const [activeUser, setActiveUser] = useState<User>(null);

  const navigate = useNavigate();

  const logoutUser = () => {
    setActiveUser(null);
    navigate("/");
  };

  let dashboard = <NotFoundPage />;
  if (activeUser instanceof Trainer) {
    dashboard = <TrainerDashboard trainer={activeUser} />;
  } else if (activeUser instanceof Client) {
    dashboard = <ClientDashboard client={activeUser} />;
  }

  return (
    <div className="App">
      <MainNavigation activeUser={activeUser} logoutUser={logoutUser} />
      <div className="content">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signin" element={<LoginPage login={setActiveUser} />} />
          <Route path="/dashboard/:user" element={dashboard} />
          <Route
            path="/dashboard/:user/client/:client"
            element={<ClientProfilePage/>}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
