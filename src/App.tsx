import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import UserDashboard from "./pages/UserDashboard/UserDashboard";
import { useState } from "react";
import { Karl, User, } from "./constants/UserList";

import MainNavigation from "./layout/MainNavigation/MainNavigation";
import Footer from "./layout/Footer/Footer";

function App() {
  const [activeUser, setActiveUser] = useState<User | null>(null);

  return (
    <div className="App">
      <MainNavigation activeUser={activeUser} />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<LoginPage login={setActiveUser} />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route
          path="user/:user"
          element={<UserDashboard user={activeUser} />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
