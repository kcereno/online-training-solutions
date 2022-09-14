import React from "react";
import { Accordion } from "react-bootstrap";
import { AssignedExercise, HistoryEntry } from "../../../data/interfaces";
import TodaysWorkoutAccordionEntry from "./TodaysWorkoutAccordionEntry/TodaysWorkoutAccordionEntry";

interface Props {
  program: AssignedExercise[];
  todaysHistoryEntry: HistoryEntry | undefined;
}

const TodaysWorkoutAccordion = ({ program, todaysHistoryEntry }: Props) => (
  <div className="accordion">
    <Accordion alwaysOpen>
      {program.map((exercise, index) => (
        <TodaysWorkoutAccordionEntry
          key={index}
          exercise={exercise}
          index={index}
          todaysHistoryEntry={todaysHistoryEntry}
        />
      ))}
    </Accordion>
  </div>
);
export default TodaysWorkoutAccordion;
