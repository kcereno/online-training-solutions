import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import Footer from "./layout/Footer/Footer";
import MainNavigation from "./layout/MainNavigation/MainNavigation";
import RouteList from "./routes/RouteList";

function App() {
  return (
    <div className="App">
      <MainNavigation />
      <RouteList />
      <Footer />
    </div>
  );
}

export default App;
