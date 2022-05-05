import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./UI/Layout/Layout";
import RouteTree from "./routing/RouteTree";
import useUserContext from "./hooks/useUserContext";

function App() {
  const { activeUser } = useUserContext();

  return (
    <Layout>
      <RouteTree activeUser={activeUser!} />
    </Layout>
  );
}

export default App;
