var weather = require('weather-js')

module.exports = {
    getTemp: (callback) => {
        weather.find({ search: 'Grand Blanc, MI', degreeType: 'F' }, (err, res) => {
            if (res == undefined) {
                callback('0');
            } else {
                callback(res[0].current.temperature)
            }
        });
    },
    getSkytext: (callback) => {
        weather.find({ search: 'Grand Blanc, MI', degreeType: 'F' }, (err, res) => {
            if (res == undefined) {
                callback('0');
            } else {
                callback(res[0].current.skytext)
            }
        });
    }
}