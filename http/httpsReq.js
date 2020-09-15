const https = require('https')
const options = {
    hostname: '127.0.0.1',
    port: 8080,
    path: '/something',
    method: 'GET'
}

const req = https.request(options, res => {
    console.log('Status code:', res.statusCode)

    res.on('data', d => {
        process.stdout.write(d)
    })
})

req.on('error', (err) => {
    console.error(err)
})

req.end()