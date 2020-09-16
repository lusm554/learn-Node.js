const fs = require('fs')
const path = require('path')

let content = 'the content was here...'

// Async write file 
fs.writeFile(path.resolve('fs', 'content.txt'), content, (err) => {
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