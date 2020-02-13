let huejay = require('huejay')
let client = new huejay.Client({
    host: '192.168.1.2',
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
            })
    },
    toggleAllOff: function() {
        client.lights.getAll()
            .then(lights => {
                for (let light of lights) {
                    light.on = false;
                    client.lights.save(light);
                }
            })
    },
    toggle: function(id) {
        client.lights.getAll()
            .then(lights => {
                for (let light of lights) {
                    var idd = light.id;
                    if (idd == id) {
                        light.on = !light.on
                        client.lights.save(light)
                        return light.on
                    }
                }
            })
    }
}
