import React from "react";
import { Accordion, Card } from "react-bootstrap";
import { HistoryEntryData } from "../../data/interfaces";
import CustomToggle1 from "./CustomToggle/CustomToggle1";

interface Props {
  eventKey: string;
  title: string;
  content: HistoryEntryData[];
}

const CustomAccordionEntry = ({ eventKey, title, content }: Props) => {
  return (
    <Card style={{ background: "#212529" }}>
      <Card.Header>
        <CustomToggle1 eventKey={eventKey}>{title}</CustomToggle1>
      </Card.Header>
      <Accordion.Collapse eventKey={eventKey}>
        <Card.Body style={{ background: "black" }}>
          {content.map((data, index) => (
            <div key={index.toString()}>
              <p>{data.exercise}</p>
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
