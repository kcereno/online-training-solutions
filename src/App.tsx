import "bootstrap/dist/css/bootstrap.min.css";
import RouteTree from "./routing/RouteTree";
import NavBar from "./components/NavBar/NavBar";
import "./App.css";
import Modals from "./components/Modals/Modals";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Modals />
      <NavBar />
      <RouteTree />
      <Footer />
    </div>
  );
}

export default App;
