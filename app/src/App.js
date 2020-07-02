import React, { Component } from "react";
import "bulma/css/bulma.css";
import Button from "./components/Button";
import ButtonGroup from "./components/ButtonGroup";
import Footer from "./components/Footer";

class App extends Component {
	render() {
		return (
			<div
				style={{ height: "100vh" }}
				className="has-background-dark no-margin no-padding"
			>
				<div className="container">
					<br></br>
					<div className="columns is-centered buttons are-large">
						<Button
							className="column"
							info="All On"
							route="/lights/turnAllOn"
						/>
						<Button
							className="column"
							info="All Off"
							route="/lights/turnAllOff"
						/>
						<Button
							className="column"
							info="Disco"
							route="/lights/disco"
						/>
					</div>
					<br></br>
					<ButtonGroup />
				</div>
				<Footer />
			</div>
		);
	}
}

export default App;
