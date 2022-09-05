import React from "react";
import { Accordion, Card } from "react-bootstrap";
import { AssignedExercise } from "../../../../data/interfaces";
import CustomToggle from "../../../../UI/Accordion/CustomToggle/CustomToggle";
import { HistoryEntryData } from "../../../../data/interfaces";
import SetEntry from "../SetEntry/SetEntry";
import ExerciseLogEntryForm from "../../ExerciseLog/ExerciseLogEntryForm/ExerciseLogEntryForm";

interface Props {
  index: number;
  exercise: AssignedExercise;
  todaysHistoryEntry: HistoryEntryData[] | undefined;
}

const HistoryAccordionEntry = ({
  index,
  exercise,
  todaysHistoryEntry,
}: Props) => {
  return (
    <Card style={{ background: "#212529" }} key={index.toString()}>
      <Card.Header>
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
          {todaysHistoryEntry?.map((historyEntryData: HistoryEntryData) => {
            if (historyEntryData.exercise === exercise.name)
              return historyEntryData.sets.map((set, index) => (
                <SetEntry index={index} set={set} key={index} />
              ));

            return null;
          })}
          {!todaysHistoryEntry && (
            <h4 className="text-center"> Add set below</h4>
          )}
          <ExerciseLogEntryForm exercise={exercise.name} />
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  );
};

export default HistoryAccordionEntry;
