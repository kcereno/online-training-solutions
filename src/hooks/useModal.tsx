import { useContext } from "react";
import ModalContext from "../store/modal-context";
import DeleteClientModal from "../components/Modals/ModalTypes/DeleteClientModal";
import { AddClientModal } from "../components/Modals/ModalTypes/AddClientModal";


const useModal = () => {
  const { setIsShowing, isShowing, modalContent, setModalContent } =
    useContext(ModalContext);

  const showAddClientModal = () => {
    setIsShowing(true);
    setModalContent(<AddClientModal />);
  };
  const showDeleteClientModal = (clientId: string) => {
    setIsShowing(true);
    setModalContent(<DeleteClientModal clientToDeleteId={clientId} />);
  };
  const hideModal = () => {
    setIsShowing(false);
    setModalContent(null);
  };

  return {
    isShowing,
    hideModal,
    modalContent,
    showAddClientModal,
    showDeleteClientModal,
  };
};

export default useModal;
