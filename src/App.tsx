import "bootstrap/dist/css/bootstrap.min.css";
import RouteTree from "./routing/RouteTree";
import NavBar from "./UI/NavBar/NavBar";
import Modals from "./UI/Modals/Modals";
import Footer from "./UI/Footer/Footer";
import "./App.scss";

const App = () => (
  <div className="page-container">
    <div className="content-wrap">
      <Modals />
      <NavBar />
      <main>
        <RouteTree />
      </main>
    </div>
    <Footer />
  </div>
);

export default App;
