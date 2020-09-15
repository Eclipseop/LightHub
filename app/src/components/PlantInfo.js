import React, { Component } from "react";
import { properties } from "../properties";
import { get } from "axios";

class PlantInfo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			state1: 0,
			state2: 0,
		};
	}

	componentDidMount = () => {
		setInterval(() => {
			get(`${properties.waterpi_ip}`)
				.then((res) => {
					const data = res.data;
					this.setState({ state1: data["sensor1"] });
					this.setState({ state2: data["sensor2"] });
				})
				.catch((err) => {
					console.log(err);
				});
		}, 1000);
	};

	render() {
		return (
			<div className={`modal ${this.props.active ? "is-active " : ""}`}>
				<div className="modal-card">
					<header className="modal-card-head">
						<p className="modal-card-title">Plants</p>
						<button
							className="delete"
							aria-label="close"
							onClick={this.props.onClose}
						></button>
					</header>
					<section className="modal-card-body">
						<table className="table">
							<tbody>
								<tr>
									<th>Sensor</th>
									<th>Level</th>
								</tr>
								<tr>
									<td>Avery</td>
									<td>{this.state.state1}</td>
								</tr>
								<tr>
									<td>???</td>
									<td>{this.state.state2}</td>
								</tr>
							</tbody>
						</table>
					</section>
				</div>
			</div>
		);
	}
}

export default PlantInfo;
