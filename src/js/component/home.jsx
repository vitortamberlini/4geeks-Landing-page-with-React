import React from "react";
import NavBar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Container from "react-bootstrap/Container";

const Home = () => {
	return (
		<>
			<NavBar />
			<Container>
				<Jumbotron />
			</Container>
		</>
	);
};

export default Home;
