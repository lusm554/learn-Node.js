const sum = (arg1, arg2) => console.log(arg1 + arg2)

setTimeout(sum, 1000, 1, 2)

let i = 1
const log = () => console.log('hi', i++)

let id = setInterval(log, 1000)

setTimeout(() => clearInterval(id), 5500)