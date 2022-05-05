import { Modal, Button } from "react-bootstrap";
import { Trainer } from "../../data/classes";
import useUserContext from "../../hooks/useUserContext";
import useModal from "../../hooks/useModal";

const CustomModal = () => {
  const { isShowing, hideModal, modalType } = useModal();
  const { clientId, type } = modalType;

  const { activeUser } = useUserContext();

  const deleteClient = () => {
    if (activeUser instanceof Trainer) {
      activeUser.deleteClient(clientId!);
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
        <Button variant="danger" onClick={deleteClient}>
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
