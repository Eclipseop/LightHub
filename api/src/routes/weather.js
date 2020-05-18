const express = require("express");
const router = express.Router();

const weather = require("weather-js");

function getData() {
	return new Promise((res, rej) => {
		weather.find(
			{ search: "Grand Blanc, MI", degreeType: "F" },
			(err, res1) => {
				if (err) return rej(err);
				return res(res1[0].current);
			}
		);
	});
}

router.get("/temp", async (req, res) => {
	const data = await getData();
	res.send(data.temperature);
});

router.get("/skytext", async (req, res) => {
	const data = await getData();
	res.send(data.skytext);
});

module.exports = router;
