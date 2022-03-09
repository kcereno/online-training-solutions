import "bootstrap/dist/css/bootstrap.min.css";
import { AuthContext } from "./store/UserContext";
import "./App.css";
import Footer from "./layout/Footer/Footer";
import MainNavigation from "./layout/MainNavigation/MainNavigation";
import RouteList from "./routes/RouteList";
import { useCallback, useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  const authContextValue = {
    isLoggedIn,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      <div className="App">
        <MainNavigation />
        <RouteList />
        <Footer />
      </div>
    </AuthContext.Provider>
  );
}

export default App;
