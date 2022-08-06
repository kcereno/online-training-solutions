import React, { useState } from "react";
import { Card, Container } from "react-bootstrap";
import { AssignedExercise } from "../../data/interfaces";
import { Row, Col } from "react-bootstrap";

interface Props {
  program: AssignedExercise[];
  addExercise: () => void;
  deleteExercise: (exerciseName: string) => void;
}

const ClientProgram = ({ program, addExercise, deleteExercise }: Props) => {
  const [editMode, setEditMode] = useState(false);

  const handleEditButtonClick = () => {
    setEditMode(true);
  };

  const handleExitButtonClick = () => {
    setEditMode(false);
  };

  const handleDeleteButtonClick = (exerciseName: string) => {
    deleteExercise(exerciseName);
  };

  const editControls = (
    <div>
      <button onClick={addExercise}>+</button>
      <button onClick={handleExitButtonClick}>Exit</button>
    </div>
  );

  const editButton = editMode ? (
    editControls
  ) : (
    <button onClick={handleEditButtonClick}>Edit</button>
  );

  return (
    <Card style={{ width: "auto", background: "grey" }}>
      <Container>
        <Row>
          <Col>
            <h1>Program</h1>
          </Col>
          <Col>{editButton}</Col>
        </Row>
      </Container>

      <ul>
        {program.map((exercise: AssignedExercise) => {
          return (
            <li key={exercise.name}>
              {`${exercise.name} Target Weight: ${exercise.weight} || Target Reps:${exercise.reps} || Target Sets: ${exercise.sets}`}{" "}
              {editMode && (
                <button onClick={() => handleDeleteButtonClick(exercise.name)}>
                  Delete
                </button>
              )}
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default ClientProgram;
