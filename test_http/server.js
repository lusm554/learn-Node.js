const app = require('express')()
const https = require('https')
const fs = require('fs')

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
    key: fs.readFileSync('./server.key'),
    cert: fs.readFileSync('./server.crt')
}

https.createServer(options, app).listen(8080)