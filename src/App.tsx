import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MainNavigation from "./shared/components/MainNavigation/MainNavigation";
import LandingPage from "./shared/pages/LandingPage/LandingPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MainNavigation />
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
