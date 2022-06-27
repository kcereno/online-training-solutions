import { Modal } from "react-bootstrap";
import DeleteClientModal from "./ModalTypes/DeleteClientModal";
import { AddClientModal } from "./ModalTypes/AddClientModal";
import useModal from "../../hooks/useModal";

const Modals = () => {
  const {
    isShowing,
    hideModal,
    modalType: { clientId, type },
  } = useModal();

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
