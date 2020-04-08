var weather = require('weather-js')

function getData(variable, callback) {
    weather.find({ search: 'Grand Blanc, MI', degreeType: 'F' }, (err, res) => {
        const data = res[0].current
        callback(data[variable])
    })
}

module.exports = {
    getTemp: (callback) => {
        getData('temperature', callback)
    },
    getSkytext: (callback) => {
        getData('skytext', callback)
    }
}