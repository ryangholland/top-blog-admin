import { Link } from "react-router";
import { Nav } from "react-bootstrap";

export default function Sidebar() {
  return (
    <div
      className="d-flex flex-column bg-dark text-light  p-3"
      style={{ width: "250px" }}
    >
      {/* Project Name */}
      <div
        className="mb-4"
        style={{ backgroundColor: "#343a40", height: "90px" }}
      >
        <h1 className="text-center">FastCasts</h1>
        <p className="text-center">Admin Dashboard</p>
      </div>

      {/* Navigation Links */}
      <Nav className="flex-column">
        <Nav.Link as={Link} to="/" className="text-light">
          Home
        </Nav.Link>
        <Nav.Link as={Link} to="/posts" className="text-light">
          Posts
        </Nav.Link>
        <Nav.Link as={Link} to="/tags" className="text-light">
          Tags
        </Nav.Link>

        <hr className="bg-secondary" />

        <Nav.Link as={Link} to="/settings" className="text-light">
          Settings
        </Nav.Link>
        <Nav.Link as={Link} to="/logout" className="text-light">
          Log Out
        </Nav.Link>
      </Nav>
    </div>
  );
}
