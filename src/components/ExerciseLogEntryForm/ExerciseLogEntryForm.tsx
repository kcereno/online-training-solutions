import React from "react";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import useClientActions from "../../hooks/useClientActions";

interface Props {
  exercise: string;
}

const ExerciseLogEntryForm = ({ exercise }: Props) => {
  const { addToExerciseLog } = useClientActions();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = ({ weight, reps }: any) => {
    addToExerciseLog(exercise, weight, reps);
  };

  return (
    <Form
      className="d-flex justify-content-center mt-3"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Form.Group controlId="addEntryForm.WeightInput">
        <Form.Control
          type="string"
          placeholder="Weight"
          {...register("weight")}
        />
      </Form.Group>
      <Form.Group controlId="addEntryForm.repsInput">
        <Form.Control type="number" placeholder="Reps" {...register("reps")} />
      </Form.Group>
      <Button variant="primary" type="submit">
        +
      </Button>
    </Form>
  );
};

export default ExerciseLogEntryForm;
