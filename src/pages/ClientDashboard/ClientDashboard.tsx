import { Container, Tabs, Tab } from "react-bootstrap";
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
  const { todaysHistoryEntry } = useClientActions();

  return (
    <Container className="text-white my-5" style={{ maxWidth: "700px" }}>
      <Tabs defaultActiveKey="todaysWorkout" className="mb-3">
        <Tab eventKey="todaysWorkout" title="Todays Workout">
          <HistoryAccordion
            program={program}
            todaysHistoryEntry={todaysHistoryEntry}
          />
        </Tab>
        <Tab eventKey="profile" title="Previous Workouts">
          <h1>History</h1>
        </Tab>
      </Tabs>
    </Container>
  );
};

export default ClientDashboard;

{
  /* <Container className="text-white my-5" style={{ maxWidth: "700px" }}>

<p>This is your program today is</p>

</Container> */
}
