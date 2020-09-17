const buf = Buffer.from('hi')

for(let elem of buf) {
    console.log(elem)
}

let bufForHelloWorld = Buffer.alloc(12)

bufForHelloWorld.write('Hello World!')
bufForHelloWorld.forEach(console.log)