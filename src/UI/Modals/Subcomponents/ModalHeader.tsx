import React from "react";
import { Modal } from "react-bootstrap";

type PropTypes = {
  title: string;
};

const ModalHeader = ({ title }: PropTypes) => {
  return (
    <Modal.Header>
      <Modal.Title>{title}</Modal.Title>
    </Modal.Header>
  );
};

export default ModalHeader;
