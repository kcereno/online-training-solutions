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
      {logs.map((log: LogEntry) => {
        return (
          <div>
            <h2>{log.date.toDateString()}</h2>
            {log.data.map((entry: any) => {
              return (
                <div>
                  {entry.exercise}
                  {entry.data.map((data: any) => {
                    return (
                      <ul>
                        <li>{`Set: ${data.set} Weight: ${data.weight} Reps:${data.reps}`}</li>
                      </ul>
                    );
                  })}
                </div>
              );
            })}
          </div>
        );
      })}
    </Card>
  );
};

export default ExerciseLog;
