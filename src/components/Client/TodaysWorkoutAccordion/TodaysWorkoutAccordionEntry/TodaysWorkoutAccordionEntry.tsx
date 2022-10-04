import React from "react";
import { Accordion, Card } from "react-bootstrap";
import { AssignedExercise, HistoryEntry } from "../../../../data/interfaces";
import CustomToggle from "../../../../UI/CustomAccordion/CustomToggle/CustomToggle";
import { HistoryEntryData } from "../../../../data/interfaces";
import SetEntry from "../SetEntry/SetEntry";
import ExerciseLogEntryForm from "../../ExerciseLog/ExerciseLogEntryForm/ExerciseLogEntryForm";
import useModal from "../../../../hooks/useModal";
import useClientActions from "../../../../hooks/useClientActions";
import "./TodaysWorkoutAccordionEntry.scss";

interface Props {
  index: number;
  exercise: AssignedExercise;
  todaysHistoryEntry: HistoryEntry | undefined;
}

const TodaysWorkoutAccordionEntry = ({
  index,
  exercise,
  todaysHistoryEntry,
}: Props) => {
  const { showDeleteSetModal } = useModal();
  const { addSetToLog } = useClientActions();

  const handleDeleteSet = (setIndex: number) => {
    showDeleteSetModal({
      exercise: exercise.name,
      setIndex: setIndex,
      date: todaysHistoryEntry!.date,
    });
  };

  console.log("TodaysWorkoutAccordionEntry", todaysHistoryEntry);

  const handleAddSet = (weight: number, reps: number) => {
    addSetToLog(exercise.name, weight, reps);
  };

  const hasExerciseData = todaysHistoryEntry?.data.find(
    (entry) => entry.exercise === exercise.name
  );

  return (
    <Card key={index.toString()} className="secondary-bg">
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
        <Card.Body className="primary-bg">
          {todaysHistoryEntry?.data.map(
            (historyEntryData: HistoryEntryData) => {
              if (historyEntryData.exercise === exercise.name)
                return historyEntryData.sets.map((set, index) => (
                  <SetEntry
                    key={index}
                    index={index}
                    set={set}
                    deleteSet={handleDeleteSet}
                  />
                ));

              return null;
            }
          )}
          {!hasExerciseData && (
            <h4 className="text-center my-3"> Add set below</h4>
          )}
          <ExerciseLogEntryForm addSet={handleAddSet} />
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  );
};

export default TodaysWorkoutAccordionEntry;
