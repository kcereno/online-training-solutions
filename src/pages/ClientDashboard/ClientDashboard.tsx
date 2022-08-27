import { Accordion, Container, Card } from "react-bootstrap";
import { AccordianItem } from "../../components/Accordian/AccordianItem";
import { Client } from "../../data/interfaces";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import { isToday, convertDate, today } from "../../data/functions";
import useClientActions from "../../hooks/useClientActions";
import ExerciseLogEntryForm from "../../components/ExerciseLogEntryForm/ExerciseLogEntryForm";
import { LogEntry } from "../../data/interfaces";

interface Props {
  client: Client;
}

// Toggle for Accordion
function CustomToggle({
  eventKey,
  exercise,
  targets,
}: {
  // children: React.ReactNode;
  eventKey: string;
  exercise: string;
  targets: { weight: number; reps: number; sets: number };
}) {
  const decoratedOnClick = useAccordionButton(eventKey);

  return (
    <div className="d-flex justify-content-between" onClick={decoratedOnClick}>
      <div>{exercise}</div>
      <div>
        <strong>Target:</strong> {`${targets.sets} sets of ${targets.reps}`}
      </div>
    </div>
  );
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
                {todaysLogData &&
                todaysLogData[index].exercise === exercise.name
                  ? todaysLogData[index].sets.map((set, index) => (
                      <div className="text-center mb-2" key={index.toString()}>
                        <strong>Set {index + 1}:</strong>{" "}
                        {`${set.weight}lbs for  ${set.reps}`}
                      </div>
                    ))
                  : "No data"}
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
