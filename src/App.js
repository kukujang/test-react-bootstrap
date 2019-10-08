import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row, Container } from "react-bootstrap";
import "./assets/scss/style.scss";

import PostList from "./components/post/PostList";

function App() {
	return (
		<div className="App">
			<Container>
				<Row>
					<Col>

            <PostList />

					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default App;
