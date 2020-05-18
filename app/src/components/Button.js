import React, { Component } from "react";
import axios from "axios";

class Button extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.state = {
			on: false,
		};
	}

	componentDidMount() {
		setInterval(() => {
			if (!this.props.id) return;
			axios
				.get(
					`http://localhost:4000/lights/getLightState?id=${this.props.id}`
				)
				.then((res) => {
					const data = res.data;
					this.setState({ on: data.state.attributes.on });
				});
		}, 1000);
	}

	handleClick() {
		const route = this.props.route
			? this.props.route
			: `http://localhost:4000/lights/toggle?id=${this.props.id}`;

		axios
			.get(route)
			.then((res) => {
				console.log(res.data.state);
				this.setState({ on: res.data.state });
			})
			.catch((err) => {
				console.log(err);
			});
	}

	change(data) {
		this.setState({ on: data });
	}

	render() {
		return (
			<div>
				<button
					className={`button ${
						this.state.on === true ? "is-primary " : ""
					}`}
					onClick={this.handleClick}
				>
					{this.props.info}
				</button>
			</div>
		);
	}
}

export default Button;
