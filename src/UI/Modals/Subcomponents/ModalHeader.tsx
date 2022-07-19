import React from "react";
import { Modal } from "react-bootstrap";

interface Props {
  title: string;
}

const ModalHeader = ({ title }: Props) => {
  return (
    <Modal.Header>
      <Modal.Title>{title}</Modal.Title>
    </Modal.Header>
  );
};

export default ModalHeader;
