import React, { Component } from "react";
import bulmaSlider from "bulma-slider";
import "bulma-slider/dist/css/bulma-slider.min.css";
import { CirclePicker } from "react-color";
import { properties } from "../properties";
import { get } from "axios";

class Popout extends Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.state = {
			brightness: 50,
			color: {},
		};
	}

	componentDidMount() {
		bulmaSlider.attach();
	}

	handleChange(event) {
		this.setState({ brightness: event.target.value });
	}

	submit = () => {
		get(
			`${properties.server_ip}/lights/update
			?lightId=${this.props.id}
			&brightness=${this.state.brightness}
			&hue=${this.state.color.h}
			&sat=${this.state.color.s}`
		).catch((err) => console.log(err));

		this.props.onClose();
	};

	toggle = () => {
		get(
			`${properties.server_ip}/lights/toggle?id=${this.props.id}`
		).catch((err) => console.log(err));
	};

	render() {
		return (
			<div className={`modal ${this.props.id !== 0 ? "is-active " : ""}`}>
				<div className="modal-card">
					<header className="modal-card-head">
						<p className="modal-card-title">Adjust Light</p>
						<button
							className="delete"
							aria-label="close"
							onClick={this.props.onClose}
						></button>
					</header>
					<section className="modal-card-body">
						<input
							id="sliderWithValue"
							className="slider has-output is-fullwidth"
							step="1"
							min="0"
							max="100"
							type="range"
							onChange={this.handleChange}
						></input>
						<output htmlFor="sliderWithValue">50</output>
						<CirclePicker
							colors={[
								"#FFFFFF",
								"#FF0000",
								"#FF9E00",
								"#E4FF00",
								"#70FF00",
								"#00FF68",
								"#00FFD1",
								"#00CDFF",
								"#0080FF",
								"#0036FF",
								"#6100FF",
								"#CD00FF",
								"#FF00C5",
							]}
							width="550px"
							onChangeComplete={(hex) =>
								this.setState({ color: hex.hsl })
							}
						/>
					</section>
					<footer className="modal-card-foot">
						<div className="columns">
							<div className="column">
								<button
									className="button"
									onClick={this.submit}
								>
									Submit
								</button>
							</div>
							<div className="column">
								<button
									className="button"
									onClick={this.toggle}
								>
									Toggle
								</button>
							</div>
						</div>
					</footer>
				</div>
			</div>
		);
	}
}

export default Popout;
