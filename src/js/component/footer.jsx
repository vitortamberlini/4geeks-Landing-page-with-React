import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

const Footer = () => {
	return (
		<>
			<Navbar
				className="mt-auto"
				collapseOnSelect
				expand="lg"
				bg="dark"
				variant="dark">
				<Container className="justify-content-center">
					<Nav activeKey="/home">
						<Nav.Item>
							<Nav.Link disabled>
								Copyright @ Your website 2019
							</Nav.Link>
						</Nav.Item>
					</Nav>
				</Container>
			</Navbar>
		</>
	);
};

export default Footer;
