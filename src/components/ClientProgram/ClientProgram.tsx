import React, { useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import { AssignedExercise } from "../../data/interfaces";
import { Row, Col } from "react-bootstrap";
import "./ClientProgram.css";

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
      <Button onClick={addExercise}>+</Button>
      <Button onClick={handleExitButtonClick}>Exit</Button>
    </div>
  );

  const editButton = editMode ? (
    editControls
  ) : (
    <Button
      style={{ height: "70%" }}
      variant="warning"
      onClick={handleEditButtonClick}
    >
      Edit
    </Button>
  );

  return (
    <Card className="client-program-container mb-3">
      <Container>
        <Row>
          <Col className="d-flex justify-content-between align-items-center ">
            <h2 className="pt-2">Program</h2>
            {editButton}
          </Col>
          <hr
            style={{ width: "100%", marginLeft: "auto", marginRight: "auto" }}
          />
        </Row>
      </Container>

      <ul>
        {program.map((exercise: AssignedExercise) => {
          return (
            <li key={exercise.name}>
              {`${exercise.name} Target Weight: ${exercise.weight} || Target Reps:${exercise.reps} || Target Sets: ${exercise.sets}`}{" "}
              {editMode && (
                <Button onClick={() => handleDeleteButtonClick(exercise.name)}>
                  Delete
                </Button>
              )}
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default ClientProgram;
