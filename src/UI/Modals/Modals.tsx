import { Modal } from "react-bootstrap";
import DeleteClientModal from "./ModalTypes/DeleteClientModal";
import { AddClientModal } from "./ModalTypes/AddClientModal";
import useModal from "../../hooks/useModal";
import { ModalType } from "../../store/modal-context";

const Modals = () => {
  const {
    isShowing,
    hideModal,
    modalType: { clientId, type },
  } = useModal();

  const getModalContent = (modalType: ModalType) => {
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


