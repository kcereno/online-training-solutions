import React from "react";
import { LogEntry } from "../../data/interfaces";
import ExerciseLogEntry from "./ExerciseLogEntry/ExerciseLogEntry";

interface Props {
  logs: LogEntry[];
}

const ExerciseLog = ({ logs }: Props) => {
  console.log(logs);
  return (
    <div>
      {logs.map((log: LogEntry) => (
        <div>
          <p>{log.date.toDateString()}</p>
        </div>
      ))}
    </div>
  );
};

export default ExerciseLog;
