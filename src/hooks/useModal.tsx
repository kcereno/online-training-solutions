import { useContext } from "react";
import ModalContext from "../store/Modal/modal-context";
import DeleteClientModal from "../UI/Modals/ModalTypes/DeleteClientModal";
import { AddClientModal } from "../UI/Modals/ModalTypes/AddClientModal";
import { AddExerciseModal } from "../UI/Modals/ModalTypes/AddExerciseModal";

const useModal = () => {
  const { setIsShowing, isShowing, modalContent, setModalContent } =
    useContext(ModalContext);

  const showAddExerciseModal = () => {
    setIsShowing(true);
    setModalContent(<AddExerciseModal />);
  };

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
    showAddExerciseModal,
  };
};

export default useModal;
