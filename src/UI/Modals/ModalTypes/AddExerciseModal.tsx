import React from "react";
import { Modal, Form, Button, FloatingLabel } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { AssignedExercise } from "../../../data/interfaces";
import useModal from "../../../hooks/useModal";
import { useTrainerActions } from "../../../hooks/useTrainerActions";

export const AddExerciseModal = () => {
  const { addExerciseToClientProgram } = useTrainerActions();
  const { hideModal } = useModal();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const useFormData = { register, errors: errors };

  const handleAddButtonClick = ({
    exerciseName,
    targetWeight,
    targetReps,
    targetSets,
  }: {
    [key: string]: string | number;
  }) => {
    const newExercise: AssignedExercise = {
      name: exerciseName as string,
      weight: targetWeight as number,
      reps: targetReps as number,
      sets: targetSets as number,
    };

    // TODO CHANGE BELOW
    addExerciseToClientProgram("client", newExercise);
    hideModal();
  };

  return (
    <>
      <Modal.Header>
        <Modal.Title>New Exercise</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <FloatingLabel
            controlId="floatingExerciseName"
            label="Exercise Name"
            className="mb-3"
          >
            <Form.Control
              type="text"
              placeholder="Exercise Name"
              {...register("exerciseName", { required: true })}
            />

            {useFormData.errors.hasOwnProperty("exerciseName") && (
              <span style={{ color: "red" }}>This field is required</span>
            )}
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingTargetWeight"
            label="Target Weight"
            className="mb-3"
          >
            <Form.Control
              type="number"
              placeholder="225lbs"
              {...register("targetWeight", { required: true })}
            />
            {useFormData.errors.hasOwnProperty("targetWeight") && (
              <span style={{ color: "red" }}>This field is required</span>
            )}
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingTargetReps"
            label="Target Repetitions"
            className="mb-3"
          >
            <Form.Control
              type="number"
              placeholder="10"
              {...register("targetReps", { required: true })}
            />
            {useFormData.errors.hasOwnProperty("targetReps") && (
              <span style={{ color: "red" }}>This field is required</span>
            )}
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingTargetSets"
            label="Target Sets"
            className="mb-3"
          >
            <Form.Control
              type="number"
              placeholder="10"
              {...register("targetSets", { required: true })}
            />
            {useFormData.errors.hasOwnProperty("targetSets") && (
              <span style={{ color: "red" }}>This field is required</span>
            )}
          </FloatingLabel>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={hideModal}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleSubmit(handleAddButtonClick)}>
          ADD
        </Button>
      </Modal.Footer>
    </>
  );
};
