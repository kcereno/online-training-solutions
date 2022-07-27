import React from "react";
import { LogData, WorkloadData } from "../../../data/interfaces";

interface Props {
  exercise: string;
  data: WorkloadData;
}

const ExerciseLogEntry = ({ exercise, data: { set, weight, reps } }: Props) => {
  return <div>ExerciseLogEntry</div>;
};

export default ExerciseLogEntry;
