const app = require('express')()
const https = require('https')
const fs = require('fs')
require('dotenv').config()

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/something', (req, res) => {
    let something = {
        room: {
            id: 1,
            name: 'Tips for learning Node.js'
        },
        users: [
            {
                id: 1,
                type: 'people',
                attributes: {
                    name: 'John',
                    age: 21,
                    gender: 'male'
                }
            }
        ]
    }

    res.json(something)
})

const options = {
    key: fs.readFileSync('./server.key', 'ascii'),
    cert: fs.readFileSync('./server.crt', 'ascii')
}

https.createServer(options, app).listen(8080)