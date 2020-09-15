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

const get_req = https.request(get_options, res => {
    console.log('GET status code:', res.statusCode)

    res.on('data', d => {
        process.stdout.write(d)
    })
})

get_req.on('error', (err) => {
    console.error(err)
})

get_req.end()

// POST request
const data = JSON.stringify({
    username: 'Nikita',
    age: '~17'
})

const post_options = {
    hostname: '127.0.0.1',
    port: 8080,
    path: '/something',
    method: 'POST',
    headers: {
        'Content-type': 'application/json'
    }
}

const post_req = https.request(post_options, res => {
    console.log('POST request code:', res.statusCode)

    res.on('data', d => {
        process.stdout.write(d)
    })
})

post_req.on('error', err => {
    console.error(err)
})

post_req.write(data)
post_req.end()