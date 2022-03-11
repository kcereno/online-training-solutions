import { Route, Routes } from "react-router-dom";
import LandingPage from "../pages/LandingPage/LandingPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import UserDashboard from "../pages/UserDashboard/UserDashboard";

export default function RouteList() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signin" element={<LoginPage />} />
      <Route path="/user/:user" element={<UserDashboard />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
