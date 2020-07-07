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
	console.log(`Setting disco to ${disco}`);
	if (!disco) {
		client.lights.getAll().then((lights) => {
			for (let light of lights) {
				light.hue = 41362;
				light.saturation = 89;
				client.lights.save(light);
			}
		});
	}
	res.send("re");
});

router.get("/update", (req, res) => {
	const { lightId, brightness, hue, sat } = req.query;
	console.log(req.query);
	client.lights
		.getById(lightId)
		.then((light) => {
			light.on = true;
			light.saturation = sat == 1 ? 255 : 0;

			light.brightness = brightness;

			const ratio = hue / 360;
			const weird_hue = Math.round(ratio * 65535);
			light.hue = weird_hue;

			client.lights.save(light);
			res.send(light);
		})
		.catch((err) => console.log(err));
});

let hue = 0;
setInterval(() => {
	if (!disco) return;
	client.lights.getAll().then((lights) => {
		for (let light of lights) {
			light.saturation = 254;
			if (hue + 300 > 65000) hue = 0;
			hue += 300;
			light.hue = hue;
			client.lights.save(light);
		}
	});
}, 1750);

module.exports = router;
