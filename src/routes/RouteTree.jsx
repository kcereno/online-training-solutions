import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/LoginPage/LoginPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import UserDashboard from "../pages/UserDashboard/UserDashboard";
import App from "../App";

export default function RouteTree() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/signin" element={<LoginPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/user/:user" exact element={<UserDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
