import { useContext } from "react";
import { Modal, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import useModal from "../../../hooks/useModal";
import { useTrainerActions } from "../../../hooks/useTrainerActions";
import UserContext from "../../../store/User/user-context";

interface Props {
  clientToDeleteId: string;
}

export const DeleteClientModal = ({ clientToDeleteId }: Props) => {
  const { activeUser } = useContext(UserContext);
  const { hideModal } = useModal();
  const { deleteClient } = useTrainerActions();

  const navigate = useNavigate();

  const handleConfirmDeleteClient = () => {
    deleteClient(clientToDeleteId);
    hideModal();
    navigate(`/dashboard/${activeUser?.info.id}`);
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
