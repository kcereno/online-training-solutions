import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Accordion, Card } from "react-bootstrap";
import { AssignedExercise } from "../../../../data/interfaces";
import CustomToggle from "../../../../UI/Accordion/CustomToggle/CustomToggle";
import { faDeleteLeft } from "@fortawesome/free-solid-svg-icons";
import { HistoryEntryData } from "../../../../data/interfaces";
import ExerciseLogEntryForm from "../ExerciseLogEntryForm/ExerciseLogEntryForm";

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
                  historyEntryData.exercise === exercise.name
                    ? historyEntryData.sets.map((set, index) => (
                        <div className="d-flex justify-content-center">
                          <p className="mb-1">
                            <strong className="mx-2">Set {index + 1}:</strong>
                            {`${set.weight}lbs for  ${set.reps} reps`}{" "}
                            <FontAwesomeIcon
                              style={{ color: "red" }}
                              className="mx-2 align-self-center"
                              icon={faDeleteLeft}
                            />
                          </p>
                        </div>
                      ))
                    : null
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
