import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import RouteList from "./routes/RouteList";
import AuthContextProvider from "./store/auth-context";
import MainLayout from "./layout/MainLayout/MainLayout";
import { BrowserRouter } from "react-router-dom";


function App() {

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
