import React, { useState } from "react";
import ModalContext, {
  ModalContextInterface,
  ModalTypeInterface,
} from "./modal-context";

type PropTypes = {
  children?: React.ReactNode;
};

const ModalProvider = ({ children }: PropTypes) => {
  const [isShowing, setIsShowing] = useState(false);
  const [modalType, setModalType] = useState<ModalTypeInterface>(
    {} as ModalTypeInterface
  );

  const showDeleteClientModal = (clientId: string) => {
    setModalType({ type: "DELETE_CLIENT", clientId });
    setIsShowing(true);
  };

  const showAddClientModal = () => {
    setModalType({ type: "ADD_CLIENT" });
    setIsShowing(true);
  };

  const showModal = (modalType: any) => {
    setModalType(modalType);
    setIsShowing(true);
  };

  const hideModal = () => {
    setIsShowing(false);
  };

  const ModalContextValues: ModalContextInterface = {
    showModal,
    showDeleteClientModal,
    showAddClientModal,
    hideModal,
    isShowing,
    modalType,
  };

  return (
    <ModalContext.Provider value={ModalContextValues}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
