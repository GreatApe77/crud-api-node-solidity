import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";
export default function Header() {
	return (
		<>
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
						<Nav.Link href="#home">Home</Nav.Link>
						<Nav.Link href="#post">Post</Nav.Link>
						<Nav.Link href="#update">Update</Nav.Link>
						<Nav.Link href="#delete">Delete</Nav.Link>
						<Nav.Link href="#search">Search</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</>
	);
}
