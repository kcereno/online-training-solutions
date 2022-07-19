import React from "react";

interface Props {
  content: JSX.Element;
}
const ModalContent = ({ content }: Props) => {
  return <>{content}</>;
};

export default ModalContent;
