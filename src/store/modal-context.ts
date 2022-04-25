import { createContext } from "react";

export interface ModalContentInterface {
  title: any;
  body: any;
  footer: any;
}

export interface ModalContextInterface {
  showModal: (content: ModalContentInterface) => void;
  hideModal: () => void;
  isShowing: boolean;
  modalContent: ModalContentInterface;
}

const ModalContext = createContext<ModalContextInterface>(
  {} as ModalContextInterface
);

export default ModalContext;
