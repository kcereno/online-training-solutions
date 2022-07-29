import React from "react";
import { Card } from "react-bootstrap";
import { LogEntry } from "../../data/interfaces";
import ExerciseLogEntry from "./ExerciseLogEntry/ExerciseLogEntry";

interface Props {
  logs: LogEntry[];
}

const ExerciseLog = ({ logs }: Props) => {
  console.log(logs);
  return (
    <Card style={{ width: "auto", background: "grey" }}>
      {logs.map((log: LogEntry) => (
        <div key={log.date.getTime()}>
          <h2>{log.date.toDateString()}</h2>
          {log.data.map((entry) => (
            <div>
              <p>{entry.exercise}</p>
              {entry.data.map((data)=> <ul>
                <li>{`Set: ${data.set} Weight: ${data.weight} Reps: ${data.reps}`}</li>
              </ul>)}
            </div>
          ))}
        </div>
      ))}
    </Card>
  );
};

export default ExerciseLog;
