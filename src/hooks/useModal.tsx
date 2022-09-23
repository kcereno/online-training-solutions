import { useContext } from "react";
import ModalContext from "../store/Modal/modal-context";
import DeleteClientModal from "../UI/Modals/ModalTypes/DeleteClientModal";
import { AddClientModal } from "../UI/Modals/ModalTypes/AddClientModal";
import { AddExerciseModal } from "../UI/Modals/ModalTypes/AddExerciseModal";
import DeleteSetModal from "../UI/Modals/ModalTypes/DeleteSetModal";
import { AssignedExercise } from "../data/interfaces";
import EditAssignedExerciseModal from "../UI/Modals/ModalTypes/EditAssignedExerciseModal";

const useModal = () => {
  const { setIsShowing, isShowing, modalContent, setModalContent } =
    useContext(ModalContext);

  const showAddExerciseModal = (clientId: string) => {
    setIsShowing(true);
    setModalContent(<AddExerciseModal clientId={clientId} />);
  };

  const showAddClientModal = () => {
    setIsShowing(true);
    setModalContent(<AddClientModal />);
  };
  const showDeleteClientModal = (clientId: string) => {
    setIsShowing(true);
    setModalContent(<DeleteClientModal clientToDeleteId={clientId} />);
  };

  const showEditAssignedExerciseModal = (
    clientId: string,
    assignedExercise: AssignedExercise
  ) => {
    setIsShowing(true);
    setModalContent(
      <EditAssignedExerciseModal
        clientId={clientId}
        assignedExercise={assignedExercise}
      />
    );
  };

  const hideModal = () => {
    setIsShowing(false);
    setModalContent(null);
  };

  interface Props {
    exercise: string;
    setIndex: number;
    date: Date;
  }
  const showDeleteSetModal = ({ exercise, setIndex, date }: Props) => {
    setIsShowing(true);
    setModalContent(
      <DeleteSetModal exercise={exercise} setIndex={setIndex} date={date} />
    );
  };

  return {
    isShowing,
    hideModal,
    modalContent,
    showAddClientModal,
    showDeleteClientModal,
    showAddExerciseModal,
    showDeleteSetModal,
    showEditAssignedExerciseModal,
  };
};

export default useModal;
