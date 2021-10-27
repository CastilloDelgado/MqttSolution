const express = require("express")
const path = require("path")
const routes = require('./routes/index')
const app = express()
const {
    prgMqtt
} = require('./mqtt/cusMqtt')

// const mqtt = require('mqtt')
// const client = mqtt.connect('mqtt://colinashdlv.dyndns.org:8090')

// Settings HTTP
app.set('port', process.env.PORT || 3000)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// Settings MQTT
prgMqtt()
// client.options.username = 'marco'
// client.options.password = 'marco_cd'


// client.on('connect', function () {
//     client.subscribe('#', function (error) {
//         if (!error) {
//             console.log('Connection with Raspberry Succeded')
//         }
//     })
// })

// client.on('message', function (topic, message) {
//     console.log(topic.toString(), message.toString())
// })

// Middlewares
app.use((req, res, next) => {
    console.log(`${req.url} - ${req.method}`)
    next()
})
app.use(express.urlencoded({
    extended: false
}))
app.use(express.json())

// Routes
app.use(routes)

// Static Files
app.use(express.static(path.join(__dirname, 'public')))

// Start the HTTP Server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`)
})

// Start the MQTT Server