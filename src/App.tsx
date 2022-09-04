import "bootstrap/dist/css/bootstrap.min.css";
import RouteTree from "./routing/RouteTree";
import NavBar from "./UI/NavBar/NavBar";
import Modals from "./UI/Modals/Modals";
import Footer from "./UI/Footer/Footer";

import "./App.css";

const App = () => (
  <>
    <Modals />
    <NavBar />
    <main>
      <RouteTree />
    </main>
    <Footer />
  </>
);

export default App;
