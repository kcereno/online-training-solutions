import React, { useState } from "react";
import ModalContext, {
  ModalContentInterface,
  ModalContextInterface,
} from "./modal-context";

type PropTypes = {
  children?: React.ReactNode;
};

const ModalProvider = ({ children }: PropTypes) => {
  const [isShowing, setIsShowing] = useState(false);
  const [modalContent, setModalContent] = useState<ModalContentInterface>(
    {} as ModalContentInterface
  );

  const showModal = (content: ModalContentInterface) => {
    setModalContent(content);
    setIsShowing(true);
  };

  const hideModal = () => {
    setIsShowing(false);
  };

  const ModalContextValues: ModalContextInterface = {
    showModal,
    hideModal,
    isShowing,
    modalContent,
  };

  return (
    <ModalContext.Provider value={ModalContextValues}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
