import React from "react";

interface Props {
  exercise: string;
  data: any;
}

const ExerciseLogEntry = ({ exercise, data: { set, weight, reps } }: Props) => {
  return <div>ExerciseLogEntry</div>;
};

export default ExerciseLogEntry;
