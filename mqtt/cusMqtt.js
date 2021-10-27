const mqtt = require('mqtt')

function prgMqtt() {
    const options = {
        port: 8090,
        host: 'mqtt://colinashdlv.dyndns.org:8090',
        username: 'marco',
        password: 'marco_cd'
    }

    prgMqtt.client = mqtt.connect(options.host, options)

    prgMqtt.client.on("connect", () => {
        prgMqtt.client.subscribe("#", error => {
            if (!error) {
                console.log("Connected MQTT");
            }
        })
    })

    prgMqtt.client.on("message", (topic, message) => {
        console.log(`${topic} - ${message}`)
    })
}

exports.prgMqtt = prgMqtt