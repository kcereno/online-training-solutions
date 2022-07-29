import React from "react";
import { Card } from "react-bootstrap";
import { Log } from "../../data/interfaces";

interface Props {
  logs: Log[];
}

const ExerciseLog = ({ logs }: Props) => {
  console.log(logs);
  return (
    <Card style={{ width: "auto", background: "grey" }}>
      {logs.map((log: Log) => (
        <div key={log.date.getTime()}>
          <h2>{log.date.toDateString()}</h2>
          {log.entry.map((entry) => (
            <div key={entry.exercise}>
              <p>{entry.exercise}</p>
              {entry.data.map((data) => (
                <ul key={data.set}>
                  <li
                    key={data.set}
                  >{`Set: ${data.set} Weight: ${data.weight} Reps: ${data.reps}`}</li>
                </ul>
              ))}
            </div>
          ))}
        </div>
      ))}
    </Card>
  );
};

export default ExerciseLog;
