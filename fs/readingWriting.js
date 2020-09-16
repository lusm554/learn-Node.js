const fs = require('fs')
const path = require('path')

// Async version 
fs.readFile(path.resolve('fs', 'text.txt'), 'utf-8', (err, text) => {
    if(err) {
        console.error(err)
        return
    }
    console.log(text)
})

//Sync version 
try {
    let text = fs.readFileSync(path.resolve('fs', 'text.txt'), 'utf-8')
    console.log(text)
} catch (error) {
    console.error(error)
}