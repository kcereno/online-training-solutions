import React from "react";
import { Accordion } from "react-bootstrap";
import { AssignedExercise, HistoryEntry } from "../../../data/interfaces";
import HistoryAccordionEntry from "./HistoryAccordionEntry/HistoryAccordionEntry";

interface Props {
  program: AssignedExercise[];
  todaysHistoryEntry: HistoryEntry | undefined;
}

const HistoryAccordion = ({ program, todaysHistoryEntry }: Props) => (
  <div className="accordion">
    <Accordion alwaysOpen>
      {program.map((exercise, index) => (
        <HistoryAccordionEntry
          key={index}
          exercise={exercise}
          index={index}
          todaysHistoryEntry={todaysHistoryEntry}
        />
      ))}
    </Accordion>
  </div>
);
export default HistoryAccordion;
