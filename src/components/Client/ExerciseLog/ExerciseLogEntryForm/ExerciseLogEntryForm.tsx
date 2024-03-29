import React from "react";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import useClientActions from "../../../../hooks/useClientActions";

interface Props {
  addSet: (weight: number, reps: number) => void;
}

const ExerciseLogEntryForm = ({ addSet }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = ({ weight, reps }: any) => {
    addSet(weight, reps);
    reset();
  };

  return (
    <div>
      {errors.reps && (
        <p className="text-center mb-0" style={{ color: "red" }}>
          Reps is required
        </p>
      )}
      <Form
        className="d-flex justify-content-center mt-1"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Form.Group
          controlId="addEntryForm.WeightInput"
          style={{ width: "120px" }}
        >
          <Form.Control
            type="number"
            min="0"
            placeholder="Weight"
            {...register("weight")}
          />
        </Form.Group>
        <Form.Group
          controlId="addEntryForm.repsInput"
          style={{ width: "120px" }}
        >
          <Form.Control
            type="number"
            min="0"
            placeholder="Reps"
            {...register("reps", { required: true })}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          +
        </Button>
      </Form>
    </div>
  );
};

export default ExerciseLogEntryForm;
