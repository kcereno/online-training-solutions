import React from "react";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import useClientActions from "../../../../hooks/useClientActions";

interface Props {
  exercise: string;
}

const ExerciseLogEntryForm = ({ exercise }: Props) => {
  const { addSetToLog } = useClientActions();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  console.log("ExerciseLogEntryForm ~ errors", errors);

  const onSubmit = ({ weight, reps }: any) => {
    addSetToLog(exercise, weight, reps);
  };

  return (
    <>
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
            type="string"
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
            placeholder="Reps"
            {...register("reps", { required: true })}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          +
        </Button>
      </Form>
    </>
  );
};

export default ExerciseLogEntryForm;
