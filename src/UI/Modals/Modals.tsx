import { Modal } from "react-bootstrap";
import useModal from "../../hooks/useModal";

const Modals = () => {
  const { isShowing, hideModal, modalContent } = useModal();

  return (
    <Modal show={isShowing} onHide={hideModal} centered backdrop="static">
      {modalContent}
    </Modal>
  );
};

export default Modals;
