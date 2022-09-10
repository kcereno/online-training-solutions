import React, { useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
import { AssignedExercise } from "../../../data/interfaces";
import { Col } from "react-bootstrap";
import "./ClientProgram.css";
import SurfaceCard from "../../../UI/SurfaceCard/SurfaceCard";
import Separator from "../../../UI/Separator/Separator";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

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
      <Button className="mx-1" onClick={addExercise}>
        +
      </Button>
      <Button variant="warning" onClick={handleExitButtonClick}>
        Exit
      </Button>
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
    <SurfaceCard className="mb-3">
      <Container>
        <Col className="d-flex justify-content-between align-items-center my-2 ">
          <h2 className="pt-2">Program</h2>
          {editButton}
        </Col>
        <Separator width={100} />
        <Table bordered hover variant="dark" className="text-center my-3">
          <thead>
            <tr>
              <th>Exercise</th>
              <th>Target Weight</th>
              <th>Reps</th>
              <th>Sets</th>
              {editMode && <th>Delete</th>}
            </tr>
          </thead>
          <tbody>
            {program.map((exercise: AssignedExercise) => {
              return (
                <tr key={exercise.name}>
                  <th>{exercise.name}</th>
                  <th>{exercise.weight}</th>
                  <th>{exercise.reps}</th>
                  <th>{exercise.sets}</th>
                  {editMode && (
                    <th>
                      <FontAwesomeIcon
                        icon={faTrashCan}
                        onClick={() => handleDeleteButtonClick(exercise.name)}
                        style={{ color: "red" }}
                      />
                    </th>
                  )}
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    </SurfaceCard>
  );
};

export default ClientProgram;
