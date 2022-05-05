import { createContext } from "react";
import { ModalContextInterface } from "../data/interfaces";

const ModalContext = createContext<ModalContextInterface>(
  {} as ModalContextInterface
);

export default ModalContext;
