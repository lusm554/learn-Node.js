const fs = require('fs')

fs.open(__dirname+'/text.txt', 'r', (err, fileDescriptor) => {
    console.log(fileDescriptor)
})

fs.stat(__dirname+'/text.txt', (err, stats) => {
    if(err) {
        console.error(err)
        return
    }

    console.log(stats.)
})