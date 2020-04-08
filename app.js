const express = require('express')
const pug = require('pug')
const app = express()

const light = require('./lights')
const weather = require('./weather')

app.set('view engine', 'pug')
app.use(express.static('/public'))

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/toggleAllOn', (req, res) => {
    light.toggleAllOn()
    res.send('Yup')
})

app.get('/toggleAllOff', (req, res) => {
    light.toggleAllOff()
    res.send('Yup')
})

app.get('/toggle', (req, res) => {
    var lightId = req.query.id
    var result = light.toggle(lightId)
    res.send(result)
})

app.get('/weather', (req, res) => {
    function reply(content) {
        res.send(content)
    }
    weather.getTemp(reply)
})

app.get('/skytext', (req, res) => {
    function reply(content) {
        res.send(content)
    }
    weather.getSkytext(reply)
})

app.get('/lightState', (req, res) => {
    function reply(content) {
        res.send(content)
    }
    light.getLightState(reply)
})

app.get('/dog', (req, res) => {
    light.toggleAllOff()
    light.turnOn(5)
})

app.listen(3000, () => console.log('Listening!'))