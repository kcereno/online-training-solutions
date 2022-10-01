import React from "react";
import { useAccordionButton } from "react-bootstrap";
import "./HistoryToggle.scss";

interface Props {
  children: React.ReactNode;
  eventKey: string;
}

const HistoryToggle = ({ children, eventKey }: Props) => {
  const decoratedOnClick = useAccordionButton(eventKey);

  return (
    <p className="my-auto" onClick={decoratedOnClick}>
      {children}
    </p>
  );
};

export default HistoryToggle;
