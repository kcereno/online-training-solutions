import { Container, Tabs, Tab } from "react-bootstrap";
import { Client } from "../../data/interfaces";
import HistoryAccordion from "../../components/Client/HistoryAccordion/HistoryAccordion";
import useClientActions from "../../hooks/useClientActions";
import ExerciseLog from "../../components/Client/ExerciseLog/ExerciseLog";
import { useContext } from "react";
import UserContext from "../../store/User/user-context";
import SurfaceCard from "../../UI/SurfaceCard/SurfaceCard";

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
  const { activeUser } = useContext(UserContext);

  return (
    <SurfaceCard
      style={{ maxWidth: "700px" }}
      centered
      className="text-white my-5"
    >
      <Tabs defaultActiveKey="todaysWorkout">
        <Tab eventKey="todaysWorkout" title="Todays Workout">
          <HistoryAccordion
            program={program}
            todaysHistoryEntry={todaysHistoryEntry}
          />
        </Tab>
        <Tab eventKey="profile" title="Previous Workouts">
          <h1>TEst</h1>
          {/* <ExerciseLog logs={(activeUser as Client).trainingPlan.history} /> */}
        </Tab>
      </Tabs>
    </SurfaceCard>
  );
};

export default ClientDashboard;
