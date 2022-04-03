import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import TrainerDashboard from "./pages/TrainerDashboard/TrainerDashboard";
import { useState } from "react";
import { User, Client, Karl, Trainer } from "./data/USERS";
import MainNavigation from "./layout/MainNavigation/MainNavigation";
import Footer from "./layout/Footer/Footer";

function App() {
  const [activeUser, setActiveUser] = useState<Trainer | Client | null>(Karl);

  return (
    <div className="App">
      <MainNavigation activeUser={activeUser} />
      <div className="content">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signin" element={<LoginPage login={setActiveUser} />} />
          <Route path="*" element={<NotFoundPage />} />

          <Route
            path="user/:trainer"
            element={<TrainerDashboard trainer={activeUser} />}
          />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
