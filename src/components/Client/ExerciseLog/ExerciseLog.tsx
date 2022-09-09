import React from "react";
import { Accordion, Card, Container, Row, Col } from "react-bootstrap";
import { HistoryEntry } from "../../../data/interfaces";
import { useAccordionButton } from "react-bootstrap";
import "./ExerciseLog.css";
import SurfaceCard from "../../../UI/SurfaceCard/SurfaceCard";

interface Props {
  logs: HistoryEntry[];
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
    <SurfaceCard>
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
              {logs.map((HistoryEntry: HistoryEntry) => (
                <Card
                  style={{ background: "#212529" }}
                  key={HistoryEntry.date.toDateString()}
                >
                  <Card.Header>
                    <CustomToggle eventKey={HistoryEntry.date.toDateString()}>
                      {HistoryEntry.date.toDateString()}
                    </CustomToggle>
                  </Card.Header>
                  <Accordion.Collapse
                    eventKey={HistoryEntry.date.toDateString()}
                  >
                    <Card.Body style={{ background: "black" }}>
                      {HistoryEntry.data.map((data, index) => (
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
    </SurfaceCard>
    // <Card className="exercise-log-container">

    //
  );
};

export default ExerciseLog;
