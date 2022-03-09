import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import RouteList from "./routes/RouteList";
import AuthContextProvider, { AuthContext } from "./store/auth-context";
import MainLayout from "./layout/MainLayout/MainLayout";
import { BrowserRouter } from "react-router-dom";
import { useContext } from "react";

function App() {
  const ctx = useContext(AuthContext);

  return (
    <AuthContextProvider>
      <BrowserRouter>
        <MainLayout>
          <RouteList />
        </MainLayout>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
