import React from "react";
import { useAccordionButton } from "react-bootstrap/AccordionButton";

const CustomToggle = ({
  eventKey,
  exercise,
  targets,
}: {
  eventKey: string;
  exercise: string;
  targets: { weight: number; reps: number; sets: number };
}) => {
  const decoratedOnClick = useAccordionButton(eventKey);
  return (
    <div className="d-flex justify-content-between" onClick={decoratedOnClick}>
      <div>{exercise}</div>
      <div>
        <strong>Target:</strong> {`${targets.sets} sets of ${targets.reps}`}
      </div>
    </div>
  );
};
export default CustomToggle;
