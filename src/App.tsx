import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./UI/Layout/Layout";
import RouteTree from "./routing/RouteTree";
import { useContext } from "react";
import UserContext from "./store/user-context";

function App() {
  const userCtx = useContext(UserContext);
  const { activeUser } = userCtx;

  return (
    <Layout>
      <RouteTree activeUser={activeUser} />
    </Layout>
  );
}

export default App;
