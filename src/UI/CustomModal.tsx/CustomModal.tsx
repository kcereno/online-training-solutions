import { useContext } from "react";
import { Modal, Button } from "react-bootstrap";
import ModalContext from "../../store/modal-context";
import UserContext from "../../store/user-context";
import { Trainer } from "../../data/classes";

const CustomModal = () => {
  const { isShowing, hideModal, modalType } = useContext(ModalContext);
  const { type, clientId } = modalType;

  const { activeUser } = useContext(UserContext);

  const handleConfirmDeletClient = () => {
    if (activeUser instanceof Trainer && clientId) {
      activeUser.deleteClient(clientId);
    }
    hideModal();
  };

  let title, body, footer;

  if (type === "DELETE_CLIENT") {
    title = "Attention";
    body = "Are you sure you want to delete this client?";
    footer = (
      <>
        <Button variant="secondary" onClick={hideModal}>
          Cancel
        </Button>
        <Button variant="danger" onClick={handleConfirmDeletClient}>
          DELETE
        </Button>
      </>
    );
  }

  return (
    <Modal show={isShowing} onHide={hideModal} centered backdrop="static">
      <Modal.Header>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{body}</Modal.Body>
      <Modal.Footer>{footer}</Modal.Footer>
    </Modal>
  );
};

export default CustomModal;

// Title, Body, Footer
