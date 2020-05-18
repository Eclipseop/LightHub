import React, { Component } from "react";
import Button from "./Button";

/*
function Buttons() {
	const data = {
		4: "Living Room Lamp",
		1: "Desk Lamp",
		2: "Hallway Lamp",
		5: "Bedroom Light",
		3: "Door Light",
	};
	
	const list = data.map((entry) => {
		console.log(entry);
		return <Button className="column" info="Living Room Lamp" id="4" />;
    });
    
}
*/

class ButtonGroup extends Component {
	render() {
		return (
			<div className="columns is-centered buttons is-normal">
				<Button className="column" info="Living Room Lamp" id="4" />
				<Button className="column" info="Desk Lamp" id="1" />
				<Button className="column" info="Hallway Light" id="2" />
				<Button className="column" info="Bedroom Light" id="5" />
				<Button className="column" info="Door Light" id="3" />
			</div>
		);
	}
}

export default ButtonGroup;
