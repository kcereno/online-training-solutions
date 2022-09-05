import React from "react";
import { Accordion, Card } from "react-bootstrap";
import { AssignedExercise } from "../../../data/interfaces";
import CustomToggle from "../../../UI/Accordion/CustomToggle/CustomToggle";
import { HistoryEntryData } from "../../../data/interfaces";
import ExerciseLogEntryForm from "../ExerciseLog/ExerciseLogEntryForm/ExerciseLogEntryForm";
import SetEntry from "./SetEntry/SetEntry";

interface Props {
  program: AssignedExercise[];
  todaysHistoryEntry: HistoryEntryData[] | undefined;
}

const HistoryAccordion = ({ program, todaysHistoryEntry }: Props) => {
  return (
    <div className="accordion">
      <Accordion alwaysOpen>
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
                  historyEntryData.sets.map((set, index) => (
                    <SetEntry index={index} set={set} />
                  ))
                )}
                {!todaysHistoryEntry && (
                  <h4 className="text-center"> Add set below</h4>
                )}
                <ExerciseLogEntryForm exercise={exercise.name} />
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        ))}
      </Accordion>
    </div>
  );
};

export default HistoryAccordion;
