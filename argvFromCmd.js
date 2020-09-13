let args = process.argv.slice(2)
let obj = {}

for(let elem of args) {
    let [key, value] = elem.split('=')
    console.log(`key: ${key} value: ${value}`)
    obj[key] = value
}

console.dir(obj)