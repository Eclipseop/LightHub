let huejay = require('huejay')
let client = new huejay.Client({
    host: '192.168.1.10',
    username: 'XqnFP8kAdqLaSud3e5friD8z9Co2Xf9hupvtRZcQ'
});

module.exports = {
    toggleAllOn: function() {
        client.lights.getAll()
            .then(lights => {
                for (let light of lights) {
                    light.on = true;
                    client.lights.save(light);
                }
                console.log('Turning all lights on!')
            })
    },
    toggleAllOff: function() {
        client.lights.getAll()
            .then(lights => {
                for (let light of lights) {
                    light.on = false;
                    client.lights.save(light);
                }
                console.log('Turning all lights off!')
            })
    },
    toggle: function(id) {
        client.lights.getAll()
            .then(lights => {
                for (let light of lights) {
                    if (light.id == id) {
                        light.on = !light.on
                        console.log('Toggling light ' + id + '!')
                        client.lights.save(light)
                        return light.on
                    }
                }
            })
    },
    setState: function(id, state) {
        client.lights.getAll()
            .then(lights => {
                for (let light of lights) {
                    if (light.id != id) continue
                    light.on = state
                    console.log(`Turning light ${id} state to ${state}`)
                }
            })
    },
    getLightState: function(callback) {
        let json = {};
        client.lights.getAll()
            .then(lights => {
                for (let light of lights) {
                    json[light.id] = light.on;
                }
                callback(json)
            })
    }
}