const fs = require('fs')
const path = require('path')

let content = 'the content was here...'

// Async write file 
fs.writeFile(path.resolve('fs', 'content.txt'), content, { flag: 'a+'},(err) => {
    if(err) {
        console.error(err)
        return 
    }
    console.log('File written successfully')
})

// Sync write file 
try {
    fs.writeFileSync(path.resolve('fs', 'content.txt'), content)
} catch (error) {
    console.error(error)
}

let append = '\nsecond line...\n'

// async appendFile/sync appendFileSync
fs.appendFile(path.resolve('fs', 'content.txt'), append, (err) => {
    if(err) {
        console.log(err)
        return
    }
})