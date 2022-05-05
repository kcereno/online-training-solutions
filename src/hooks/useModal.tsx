import { useContext } from "react";
import ModalContext from "../store/modal-context";

const useModal = () => {
  const modalCtx = useContext(ModalContext);

  return {
    isShowing: modalCtx.isShowing,
    hideModal: modalCtx.hideModal,
    modalType: modalCtx.modalType,
  };
};

export default useModal;
