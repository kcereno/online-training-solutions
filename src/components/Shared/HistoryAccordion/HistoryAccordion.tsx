import { Accordion, Card, useAccordionButton } from "react-bootstrap";
import { HistoryEntry } from "../../../data/interfaces";

interface Props {
  history: HistoryEntry[];
}

const HistoryAccordion = ({ history }: Props) => {
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

  return (
    <Accordion defaultActiveKey="0">
      {history.map((HistoryEntry: HistoryEntry) => (
        <Card
          style={{ background: "#212529" }}
          key={HistoryEntry.date.toDateString()}
        >
          <Card.Header>
            <CustomToggle eventKey={HistoryEntry.date.toDateString()}>
              {HistoryEntry.date.toDateString()}
            </CustomToggle>
          </Card.Header>
          <Accordion.Collapse eventKey={HistoryEntry.date.toDateString()}>
            <Card.Body style={{ background: "black" }}>
              {HistoryEntry.data.map((data, index) => (
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
      ))}
    </Accordion>
  );
};

export default HistoryAccordion;
