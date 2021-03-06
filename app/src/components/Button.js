import React, { Component } from "react";
import axios from "axios";
import { properties } from "../properties";

class Button extends Component {
	constructor(props) {
		super(props);
		this.state = {
			on: false,
		};
	}

	componentDidMount() {
		setInterval(() => {
			if (!this.props.id) return;
			axios
				.get(
					`${properties.server_ip}/lights/getLightState?id=${this.props.id}`
				)
				.then((res) => {
					const data = res.data;
					this.setState({ on: data.state.attributes.on });
				})
				.catch((err) => {
					console.log(err);
				});
		}, 1500);
	}

	handleClick = () => {
		if (this.props.onClick) this.props.onClick();
		if (!this.props.route) {
			return;
		}
		const route = `${properties.server_ip}${this.props.route}`;

		axios
			.get(route)
			.then((res) => {
				if (this.props.info === "Disco") {
					this.setState({ on: !this.state.on });
				} else {
					this.setState({ on: res.data.state });
				}
			})
			.catch((err) => {
				console.log(err);
			});
	};

	render() {
		return (
			<div>
				<button
					className={`button ${
						this.state.on === true ? "is-primary " : ""
					} is-rounded`}
					onClick={this.handleClick}
				>
					{this.props.info}
				</button>
			</div>
		);
	}
}

export default Button;
