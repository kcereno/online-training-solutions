import React from "react";
import { Modal } from "react-bootstrap";

const EditModal = () => {
  return (
    <>
      <Modal.Header>
        <Modal.Title>Attention</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure you want to delete this client?</Modal.Body>
      <Modal.Footer></Modal.Footer>
    </>
  );
};

export default EditModal;
