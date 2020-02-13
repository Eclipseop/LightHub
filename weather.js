var weather = require('weather-js')

module.exports = {
    getTemp: function(callback) {
        weather.find({ search: 'Grand Blanc, MI', degreeType: 'F' }, function(err, res) {
            callback(res[0].current.temperature)
        });
    },
    getSkytext: function(callback) {
        weather.find({ search: 'Grand Blanc, MI', degreeType: 'F' }, function(err, res) {
            callback(res[0].current.skytext)
        });
    }
}