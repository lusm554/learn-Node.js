const path = require('path')

const text = '../fs/path.js'

console.log(path.dirname(text))
// File name with ext 
console.log(path.basename(text))
// Just file name
console.log(path.basename(text, path.extname(text)))
console.log(path.extname(text))