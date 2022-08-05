import React from "react";
import { useContext } from "react";
import { Modal, Form, Button, FloatingLabel } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { createId } from "../../../data/functions";
import useModal from "../../../hooks/useModal";
import { useTrainerActions } from "../../../hooks/useTrainerActions";
import UserContext from "../../../store/User/user-context";

export const AddExerciseModal = () => {
  const { activeUser } = useContext(UserContext);
  const { addClient } = useTrainerActions();
  const { hideModal } = useModal();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const useFormData = { register, errors: errors };

  console.log(
    "file: AddExerciseModal.tsx ~ line 22 ~ AddExerciseModal ~ useFormData",
    useFormData
  );

  const handleAddButtonClick = (data: any) => {
    console.log(
      "🚀 ~ file: AddExerciseModal.tsx ~ line 23 ~ handleAddButtonClick ~ data",
      data
    );
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
