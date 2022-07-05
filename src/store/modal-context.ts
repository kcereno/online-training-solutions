import { createContext } from "react";

export type ModalType = "DELETE_CLIENT" | "ADD_CLIENT";

export interface ModalContextInterface {
  showModal: (modalType: ModalType) => void;
  showDeleteClientModal: (clientId: string) => void;
  showAddClientModal:()=>void
  hideModal: () => void;
  modalType: ModalTypeInterface;
  isShowing: boolean;
}

export interface ModalTypeInterface {
  type: ModalType;
  clientId?: string;
}

const ModalContext = createContext<ModalContextInterface>(
  {} as ModalContextInterface
);

export default ModalContext;
