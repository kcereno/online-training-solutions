import { Route, Routes } from "react-router-dom";
import LandingPage from "../pages/LandingPage/LandingPage";
import Login from "../pages/Login/Login";

export default function RouteList() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signin" element={<Login />} />
    </Routes>
  );
}
