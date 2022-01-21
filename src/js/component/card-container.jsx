import React from "react";
import CustomCard from "./custom-card.jsx";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const CardContainer = () => {
	return (
		<>
			<Row xs={1} md={4} className="g-5">
				<Col>
					<CustomCard />
				</Col>
				<Col>
					<CustomCard />
				</Col>
				<Col>
					<CustomCard />
				</Col>
				<Col>
					<CustomCard />
				</Col>
			</Row>
		</>
	);
};

export default CardContainer;
