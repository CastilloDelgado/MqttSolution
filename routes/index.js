const express = require('express')
const router = express.Router()
const {
    prgMqtt
} = require('../mqtt/cusMqtt')

router.get('/', (req, res) => {
    res.render('home')
})

router.post('/turnoff', (req, res) => {
    prgMqtt.client.publish('F767/led1', 'OFF')
    res.redirect('/')
})

router.post('/turnon', (req, res) => {
    prgMqtt.client.publish('F767/led1', 'ON')
    res.redirect('/')
})

module.exports = router