// node argvFromCmd.js a=2 b=3
// { a: '2', b: '3' }
let args = process.argv.slice(2)
let obj = {}

for(let elem of args) {
    let [key, value] = elem.split('=')
    console.log(`key: ${key} value: ${value}`)
    obj[key] = value
}

console.dir(obj)

// Second approach for parse arguments from cmd
// node argvFromCmd.js -a 2 -b 3
// { _: [], a: 2, b: 3 }
let args2 = require('minimist')(process.argv.slice(2))

console.log(args2)