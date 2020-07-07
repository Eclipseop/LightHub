import React, { Component } from "react";
import Button from "./Button";
import Popout from "./Popout";

class ButtonGroup extends Component {
	constructor(props) {
		super(props);
		//this.handleClick = this.handleClick.bind(this);
		this.state = {
			currentId: 0,
		};
	}

	data = [
		{
			id: 1,
			desc: "Desk Lamp",
		},
		{
			id: 2,
			desc: "Hallway Lamp",
		},
		{
			id: 3,
			desc: "Door Light",
		},
		{
			id: 4,
			desc: "Living Room Lamp",
		},
		{
			id: 5,
			desc: "Bedroom Light",
		},
	];

	/*
	handleClick(id) {
		console.log("ree");
		this.setState({ currentId: id });
	}
	*/
	handleClick = (id) => {
		console.log(`Setting current id to ${id}`);
		this.setState({ currentId: id });
	};

	render() {
		return (
			<div className="columns is-centered buttons is-normal">
				{this.data.map((entry) => (
					<div>
						<Button
							className="column"
							info={entry.desc}
							id={entry.id}
							onClick={() => this.handleClick(entry.id)}
						/>
					</div>
				))}
				<Popout
					id={this.state.currentId}
					onClose={() => this.setState({ currentId: 0 })}
				/>
			</div>
		);
	}
}

export default ButtonGroup;
