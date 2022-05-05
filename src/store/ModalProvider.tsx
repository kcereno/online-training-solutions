import React, { useState } from "react";
import ModalContext from "./modal-context";
import {
  ModalTypeInterface,
  ModalContextInterface,
} from "../../src/data/interfaces";

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
