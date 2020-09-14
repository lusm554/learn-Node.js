const baz = () => console.log('baz')
const bar = () => console.log('bar')

const foo = () => {
    console.log('foo')
    setTimeout(() => {
        baz()
    }, 1000);
    new Promise((resolve, reject) => {
        resolve('Promise done')
    })
    .then(console.log)
    bar()
}

foo()

process.nextTick(() => {
    console.log('>>>>end of the sync operations<<<<')
    console.log('---->START ASYNC OPERATIONS')
})
