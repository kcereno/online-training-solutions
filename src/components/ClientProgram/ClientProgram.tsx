import React from "react";
import { Card } from "react-bootstrap";
import { AssignedExercise } from "../../data/interfaces";

interface Props {
  program: AssignedExercise[];
}

const ClientProgram = ({ program }: Props) => {
  console.log("program", program);
  return (
    <Card style={{ width: "auto", background: "grey" }}>
      <h1>Current Program</h1>
      <ul>
        {program.map((exercise: AssignedExercise) => {
          return (
            <li
              key={exercise.name}
            >{`${exercise.name} Target Weight: ${exercise.weight} || Target Reps:${exercise.reps} || Target Sets: ${exercise.sets}`}</li>
          );
        })}
      </ul>
    </Card>
  );
};

export default ClientProgram;
