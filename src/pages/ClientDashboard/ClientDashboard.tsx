import { Container } from "react-bootstrap";
import { Client } from "../../data/interfaces";
import HistoryAccordion from "../../components/Client/HistoryAccordion/HistoryAccordion";
import useClientActions from "../../hooks/useClientActions";

interface Props {
  client: Client;
}

const ClientDashboard = ({
  client: {
    info: { firstName, lastName },
    trainingPlan: { program, history },
  },
}: Props) => {
  const { fetchTodaysHistoryEntry } = useClientActions();
  const todaysHistoryEntry = fetchTodaysHistoryEntry(history);

  return (
    <Container className="text-white my-5" style={{ maxWidth: "700px" }}>
      <h1>Hello {firstName}</h1>
      <p>This is your program today is</p>
      <HistoryAccordion
        program={program}
        todaysHistoryEntry={todaysHistoryEntry}
      />
    </Container>
  );
};

export default ClientDashboard;
