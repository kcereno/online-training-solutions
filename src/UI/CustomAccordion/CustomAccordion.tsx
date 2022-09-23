import { Accordion } from "react-bootstrap";
import { HistoryEntry } from "../../data/interfaces";
import CustomAccordionEntry from "./CustomAccordionEntry";

interface Props {
  elements: HistoryEntry[];
}

const CustomAccordion = ({ elements }: Props) => {
  return (
    <Accordion defaultActiveKey="0">
      {elements.map((element) => {
        return (
          <CustomAccordionEntry
            key={element.date.toDateString()}
            eventKey={element.date.toDateString()}
            title={element.date.toDateString()}
            content={element.data}
          />
        );
      })}
    </Accordion>
  );
};

export default CustomAccordion;
