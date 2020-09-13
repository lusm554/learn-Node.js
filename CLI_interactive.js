const rs = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

rs.question('What it your name ?\n', (name) => {
    console.log(`Hi, ${name}`)
})

rs.on('line', (line) => {
    if(line === 'end') {
        rs.close()
    }
    console.log('Received:', line)
})

rs.on('SIGINT', () => {
    rs.question('Are you sure you want to exit ? ', (response) => {
        if(response.match(/^y(es)?$/i)) rs.pause()
    })
})