import React from "react";
import { Accordion, Card } from "react-bootstrap";
import { AssignedExercise, HistoryEntry } from "../../../../data/interfaces";
import CustomToggle from "../../../../UI/Accordion/CustomToggle/CustomToggle";
import { HistoryEntryData } from "../../../../data/interfaces";
import SetEntry from "../SetEntry/SetEntry";
import ExerciseLogEntryForm from "../../ExerciseLog/ExerciseLogEntryForm/ExerciseLogEntryForm";
import useModal from "../../../../hooks/useModal";

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

  const handleDeleteSet = (setIndex: number) => {
    showDeleteSetModal({
      exercise: exercise.name,
      setIndex: setIndex,
      date: todaysHistoryEntry!.date,
    });
  };

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
          {!todaysHistoryEntry && (
            <h4 className="text-center"> Add set below</h4>
          )}
          <ExerciseLogEntryForm exercise={exercise.name} />
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  );
};

export default TodaysWorkoutAccordionEntry;
