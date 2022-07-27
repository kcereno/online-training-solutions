import { createContext } from "react";

export interface ModalContextInterface {
  isShowing: boolean;
  setIsShowing: React.Dispatch<React.SetStateAction<boolean>>;
  modalContent: JSX.Element | null;
  setModalContent: React.Dispatch<React.SetStateAction<JSX.Element | null>>;
}

const ModalContext = createContext<ModalContextInterface>(
  {} as ModalContextInterface
);

export default ModalContext;
