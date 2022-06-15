import "bootstrap/dist/css/bootstrap.min.css";
import RouteTree from "./routing/RouteTree";

import NavBar from "./UI/NavBar/NavBar";
import Footer from "./UI/Footer/Footer";
import "./App.css";
import Modals from "./UI/Modals/Modals";

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
