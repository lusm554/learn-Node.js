const fs = require('fs')
const path = require('path')
const app = require('express')()
const Stream = require('stream')

const readableStream = new Stream.Readable({
    read() {}
})
const writableStream = new Stream.Writable()

writableStream._write = (chunk, encoding, next) => {
    console.log(chunk.toString())
    next()
}

// writableStream.write('Hello!\n')

readableStream.pipe(writableStream)
// readableStream.on('readable', () => {
//     console.log(
//         readableStream.read().toString()
//     )
// })

readableStream.push('hi')


app.get('/data', (req, res) => {
    fs.readFile(path.resolve('test_http', 'data.txt'), (err, data) => {
        res.send(data)
    })
})

app.get('/stream', (req, res) => {
    const stream = fs.createReadStream(path.resolve('test_http', 'data.txt'))
    stream.pipe(res)
})

// app.listen(3000)
