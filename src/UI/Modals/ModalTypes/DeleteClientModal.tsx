import { Modal, Button } from "react-bootstrap";
import useDatabase from "../../../hooks/useDatabase";
import useModal from "../../../hooks/useModal";
import useUserContext from "../../../hooks/useUserContext";

type PropTypes = {
  clientId: string;
};
export const DeleteClientModal = ({ clientId }: PropTypes) => {
  const { hideModal } = useModal();
  const { activeUser } = useUserContext();
  const { deleteClient } = useDatabase();

  const handleConfirmDeleteClient = () => {
    deleteClient(activeUser!.info.id, clientId);
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
