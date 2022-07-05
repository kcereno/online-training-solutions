import { Modal } from "react-bootstrap";
import DeleteClientModal from "./ModalTypes/DeleteClientModal";
import { AddClientModal } from "./ModalTypes/AddClientModal";
import useModal from "../../hooks/useModal";
import { ModalTypeAlias } from "../../store/modal-context";

const Modals = () => {
  const {
    isShowing,
    hideModal,
    modalType: { clientId, type },
  } = useModal();

  const getModalContent = (modalType: ModalTypeAlias) => {
    const content = {
      DELETE_CLIENT: <DeleteClientModal clientId={clientId!} />,
      ADD_CLIENT: <AddClientModal />,
    };
    return content[modalType];
  };

  let modalContent = getModalContent(type);

  return (
    <Modal show={isShowing} onHide={hideModal} centered backdrop="static">
      {modalContent}
    </Modal>
  );
};

export default Modals;

// Title, Body, Footer
