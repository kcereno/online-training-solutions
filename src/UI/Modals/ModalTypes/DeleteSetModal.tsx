import React from "react";
import { Modal, Button } from "react-bootstrap";
import useClientActions from "../../../hooks/useClientActions";
import useModal from "../../../hooks/useModal";

interface Props {
  exercise: string;
  setIndex: number;
  date: Date;
}

const DeleteSetModal = ({ exercise, setIndex, date }: Props) => {
  const { hideModal } = useModal();
  const { deleteSetFromLog } = useClientActions();

  const handleConfirmDeleteSet = () => {
    deleteSetFromLog(exercise, setIndex, date);
    hideModal();
  };
  return (
    <>
      <Modal.Header>
        <Modal.Title>Attention</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure you want to delete this set?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={hideModal}>
          Cancel
        </Button>
        <Button variant="danger" onClick={handleConfirmDeleteSet}>
          DELETE
        </Button>
      </Modal.Footer>
    </>
  );
};

export default DeleteSetModal;
