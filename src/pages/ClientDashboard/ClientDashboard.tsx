import { Container, Tabs, Tab, Accordion, Card } from "react-bootstrap";
import { Client } from "../../data/interfaces";
import HistoryAccordion from "../../components/Client/HistoryAccordion/HistoryAccordion";
import useClientActions from "../../hooks/useClientActions";
import ExerciseLog from "../../components/Client/ExerciseLog/ExerciseLog";
import { useContext } from "react";
import UserContext from "../../store/User/user-context";
import SurfaceCard from "../../UI/SurfaceCard/SurfaceCard";
import CustomToggle from "../../UI/Accordion/CustomToggle/CustomToggle";
import { HistoryEntry } from "../../data/interfaces";
import { useAccordionButton } from "react-bootstrap";

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

  interface CustomToggleInterface {
    children: React.ReactNode;
    eventKey: string;
  }

  function CustomToggle({ children, eventKey }: CustomToggleInterface) {
    const decoratedOnClick = useAccordionButton(eventKey);

    return (
      <p
        style={{ marginTop: "auto", marginBottom: "auto" }}
        onClick={decoratedOnClick}
      >
        {children}
      </p>
    );
  }

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
          <Accordion defaultActiveKey="0">
            {(activeUser as Client).trainingPlan.history.map(
              (HistoryEntry: HistoryEntry) => (
                <Card
                  style={{ background: "#212529" }}
                  key={HistoryEntry.date.toDateString()}
                >
                  <Card.Header>
                    <CustomToggle eventKey={HistoryEntry.date.toDateString()}>
                      {HistoryEntry.date.toDateString()}
                    </CustomToggle>
                  </Card.Header>
                  <Accordion.Collapse
                    eventKey={HistoryEntry.date.toDateString()}
                  >
                    <Card.Body style={{ background: "black" }}>
                      {HistoryEntry.data.map((data, index) => (
                        <div key={index.toString()}>
                          <p>{data.exercise}</p>
                          {data.sets.map((set, index) => (
                            <ul key={index.toString()}>
                              <li>{`Set: ${index + 1} Weight: ${
                                set.weight
                              } Reps: ${set.reps}`}</li>
                            </ul>
                          ))}
                        </div>
                      ))}
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              )
            )}
          </Accordion>
        </Tab>
      </Tabs>
    </SurfaceCard>
  );
};

export default ClientDashboard;
