import { Accordion, Container, Card } from "react-bootstrap";
import { Client, HistoryEntryData, HistoryEntry } from "../../data/interfaces";
import { today } from "../../data/functions";
import ExerciseLogEntryForm from "../../components/Client/ExerciseLog/ExerciseLogEntryForm/ExerciseLogEntryForm";
import CustomToggle from "../../UI/Accordion/CustomToggle/CustomToggle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDeleteLeft } from "@fortawesome/free-solid-svg-icons";
import HistoryAccordion from "../../components/Client/ExerciseLog/HistoryAccordion/HistoryAccordion";

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

  return (
    <Container className="text-white" style={{ maxWidth: "700px" }}>
      <h1>Hello {firstName}</h1>
      <p>This is your program</p>
      <HistoryAccordion
        program={program}
        todaysHistoryEntry={todaysHistoryEntry}
      />
    </Container>
  );
};

export default ClientDashboard;
