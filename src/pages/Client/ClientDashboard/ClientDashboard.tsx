import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { Client } from "../../../data/interfaces";
import { useContext } from "react";
import UserContext from "../../../store/User/user-context";
import SurfaceCard from "../../../UI/SurfaceCard/SurfaceCard";
import TodaysWorkoutAccordion from "../../../components/Client/TodaysWorkoutAccordion/TodaysWorkoutAccordion";
import HistoryAccordion from "../../../components/Shared/HistoryAccordion/HistoryAccordion";
import useClientActions from "../../../hooks/useClientActions";
import "./ClientDashboard.scss";
import { Container } from "react-bootstrap";

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
    <section className="page my-md-5 my-3 text-white">
      <Container>
        <SurfaceCard style={{ maxWidth: "700px" }} centered>
          <Tabs defaultActiveKey="todaysWorkout" className="tabs">
            <Tab
              eventKey="todaysWorkout"
              title="Todays Workout"
              tabClassName="tab"
              style={{ fontSize: "1rem" }}
            >
              <TodaysWorkoutAccordion
                program={program}
                todaysHistoryEntry={todaysHistoryEntry}
              />
            </Tab>
            <Tab
              eventKey="profile"
              title="Previous Workouts"
              tabClassName="tab"
            >
              <HistoryAccordion
                history={(activeUser as Client).trainingPlan.history}
              />
            </Tab>
          </Tabs>
        </SurfaceCard>
      </Container>
    </section>
  );
};

export default ClientDashboard;
