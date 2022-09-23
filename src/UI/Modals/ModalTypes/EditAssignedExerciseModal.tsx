import React from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { AssignedExercise } from "../../../data/interfaces";
import useModal from "../../../hooks/useModal";
import { useTrainerActions } from "../../../hooks/useTrainerActions";

interface Props {
  clientId: string;
  assignedExercise: AssignedExercise;
}

const EditAssignedExerciseModal = ({
  clientId,
  assignedExercise: { name, weight, sets, reps },
}: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { hideModal } = useModal();
  const { editAssignedExercise } = useTrainerActions();

  const onSubmit = (data: any) => {
    const updatedAssignedExercise: AssignedExercise = {
      name: data.exerciseName,
      weight: +data.targetWeight,
      reps: +data.reps,
      sets: +data.sets,
    };

    editAssignedExercise(clientId, name, updatedAssignedExercise);
    hideModal();
  };
  const handleFocus = (e: any) => e.target.select();

  return (
    <>
      <Modal.Header>
        <Modal.Title>Edit Exercise</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exerciseName">
            <Form.Label>Exercise</Form.Label>
            <Form.Control
              type="string"
              defaultValue={name}
              onFocus={handleFocus}
              {...register("exerciseName", { required: true })}
            />
            {errors.exerciseName && (
              <span style={{ color: "red" }}>This field is required</span>
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="targetWeight">
            <Form.Label>Target Weight</Form.Label>
            <Form.Control
              type="number"
              defaultValue={weight}
              onFocus={handleFocus}
              {...register("targetWeight", { required: true })}
            />
            {errors.targetWeight && (
              <span style={{ color: "red" }}>This field is required</span>
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="reps">
            <Form.Label>Reps</Form.Label>
            <Form.Control
              type="number"
              defaultValue={reps}
              onFocus={handleFocus}
              {...register("reps", { required: true })}
            />
            {errors.reps && (
              <span style={{ color: "red" }}>This field is required</span>
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="sets">
            <Form.Label>Sets</Form.Label>
            <Form.Control
              type="number"
              defaultValue={sets}
              onFocus={handleFocus}
              {...register("sets", { required: true })}
            />
            {errors.sets && (
              <span style={{ color: "red" }}>This field is required</span>
            )}
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={hideModal}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleSubmit(onSubmit)}>
          Submit
        </Button>
      </Modal.Footer>
    </>
  );
};

export default EditAssignedExerciseModal;
