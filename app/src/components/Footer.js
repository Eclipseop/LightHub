import React, { Component } from "react";
import axios from "axios";
import { properties } from "../properties";

class Footer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			temp: 0,
			skytext: "",
			water: 0,
		};
	}

	loadData = () => {
		axios
			.get(`${properties.server_ip}/weather/temp`)
			.then((res) => {
				this.setState({ temp: res.data });
			})
			.catch((err) => {
				console.log(err);
			});

		axios
			.get(`${properties.server_ip}/weather/skytext`)
			.then((res) => {
				this.setState({ skytext: res.data });
			})
			.catch((err) => {
				console.log(err);
			});
	};

	componentDidMount() {
		this.loadData();
		setInterval(this.loadData, 300000);
	}

	render() {
		return (
			<div
				className="columns"
				style={{ bottom: "0", position: "absolute", width: "100%" }}
			>
				<div className="column has-text-left">
					<h1 className="title has-text-white is-size-1">
						{this.state.temp}
					</h1>
					<h2 className="subtitle has-text-white is-size-3">
						{this.state.skytext}
					</h2>
				</div>
				<h2
					className="column subtitle has-text-white is-size-3 has-text-right"
					style={{
						marginTop: "auto",
						marginBottom: "10px",
						padding: "0px 0px 0px 0px",
					}}
				>
					{new Date().toLocaleTimeString([], { timeStyle: "short" })}
				</h2>
			</div>
		);
	}
}

export default Footer;
