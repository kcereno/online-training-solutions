import { Tabs, Tab } from "react-bootstrap";
import { Client } from "../../data/interfaces";
import { useContext } from "react";
import UserContext from "../../store/User/user-context";
import SurfaceCard from "../../UI/SurfaceCard/SurfaceCard";
import TodaysWorkoutAccordion from "../../components/Client/TodaysWorkoutAccordion/TodaysWorkoutAccordion";
import HistoryAccordion from "../../components/Shared/HistoryAccordion/HistoryAccordion";
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
  const { activeUser } = useContext(UserContext);

  return (
    <SurfaceCard
      style={{ maxWidth: "700px" }}
      centered
      className="text-white my-5"
    >
      <Tabs defaultActiveKey="todaysWorkout">
        <Tab eventKey="todaysWorkout" title="Todays Workout">
          <TodaysWorkoutAccordion
            program={program}
            todaysHistoryEntry={todaysHistoryEntry}
          />
        </Tab>
        <Tab eventKey="profile" title="Previous Workouts">
          <HistoryAccordion
            history={(activeUser as Client).trainingPlan.history}
          />
        </Tab>
      </Tabs>
    </SurfaceCard>
  );
};

export default ClientDashboard;
