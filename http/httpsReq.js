// Makes all requests insecure
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0
const https = require('https')

// GET request
const get_options = {
    hostname: '127.0.0.1',
    port: 8080,
    path: '/something',
    method: 'GET'
}

const req = https.request(get_options, res => {
    console.log('Status code:', res.statusCode)

    res.on('data', d => {
        process.stdout.write(d)
    })
})

req.on('error', (err) => {
    console.error(err)
})

req.end()