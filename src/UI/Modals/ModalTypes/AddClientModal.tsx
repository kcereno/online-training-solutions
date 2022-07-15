import {
  Modal,
  Button,
  Accordion,
  Form,
  FloatingLabel,
  Col,
  Row,
} from "react-bootstrap";
import useModal from "../../../hooks/useModal";
import { useForm } from "react-hook-form";
import AccordianInput from "../../../components/Accordian/AccordianInput";
import { AccordianItem } from "../../../components/Accordian/AccordianItem";

import { Client, Trainer, TrainingGoal } from "../../../data/interfaces";
import { createId } from "../../../data/functions";
import { useContext } from "react";
import UserContext from "../../../store/user-context";
import useDatabase from "../../../hooks/useDatabase";
import { useTrainerActions } from "../../../hooks/useTrainerActions";

export const AddClientModal = () => {
  const { activeUser } = useContext(UserContext);
  const { addClient, assignClient } = useTrainerActions();
  const { hideModal } = useModal();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const useFormData = { register, errors: errors };

  const handleAddClient = ({
    firstName,
    lastName,
    birthday,
    email,
    goal,
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
        birthday,
        email,
        password: "password",
        profilePicture:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRieKfpLWxIJZGXslh9Zj05ykb3P_zU0dHUJQsVUJcdknc4-fS7zyjHIMfM30SGd52OS5w&usqp=CAU",
      },
      trainingPlan: {
        goal,
      },
    };
    addClient(newClient);
    console.log("newClient", newClient);
    assignClient((activeUser as Trainer).info.id, id);
    hideModal();
  };

  return (
    <>
      <Modal.Header>
        <Modal.Title>New Client Information</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          {/* Basic Info Section */}
          <Accordion defaultActiveKey="0">
            <AccordianItem eventKey="0" header="Basic Information">
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
            </AccordianItem>
            {/* Training Info Section */}
            <AccordianItem eventKey="2" header="Training Information">
              <FloatingLabel controlId="floatingSelect" label="Goal">
                <Form.Select
                  aria-label="text"
                  {...useFormData.register("goal", { required: true })}
                >
                  <option value="BUILD MUSCLE">Build Muscle</option>
                  <option value="LOSE FAT">Lose Fat</option>
                  <option value="GAIN STRENGTH">Gain Strength</option>
                  <option value="BUILD MUSCLE">Body Recomposition</option>
                  <option value="SPORTS SPECIFIC">Sports Specific</option>
                </Form.Select>
              </FloatingLabel>

              {/* <div className="mt-3">
                <Form.Label>Target</Form.Label>
                <Row>
                  <Col>
                    <Form.Control
                      placeholder="Weight in lbs"
                      {...useFormData.register("targetWeight", {
                        required: true,
                      })}
                    />
                    {useFormData.errors.hasOwnProperty("targetWeight") && (
                      <span style={{ color: "red" }}>
                        This field is required
                      </span>
                    )}
                  </Col>
                  <Col>
                    <Form.Control
                      placeholder="Body Fat Percentage"
                      {...useFormData.register("targetBodyFatPercentage", {
                        required: true,
                      })}
                    />
                    {useFormData.errors.hasOwnProperty(
                      "targetBodyFatPercentage"
                    ) && (
                      <span style={{ color: "red" }}>
                        This field is required
                      </span>
                    )}
                  </Col>
                </Row>
              </div> */}
            </AccordianItem>
          </Accordion>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={hideModal}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleSubmit(handleAddClient)}>
          ADD
        </Button>
      </Modal.Footer>
    </>
  );
};

{
  /* <AccordianItem eventKey="1" header="Profile Picture">
              <AccordianInput
                label="Add a custom profile photo?"
                controlId="photoUrl"
                type="switch"
                useFormData={useFormData}
              />
            </AccordianItem> */
}

{
  /* <Accordion.Item eventKey="1">
              <Accordion.Header>Profile Picture</Accordion.Header>
              <Accordion.Body>
                <Form.Check
                  className="mb-3"
                  type="switch"
                  id="photoUrlSwitch"
                  label="Add a custom profile photo?"
                />

                <FloatingLabel
                  label="Photo URL"
                  controlId="photoUrl"
                  className="mb-3"
                >
                  <Form.Control type="url" />
                </FloatingLabel>
              </Accordion.Body>
            </Accordion.Item> */
}
