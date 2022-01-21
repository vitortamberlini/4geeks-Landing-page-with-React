import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

const NavBar = () => {
	return (
		<>
			<Navbar bg="dark" variant="dark">
				<Container>
					<Navbar.Brand href="#home">Start Bootstrap</Navbar.Brand>
					<Nav className="me-auto">
						<Nav.Link href="#home">Home</Nav.Link>
						<Nav.Link href="#features">About</Nav.Link>
						<Nav.Link href="#pricing">Service</Nav.Link>
						<Nav.Link href="#pricing">Contact</Nav.Link>
					</Nav>
				</Container>
			</Navbar>
		</>
	);
};

export default NavBar;
