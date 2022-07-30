import React from "react";
import { Card, Container } from "react-bootstrap";
import { AssignedExercise } from "../../data/interfaces";
import { Row, Col } from "react-bootstrap";

interface Props {
  program: AssignedExercise[];
  addExercise: () => void;
}

const ClientProgram = ({ program, addExercise }: Props) => {
  console.log("program", program);
  const handleAddExerciseButon = () => {
    addExercise();
  };

  return (
    <Card style={{ width: "auto", background: "grey" }}>
      <Container>
        <Row>
          <Col>
            <h1>Program</h1>
          </Col>
          <Col>
            <button onClick={handleAddExerciseButon}>+</button>
          </Col>
        </Row>
      </Container>

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
