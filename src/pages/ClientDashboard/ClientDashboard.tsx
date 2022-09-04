import { Accordion, Container, Card } from "react-bootstrap";
import { Client, HistoryEntryData, HistoryEntry } from "../../data/interfaces";
import { today } from "../../data/functions";
import ExerciseLogEntryForm from "../../components/Client/ExerciseLog/ExerciseLogEntryForm/ExerciseLogEntryForm";
import CustomToggle from "../../UI/Accordion/CustomToggle/CustomToggle";

interface Props {
  client: Client;
}

const ClientDashboard = ({
  client: {
    info: { firstName, lastName },
    trainingPlan: { program, history },
  },
}: Props) => {
  const todaysHistoryEntry = history.find(
    (historyEntry: HistoryEntry) =>
      historyEntry.date.getTime() === today.getTime()
  )?.data;
  console.log("todaysHistoryEntry", todaysHistoryEntry);

  return (
    <Container className="text-white">
      <h1>Hello {firstName}</h1>
      <p>This is your program</p>

      <Accordion defaultActiveKey="0">
        {program.map((exercise, index) => (
          <Card style={{ background: "#212529" }} key={index.toString()}>
            <Card.Header className="">
              <CustomToggle
                eventKey={index.toString()}
                exercise={exercise.name}
                targets={{
                  weight: exercise.weight,
                  reps: exercise.reps,
                  sets: exercise.sets,
                }}
              />
            </Card.Header>
            <Accordion.Collapse eventKey={index.toString()}>
              <Card.Body>
                {todaysHistoryEntry?.map((historyEntryData: HistoryEntryData) =>
                  historyEntryData.exercise === exercise.name
                    ? historyEntryData.sets.map((set, index) => (
                        <div
                          className="text-center mb-2"
                          key={index.toString()}
                        >
                          <strong>Set {index + 1}:</strong>{" "}
                          {`${set.weight}lbs for  ${set.reps} reps`}
                        </div>
                      ))
                    : null
                )}
                {!todaysHistoryEntry && (
                  <h3 className="text-center">Please add set below</h3>
                )}
                <ExerciseLogEntryForm exercise={exercise.name} />
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        ))}
      </Accordion>
    </Container>
  );
};

export default ClientDashboard;
