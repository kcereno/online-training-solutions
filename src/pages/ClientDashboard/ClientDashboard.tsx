import { Accordion, Container, Card } from "react-bootstrap";
import { Client, LogData } from "../../data/interfaces";
import { today } from "../../data/functions";
import { LogEntry } from "../../data/interfaces";
import ExerciseLogEntryForm from "../../components/Client/ExerciseLog/ExerciseLogEntryForm/ExerciseLogEntryForm";
import CustomToggle from "../../UI/Accordion/CustomToggle/CustomToggle";

interface Props {
  client: Client;
}

const ClientDashboard = ({
  client: {
    info: { firstName, lastName },
    trainingPlan: { program, log },
  },
}: Props) => {
  const todaysLogData = log.find(
    (entry: LogEntry) => entry.date.getTime() === today.getTime()
  )?.data;
  console.log("todaysLogData", todaysLogData);

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
                {todaysLogData?.map((data: LogData) =>
                  data.exercise === exercise.name
                    ? data.sets.map((set, index) => (
                        <div
                          className="text-center mb-2"
                          key={index.toString()}
                        >
                          <strong>Set {index + 1}:</strong>{" "}
                          {`${set.weight}lbs for  ${set.reps}`}
                        </div>
                      ))
                    : null
                )}
                {!todaysLogData && "No Data"}
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
