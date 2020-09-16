const fs = require('fs')
const path = require('path')

fs.readFile(path.resolve('fs', 'text.txt'), 'utf-8', (err, text) => {
    if(err) {
        console.error(err)
        return
    }
    console.log(text)
})