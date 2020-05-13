var weather = require("weather-js");

module.exports = {
	getData: (variable) => {
		return new Promise((result, rej) => {
			weather.find(
				{ search: "Grand Blanc, MI", degreeType: "F" },
				(err, res) => {
					if (err) {
						return rej(err);
					}
					const data = res[0].current;
					return result(data[variable]);
				}
			);
		});
	},
};
