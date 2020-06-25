import React, { Component } from "react";
import Button from "./Button";

function Buttons() {
	const data = [
		{
			id: 1,
			desc: "Desk Lamp"
		},
		{
			id: 2,
			desc: "Hallway Lamp"
		},
		{
			id: 3,
			desc: "Door Light"
		},
		{
			id: 4,
			desc: "Living Room Lamp"
		},
		{
			id: 5,
			desc: "Bedroom Light"
		}
	]

	return (
		<div className="columns is-centered buttons is-normal">
			{data.map((entry) =>
				<Button className="column" info={entry.desc} id={entry.id} />
			)}
		</div>
	)

}


class ButtonGroup extends Component {
	render() {
		return (
			<Buttons></Buttons>
		);
	}
}

export default ButtonGroup;
