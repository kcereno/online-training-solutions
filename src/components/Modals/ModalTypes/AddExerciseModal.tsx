import React from "react";
import { useContext } from "react";
import { Modal, Form, Button, FloatingLabel } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { createId } from "../../../data/functions";
import useModal from "../../../hooks/useModal";
import { useTrainerActions } from "../../../hooks/useTrainerActions";
import UserContext from "../../../store/User/user-context";

export const AddExerciseModal = () => {
  const { activeUser } = useContext(UserContext);
  const { addClient } = useTrainerActions();
  const { hideModal } = useModal();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const useFormData = { register, errors: errors };

  const confirmAddClient = ({
    firstName,
    lastName,
    birthday,
    email,
    goal,
  }: {
    [key: string]: any;
  }) => {
    const id = createId(firstName, lastName);

    const newClient: any = {
      role: "CLIENT",
      info: {
        id,
        firstName,
        lastName,
        birthday,
        email,
        password: "password",
        profilePicture:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRieKfpLWxIJZGXslh9Zj05ykb3P_zU0dHUJQsVUJcdknc4-fS7zyjHIMfM30SGd52OS5w&usqp=CAU",
      },
      trainingPlan: {
        // TODO Change to dynamic entry
        trainer: "kcereno89",
        goal,
        program: [],
        logs: [],
      },
    };
    addClient(newClient, activeUser!.info.id);
    hideModal();
  };

  return (
    <>
      <Modal.Header>
        <Modal.Title>New Exercise</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <FloatingLabel
            controlId="floatingExerciseName"
            label="Exercise Name"
            className="mb-3"
          >
            <Form.Control type="text" placeholder="Exercise Name" />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingTargetWeight"
            label="Target Weight"
            className="mb-3"
          >
            <Form.Control type="number" placeholder="225lbs" />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingTargetReps"
            label="Target Repetitions"
            className="mb-3"
          >
            <Form.Control type="number" placeholder="10" />
          </FloatingLabel>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={hideModal}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleSubmit(confirmAddClient)}>
          ADD
        </Button>
      </Modal.Footer>
    </>
  );
};
