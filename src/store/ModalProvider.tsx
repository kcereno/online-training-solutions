import React, { useState } from "react";
import ModalContext, { ModalContextInterface } from "./modal-context";

type PropTypes = {
  children?: React.ReactNode;
};

const ModalProvider = ({ children }: PropTypes) => {
  const [isShowing, setIsShowing] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<JSX.Element | null>(null);

  const ModalContextValues: ModalContextInterface = {
    isShowing,
    setIsShowing,
    modalContent,
    setModalContent,
  };

  return (
    <ModalContext.Provider value={ModalContextValues}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
