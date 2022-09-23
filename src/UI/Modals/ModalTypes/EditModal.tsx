import React from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { AssignedExercise } from "../../../data/interfaces";

interface Props {
  config: { title: string; assignedExerciseData?: AssignedExercise };
}

const EditModal = ({ config: { title, assignedExerciseData } }: Props) => {
  const {} = useForm();
  console.log("EditModal ~ assignedExerciseData", assignedExerciseData);

  return (
    <>
      <Modal.Header>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exerciseName">
            <Form.Label>Exercise</Form.Label>
            <Form.Control type="email" value={assignedExerciseData?.name} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="targetWeight">
            <Form.Label>Target Weight</Form.Label>
            <Form.Control type="number" value={assignedExerciseData?.weight} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="reps">
            <Form.Label>Reps</Form.Label>
            <Form.Control type="number" value={assignedExerciseData?.reps} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="sets">
            <Form.Label>Sets</Form.Label>
            <Form.Control type="number" value={assignedExerciseData?.sets} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => {}}>
          Cancel
        </Button>
        <Button variant="primary" onClick={() => {}}>
          Submit
        </Button>
      </Modal.Footer>
    </>
  );
};

export default EditModal;
