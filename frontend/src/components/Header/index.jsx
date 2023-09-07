import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Header() {
	return (
		<div>
			<Navbar className="p-3" bg="dark" variant="dark" expand="lg">
				<Navbar.Brand href="#home" className="d-flex align-items-center ">
					<img src="./src/assets/filimin.svg" width="60px" alt="" srcset="" />
					<h1 className="mx-4 d-inline ">
            <span>Fili Media</span>
          </h1>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ml-auto">
          <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/post" className="nav-link">
              Post
            </Link>
            <Link to="/update" className="nav-link">
              Update
            </Link>
            <Link to="/delete" className="nav-link">
              Delete
            </Link>
            <Link to="/search" className="nav-link">
              Search
            </Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
}
