import { Navbar, Container, Dropdown } from "react-bootstrap";
import { GearFill } from "react-bootstrap-icons";

export default function Header({ pageTitle, userName, onLogout }) {
  return (
    <Navbar bg="dark" variant="dark" className="px-3">
      <Container fluid>
        {/* Left: Page Title */}
        <Navbar.Brand className="fs-2">{pageTitle}</Navbar.Brand>

        {/* Right: Settings Icon & User Dropdown */}
        <div className="d-flex align-items-center">
          {/* Settings Icon */}
          <GearFill size={20} className="text-light me-3" role="button" />

          {/* User Dropdown */}
          <Dropdown>
            <Dropdown.Toggle
              variant="dark"
              className="text-light border-0"
              id="user-dropdown"
            >
              Hello, {userName}!
            </Dropdown.Toggle>
            <Dropdown.Menu align="end">
              <Dropdown.Item onClick={onLogout}>Log Out</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </Container>
    </Navbar>
  );
}
