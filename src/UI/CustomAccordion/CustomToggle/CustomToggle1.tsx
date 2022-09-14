import React from "react";
import { useAccordionButton } from "react-bootstrap";

interface Props {
  children: React.ReactNode;
  eventKey: string;
}

const CustomToggle1 = ({ children, eventKey }: Props) => {
  const decoratedOnClick = useAccordionButton(eventKey);

  return (
    <p
      style={{ marginTop: "auto", marginBottom: "auto" }}
      onClick={decoratedOnClick}
    >
      {children}
    </p>
  );
};

export default CustomToggle1;
