import { Navbar, Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { UserType } from "../../../data/types";

interface Props {
  activeUser: UserType | null;
  logout: () => void;
}

const NavBarToggleMenu = ({ activeUser, logout }: Props) => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="respnsive-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link
            onClick={() => {
              navigate(`/dashboard/${activeUser?.info.id}`, { replace: true });
            }}
          >
            Clients
          </Nav.Link>
          <Nav.Link onClick={logout}>Log Out</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </>
  );
};

export default NavBarToggleMenu;
