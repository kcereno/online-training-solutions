import ModalHeader from "../Subcomponents/ModalHeader";
import NewClientForm from "../../../components/Forms/NewClientForm";
import ModalContent from "../Subcomponents/ModalContent";

export const AddClientModal = () => {
  return (
    <>
      <ModalHeader title="New Client Data" />
      <ModalContent content={<NewClientForm />} />
    </>
  );
};
