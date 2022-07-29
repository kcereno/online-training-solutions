import React from "react";
import { Accordion, Card } from "react-bootstrap";
import { Log } from "../../data/interfaces";

interface Props {
  logs: Log[];
}

const ExerciseLog = ({ logs }: Props) => {
  console.log(logs);
  return (
    <Card style={{ width: "auto", background: "grey" }}>
      <h1>Logs</h1>
      <Accordion defaultActiveKey="0" flush>
        {logs.map((log: Log) => (
          <Accordion.Item eventKey={log.date.toDateString()}>
            <Accordion.Header>{log.date.toDateString()}</Accordion.Header>
            <Accordion.Body style={{ background: "black" }}>
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
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </Card>
  );
};

export default ExerciseLog;
