import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./shared/components/Footer/Footer";
import MainNavigation from "./shared/components/MainNavigation/MainNavigation";
import LandingPage from "./shared/pages/LandingPage/LandingPage";
import Login from "./shared/pages/Login/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MainNavigation />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signin" element={<Login />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
