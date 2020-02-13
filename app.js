const express = require('express')
const pug = require('pug')
const app = express()

const light = require('./lights')
const weather = require('./weather')

app.set('view engine', 'pug')
app.use(express.static('/public'))

app.get('/', function(req, res) {
    res.render('index')
})

app.get('/toggleAllOn', function(req, res) {
    light.toggleAllOn()
    res.send('Yup')
})

app.get('/toggleAllOff', function(req, res) {
    light.toggleAllOff()
    res.send('Yup')
})

app.get('/toggle', function(req, res) {
    var lightId = req.query.id
    console.log(lightId)
    var result = light.toggle(lightId)
    res.send(result)
})

app.get('/weather', function(req, res) {
    function reply(content) {
        res.send(content)
    }
    weather.getTemp(reply)
})

app.get('/skytext', function(req, res) {
    function reply(content) {
        res.send(content)
    }
    weather.getSkytext(reply)
})

app.listen(3000)