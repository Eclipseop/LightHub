const huejay = require("huejay");
const client = new huejay.Client({
	host: "192.168.1.10",
	username: "XqnFP8kAdqLaSud3e5friD8z9Co2Xf9hupvtRZcQ",
});

const express = require("express");
const router = express.Router();

function toggleAll(on) {
	client.lights.getAll().then((lights) => {
		for (let light of lights) {
			light.on = on;
			client.lights.save(light);
		}
		console.log(`Setting all light states to ${on}.`);
	});
}

router.get("/turnAllOn", (req, res) => {
	toggleAll(true);
	res.send({ success: true });
});

router.get("/turnAllOff", (req, res) => {
	toggleAll(false);
	res.send({ success: true });
});

router.get("/getLightState", (req, res) => {
	const id = req.query.id;
	client.lights
		.getAll()
		.then((lights) => {
			for (let light of lights) {
				if (light.id != id) continue;
				res.json(light);
			}
		})
		.catch((err) => {
			res.send(err);
			console.log(err);
		});
});

router.get("/toggle", (req, res) => {
	const id = req.query.id;
	client.lights.getAll().then((lights) => {
		for (let light of lights) {
			if (light.id != id) continue;
			light.on = !light.on;
			console.log(`Setting light ${id} to ${light.on}`);
			client.lights.save(light);
			res.send({ state: light.on });
		}
	});
});

module.exports = router;
