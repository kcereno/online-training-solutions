import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { Client } from "../../../data/interfaces";
import { useContext } from "react";
import UserContext from "../../../store/User/user-context";
import SurfaceCard from "../../../UI/SurfaceCard/SurfaceCard";
import TodaysWorkoutAccordion from "../../../components/Client/TodaysWorkoutAccordion/TodaysWorkoutAccordion";
import HistoryAccordion from "../../../components/Shared/HistoryAccordion/HistoryAccordion";
import useClientActions from "../../../hooks/useClientActions";
import "./ClientDashboard.css";

interface Props {
  client: Client;
}

const ClientDashboard = ({
  client: {
    info: { firstName, lastName },
    trainingPlan: { program, history },
  },
}: Props) => {
  const { activeUser } = useContext(UserContext);
  const { fetchTodaysHistoryEntry } = useClientActions();

  const todaysHistoryEntry = fetchTodaysHistoryEntry(history);

  return (
    <SurfaceCard
      style={{ maxWidth: "700px" }}
      className="text-white my-3 my-md-5"
      centered
    >
      <Tabs defaultActiveKey="todaysWorkout">
        <Tab eventKey="todaysWorkout" title="Todays Workout" tabClassName="tab">
          <TodaysWorkoutAccordion
            program={program}
            todaysHistoryEntry={todaysHistoryEntry}
          />
        </Tab>
        <Tab eventKey="profile" title="Previous Workouts" tabClassName="tab">
          <HistoryAccordion
            history={(activeUser as Client).trainingPlan.history}
          />
        </Tab>
      </Tabs>
    </SurfaceCard>
  );
};

export default ClientDashboard;
