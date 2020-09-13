// format specifier
console.log('My %s has %d years and %d month obj --> %o', 'cat', 2, 3.2, {name: 'Masya', age: 2})

// console.count
let x = 1
for(let i = 1; i <= 5; i++) {
    console.count('how many times?', x)
}

let arr = Array.from({ length: 10 }).fill('apple')

arr.forEach(num => {
    console.count(num)
})

// console.trace
const func1 = () => console.trace()
const func2 = () => func1()

func2()

// console.time / console.timeEnd
async function time() {
    console.time('checkTime')
    await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('done')
        }, 2000);
    })
    console.timeEnd('checkTime')
}

time()
