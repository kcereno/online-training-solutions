import React from "react";
import { Accordion } from "react-bootstrap";

type PropTypes = {
  eventKey: string;
  children: React.ReactNode;
  header: string;
};

export const AccordionItem = ({ eventKey, children, header }: PropTypes) => {
  return (
    <Accordion.Item eventKey={eventKey}>
      <Accordion.Header>{header}</Accordion.Header>
      <Accordion.Body>{children}</Accordion.Body>
    </Accordion.Item>
  );
};
