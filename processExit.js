const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('Hello World!')
})

const server = app.listen(8080, () => console.log('http://localhost:8080/') )

process.on('SIGTERM', () => {
    server.close(() => console.log('Process terminated'))
})
