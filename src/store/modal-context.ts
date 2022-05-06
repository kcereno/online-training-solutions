import { createContext } from "react";

export type ModalTypeAlias = "DELETE_CLIENT" | "ADD_CLIENT";

export interface ModalContextInterface {
  showModal: (modalType: ModalTypeAlias) => void;
  showDeleteClientModal: (clientId: string) => void;
  showAddClientModal:()=>void
  hideModal: () => void;
  modalType: ModalTypeInterface;
  isShowing: boolean;
}

export interface ModalTypeInterface {
  type: ModalTypeAlias;
  clientId?: string;
}

const ModalContext = createContext<ModalContextInterface>(
  {} as ModalContextInterface
);

export default ModalContext;
