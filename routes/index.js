const express = require('express')
const router = express.Router()
const {
    prgMqtt
} = require('../mqtt/cusMqtt')

router.get('/', (req, res) => {
    res.render('home')
})

// Create publish
router.post('/publish', (req, res, next) => {
    const {
        topic,
        message
    } = req.body
    console.log(`${topic} - ${message}`)
    prgMqtt.client.publish(topic, message)
})

module.exports = router