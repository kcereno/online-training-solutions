import { useContext } from "react";
import { Modal } from "react-bootstrap";
import ModalContext from "../../store/modal-context";

const CustomModal = () => {
  const modalCtx = useContext(ModalContext);
  const { isShowing, hideModal, modalContent } = modalCtx;
  const { title, body, footer } = modalContent;

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
