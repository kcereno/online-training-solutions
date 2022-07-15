import { useContext } from "react";
import { Modal, Button } from "react-bootstrap";
import useModal from "../../../hooks/useModal";
import { useTrainerActions } from "../../../hooks/useTrainerActions";
import UserContext from "../../../store/user-context";

type PropTypes = {
  clientId: string;
};
export const DeleteClientModal = ({ clientId }: PropTypes) => {
  const { activeUser } = useContext(UserContext);
  const { deleteClient } = useTrainerActions();
  const { hideModal } = useModal();

  const handleConfirmDeleteClient = () => {
    deleteClient();
    hideModal();
  };

  return (
    <>
      <Modal.Header>
        <Modal.Title>Attention</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure you want to delete this client?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={hideModal}>
          Cancel
        </Button>
        <Button variant="danger" onClick={handleConfirmDeleteClient}>
          DELETE
        </Button>
      </Modal.Footer>
    </>
  );
};

export default DeleteClientModal;
