import { FloatingLabel, Form } from "react-bootstrap";

interface AccordianInputInterface {
  label: string;
  controlId: string;
  inputConfig: {
    type: string;
    controlType?: string;
    selectAriaLabel?: string;
    selectOptions?: any;
  };
  useFormData: {
    register: any;
    errors: any;
  };
}
const AccordianInput = ({
  label,
  controlId,
  inputConfig: { type, controlType, selectAriaLabel },
  useFormData,
}: AccordianInputInterface) => {
  let inputContent;
  if (type === "control") {
    inputContent = (
      <Form.Control
        type={controlType}
        {...useFormData.register(`${controlId}`, { required: true })}
      />
    );
  }
  if (type === "select") {
    inputContent = (
      <Form.Select
        aria-label={selectAriaLabel}
        {...useFormData.register("Goal", { required: true })}
      >
        <option>Build Muscle</option>
        <option>Lose Fat</option>
        <option>Gain Strength</option>
        <option>Body Recomposition</option>
        <option>Sports Specific</option>
      </Form.Select>
    );
  }

  return (
    <>
      <FloatingLabel label={label} controlId={controlId} className="mb-3">
        {inputContent}
        {useFormData.errors.hasOwnProperty(controlId) && (
          <span style={{ color: "red" }}>This field is required</span>
        )}
      </FloatingLabel>
    </>
  );
};
export default AccordianInput;
