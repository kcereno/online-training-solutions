import { Accordion, Container, Card } from "react-bootstrap";
import { AccordianItem } from "../../components/Accordian/AccordianItem";
import { Client } from "../../data/interfaces";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import { isToday, convertDate } from "../../data/functions";
import { useEffect } from "react";
import useClientActions from "../../hooks/useClientActions";
import ExerciseLogEntryForm from "../../components/ExerciseLogEntryForm/ExerciseLogEntryForm";

interface Props {
  client: Client;
}

// Toggle for Accordion
function CustomToggle({
  children,
  eventKey,
}: {
  children: React.ReactNode;
  eventKey: string;
}) {
  const decoratedOnClick = useAccordionButton(eventKey);

  return (
    <p
      style={{ marginTop: "5px", marginBottom: "5px" }}
      onClick={decoratedOnClick}
    >
      {children}
    </p>
  );
}

const ClientDashboard = ({
  client: {
    info: { firstName, lastName },
    trainingPlan: { program, log },
  },
}: Props) => {
  const { fetchTodaysWorkoutEntries } = useClientActions();

  const todaysEntries = fetchTodaysWorkoutEntries(convertDate(new Date()));
  console.log(todaysEntries);

  return (
    <Container className="text-white">
      <h1>Hello {firstName}</h1>
      <p>This is your program</p>

      <Accordion defaultActiveKey="0">
        {program.map((exercise, index) => (
          <Card style={{ background: "#212529" }} key={index.toString()}>
            <Card.Header>
              <CustomToggle eventKey={index.toString()}>
                {`${exercise.name} : ${exercise.weight} lbs for ${exercise.reps} reps for ${exercise.sets} sets`}
              </CustomToggle>
            </Card.Header>
            <Accordion.Collapse eventKey={index.toString()}>
              <ExerciseLogEntryForm exercise={exercise.name} />
            </Accordion.Collapse>
          </Card>
        ))}
      </Accordion>
    </Container>
  );
};

export default ClientDashboard;
