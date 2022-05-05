import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./UI/Layout/Layout";
import RouteTree from "./routing/RouteTree";
import { CLIENTS } from "./data/Users/Clients";

function App() {
  console.log(CLIENTS);
  return (
    <Layout>
      <RouteTree />
    </Layout>
  );
}

export default App;
