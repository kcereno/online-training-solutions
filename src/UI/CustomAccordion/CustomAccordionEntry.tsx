import React from "react";
import { Accordion, Card } from "react-bootstrap";
import { HistoryEntryData } from "../../data/interfaces";
import HistoryToggle from "./CustomToggle/HistoryToggle/HistoryToggle";

interface Props {
  eventKey: string;
  title: string;
  content: HistoryEntryData[];
}

const CustomAccordionEntry = ({ eventKey, title, content }: Props) => {
  return (
    <Card style={{ background: "#212529", fontSize: "1rem" }}>
      <Card.Header>
        <HistoryToggle eventKey={eventKey}>{title}</HistoryToggle>
      </Card.Header>
      <Accordion.Collapse eventKey={eventKey}>
        <Card.Body style={{ background: "black" }}>
          {content.map((data, index) => (
            <div key={index.toString()}>
              <p>
                <strong>{data.exercise}</strong>
              </p>
              {data.sets.map((set, index) => (
                <ul key={index.toString()}>
                  <li>{`Set: ${index + 1} Weight: ${set.weight} Reps: ${
                    set.reps
                  }`}</li>
                </ul>
              ))}
            </div>
          ))}
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  );
};

export default CustomAccordionEntry;
