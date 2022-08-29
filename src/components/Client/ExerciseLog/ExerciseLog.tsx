import React from "react";
import { Accordion, Card, Container, Row, Col } from "react-bootstrap";
import { LogEntry } from "../../../data/interfaces";
import { useAccordionButton } from "react-bootstrap";
import "./ExerciseLog.css";

interface Props {
  logs: LogEntry[];
}

interface CustomToggleInterface {
  children: React.ReactNode;
  eventKey: string;
}

function CustomToggle({ children, eventKey }: CustomToggleInterface) {
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
              {logs.map((logEntry: LogEntry) => (
                <Card
                  style={{ background: "#212529" }}
                  key={logEntry.date.toDateString()}
                >
                  <Card.Header>
                    <CustomToggle eventKey={logEntry.date.toDateString()}>
                      {logEntry.date.toDateString()}
                    </CustomToggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey={logEntry.date.toDateString()}>
                    <Card.Body style={{ background: "black" }}>
                      {logEntry.data.map((data, index) => (
                        <div key={index.toString()}>
                          <p>{data.exercise}</p>
                          {data.sets.map((set, index) => (
                            <ul key={index.toString()}>
                              <li>{`Set: ${index + 1} Weight: ${
                                set.weight
                              } Reps: ${set.reps}`}</li>
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
