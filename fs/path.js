const path = require('path')

const text = '../fs/path.js'

console.log(path.dirname(text))
// File name with ext 
console.log(path.basename(text))
// Just file name
console.log(path.basename(text, path.extname(text)))
console.log(path.extname(text))

let name = 'Nikita'
console.log(
    path.join('..', 'users', name, 'text.txt')
)

console.log(
    path.resolve('text.txt')
)

let folder = 'someFolder'
console.log(
    path.resolve(folder, 'text.txt')
)

console.log(
    path.normalize('/users/who/../test.txt')
)