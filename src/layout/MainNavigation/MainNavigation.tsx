import { Container, Navbar } from "react-bootstrap";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import NavLinks from "./NavLinks/NavLinks";
import { User } from "../../constants/UserList";

interface Props {
  activeUser: User | null;
}

export default function MainNavigation({ activeUser }: Props) {
  return (
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
      <Container fluid>
        <Navbar.Brand href="/">
          <FontAwesomeIcon icon={faDumbbell} className="px-2" />
          Online Training Solutions
        </Navbar.Brand>
      
        {activeUser ? <NavLinks /> : null} 
      </Container>
    </Navbar>
  );
}
