const express = require('express')
const pug = require('pug')
const path = require('path')
const app = express()

const light = require('./public/js/lights')
const weather = require('./public/js/weather')

app.set('view engine', 'pug')
app.use(express.static(path.join(__dirname, 'public')));

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

app.get('/weather', async(req, res) => {
    const data = await weather.getData('temperature')
    res.send(data)
})

app.get('/skytext', async(req, res) => {
    const data = await weather.getData('skytext')
    res.send(data)
})

app.get('/lightState', async (req, res) => {
    const data = await light.getLightState()
    res.send(data)
})

app.get('/dog', (req, res) => {
    light.toggleAllOff()
    light.setState(5, true)
    res.send(true)
})

app.listen(3000, () => console.log('Listening!'))