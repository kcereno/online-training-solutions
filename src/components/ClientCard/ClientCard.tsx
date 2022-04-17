import { Card, ButtonGroup, DropdownButton, Dropdown } from "react-bootstrap";

import "./ClientCard.css";

type Props = {
  firstName: string;
  lastName: string;
  profilePicture: string;
};
export default function ClientCard(clientData: Props) {
  const { firstName, lastName, profilePicture } = clientData;

  const deleteButtonHandler = () => {
    console.log("clicked", firstName);
  };

  return (
    <Card className="text-center text-white card-container bg-dark mx-3 my-3">
      <Card.Img
        variant="top"
        className="profile-picture"
        src={profilePicture}
      />
      <Card.Title className="text-center mt-2">{`${firstName} ${lastName}`}</Card.Title>
      <Card.Body>
        <DropdownButton
          as={ButtonGroup}
          title="Actions"
          id="bg-nested-dropdown"
        >
          <Dropdown.Item eventKey="1">Open</Dropdown.Item>
          <Dropdown.Item eventKey="2">Edit</Dropdown.Item>
          <Dropdown.Item eventKey="3" onClick={deleteButtonHandler}>
            Delete
          </Dropdown.Item>
        </DropdownButton>
      </Card.Body>
    </Card>
  );
}

//props
