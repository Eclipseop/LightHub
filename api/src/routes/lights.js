const huejay = require("huejay");
const client = new huejay.Client({
	host: "192.168.10.29",
	username: "XqnFP8kAdqLaSud3e5friD8z9Co2Xf9hupvtRZcQ",
});

const express = require("express");
const router = express.Router();

function toggleAll(on) {
	client.lights
		.getAll()
		.then((lights) => {
			for (let light of lights) {
				light.on = on;
				client.lights.save(light);
			}
			console.log(`Setting all light states to ${on}.`);
		})
		.catch((err) => console.log(err));
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
		.getById(id)
		.then((light) => {
			res.json(light);
		})
		.catch((err) => {
			res.send(err);
			console.log(err);
		});
});

router.get("/toggle", (req, res) => {
	const id = req.query.id;
	client.lights
		.getById(id)
		.then((light) => {
			light.on = !light.on;
			console.log(`Setting light ${id} to ${light.on}`);
			client.lights.save(light);
			res.send({ state: light.on });
		})
		.catch((err) => console.log(err));
});

let disco = false;

router.get("/disco", (req, res) => {
	disco = !disco;
	res.send("re");
});

let hue = 0;
setInterval(() => {
	if (!disco) return;
	client.lights.getAll().then((lights) => {
		for (let light of lights) {
			light.saturation = 254;
			if (hue + 1000 > 65000) hue = 0;
			hue += 300;
			light.hue = hue;
			client.lights.save(light);
		}
	});
}, 1750);

module.exports = router;
