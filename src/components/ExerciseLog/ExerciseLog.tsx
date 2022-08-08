import React from "react";
import { Accordion, Card, Container, Row, Col } from "react-bootstrap";
import { Log } from "../../data/interfaces";
import { useAccordionButton } from "react-bootstrap";
import "./ExerciseLog.css";

interface Props {
  logs: Log[];
}

interface CustomToggleInterface {
  children: React.ReactNode;
  eventKey: string;
}

function CustomToggle({
  children,
  eventKey,
}: {
  children: React.ReactNode;
  eventKey: string;
}) {
  const decoratedOnClick = useAccordionButton(eventKey);

  return (
    <p
      style={{ marginTop: "auto", marginBottom: "auto" }}
      onClick={decoratedOnClick}
    >
      {children}
    </p>
  );
}

const ExerciseLog = ({ logs }: Props) => {
  return (
    <Card className="exercise-log-container">
      <Container>
        <Row>
          <Col>
            <h2 className="pt-1 pb-0">Logs</h2>
            <hr
              style={{
                width: "100%",
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: "5px",
              }}
            />

            <Accordion defaultActiveKey="0" className="pb-3">
              {logs.map((log: Log) => (
                <Card
                  style={{ background: "#212529" }}
                  key={log.date.toDateString()}
                >
                  <Card.Header>
                    <CustomToggle eventKey={log.date.toDateString()}>
                      {log.date.toDateString()}
                    </CustomToggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey={log.date.toDateString()}>
                    <Card.Body style={{ background: "black" }}>
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
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              ))}
            </Accordion>
          </Col>
        </Row>
      </Container>
    </Card>
  );
};

export default ExerciseLog;
