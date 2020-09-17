import React, { Component } from "react";
import "bulma/css/bulma.css";
import Button from "./components/Button";
import ButtonGroup from "./components/ButtonGroup";
import Footer from "./components/Footer";
import PlantInfo from "./components/PlantInfo";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			plant: false,
		};
	}

	render() {
		return (
			<div
				style={{
					//height: "100vh",
					height: "100%",
					padding: "0",
					margin: "0",
				}}
				className="has-background-dark"
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
					<Button
						info="Plant Info"
						onClick={() => this.setState({ plant: true })}
					/>
					<PlantInfo
						active={this.state.plant}
						onClose={() => this.setState({ plant: false })}
					/>
				</div>
				<Footer />
			</div>
		);
	}
}

export default App;
