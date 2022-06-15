import { useContext } from "react";
import ModalContext from "../../store/modal-context";
import { Modal } from "react-bootstrap";
import DeleteClientModal from "./ModalTypes/DeleteClientModal";
import { AddClientModal } from "./ModalTypes/AddClientModal";

const Modals = () => {
  const { isShowing, hideModal, modalType } = useContext(ModalContext);
  const { type, clientId } = modalType;

  const getModalContent = () => {
    const content = {
      DELETE_CLIENT: <DeleteClientModal clientId={clientId!} />,
      ADD_CLIENT: <AddClientModal />,
    };
    return content[type];
  };

  let modalContent = getModalContent();

  return (
    <Modal show={isShowing} onHide={hideModal} centered backdrop="static">
      {modalContent}
    </Modal>
  );
};

export default Modals;

// Title, Body, Footer
