const fs = require('fs')

fs.open(__dirname+'/text.txt', 'r', (err, fileDescriptor) => {
    console.log(fileDescriptor)
})

fs.stat(__dirname+'/text.txt', (err, stats) => {
    if(err) {
        console.error(err)
        return
    }

    console.log('is file:', stats.isFile())
    console.log('is directory:', stats.isDirectory())
    console.log('size:', stats.size)
})