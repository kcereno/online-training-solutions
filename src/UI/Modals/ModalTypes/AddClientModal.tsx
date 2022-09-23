import React from "react";
import { useContext } from "react";
import { Accordion, Modal, Form, FloatingLabel, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { createId } from "../../../data/functions";
import useModal from "../../../hooks/useModal";
import { useTrainerActions } from "../../../hooks/useTrainerActions";
import UserContext from "../../../store/User/user-context";
import { Client } from "../../../data/interfaces";
import AccordianInput from "../../CustomAccordion/AccordionInput";
import { AccordionItem } from "../../CustomAccordion/AccordionItem";

export const AddClientModal = () => {
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
    notes,
  }: {
    [key: string]: any;
  }) => {
    const id = createId(firstName, lastName);

    const newClient: Client = {
      role: "CLIENT",
      info: {
        id,
        firstName,
        lastName,
        birthday: new Date(birthday),
        email,
        password: "password",
        profilePicture:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRieKfpLWxIJZGXslh9Zj05ykb3P_zU0dHUJQsVUJcdknc4-fS7zyjHIMfM30SGd52OS5w&usqp=CAU",
      },
      trainingPlan: {
        trainer: activeUser!.info.id,
        goal,
        program: [],
        history: [],
        notes,
      },
    };
    addClient(newClient);
    hideModal();
  };

  return (
    <>
      <Modal.Header>
        <Modal.Title>New Client Data</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          {/* Basic Info Section */}
          <Accordion defaultActiveKey="0">
            <AccordionItem eventKey="0" header="Basic Information">
              <AccordianInput
                label="First Name"
                controlId="firstName"
                inputConfig={{
                  type: "control",
                  controlType: "text",
                }}
                useFormData={useFormData}
              />
              <AccordianInput
                label="Last Name"
                controlId="lastName"
                inputConfig={{
                  type: "control",
                  controlType: "text",
                }}
                useFormData={useFormData}
              />
              <AccordianInput
                label="Email"
                controlId="email"
                inputConfig={{
                  type: "control",
                  controlType: "email",
                }}
                useFormData={useFormData}
              />
              <AccordianInput
                label="Birthday"
                controlId="birthday"
                inputConfig={{
                  type: "control",
                  controlType: "date",
                }}
                useFormData={useFormData}
              />
            </AccordionItem>
            <AccordionItem eventKey="2" header="Training Information">
              <FloatingLabel controlId="floatingSelect" label="Goal">
                <Form.Select
                  aria-label="text"
                  {...useFormData.register("goal", { required: true })}
                >
                  <option value="Build muscle">Build Muscle</option>
                  <option value="Lose fat">Lose Fat</option>
                  <option value="Gain strength">Gain Strength</option>
                  <option value="Body recomposition">Body Recomposition</option>
                  <option value="Sports specific">Sports Specific</option>
                </Form.Select>
              </FloatingLabel>

              <FloatingLabel
                className="mt-3"
                controlId="clientNotes"
                label="Notes"
              >
                <Form.Control
                  as="textarea"
                  style={{ height: "100px" }}
                  {...useFormData.register("notes", { required: false })}
                />
              </FloatingLabel>
            </AccordionItem>
          </Accordion>
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
