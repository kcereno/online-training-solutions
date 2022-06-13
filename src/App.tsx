import "bootstrap/dist/css/bootstrap.min.css";
import RouteTree from "./routing/RouteTree";
import CustomModal from "./UI/CustomModal.tsx/CustomModal";
import NavBar from "./UI/NavBar/NavBar";
import Footer from "./UI/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <CustomModal />
      <NavBar />
      <RouteTree />
      <Footer />
    </div>
  );
}

export default App;
