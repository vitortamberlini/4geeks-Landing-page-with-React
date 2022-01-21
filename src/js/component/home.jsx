import React from "react";
import NavBar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Container from "react-bootstrap/Container";
import Footer from "./footer.jsx";
import CardContainer from "./card-container.jsx";

const Home = () => {
	return (
		<>
			<NavBar />
			<Container className="my-3">
				<Jumbotron />
				<CardContainer />
			</Container>
			<Footer />
		</>
	);
};

export default Home;
