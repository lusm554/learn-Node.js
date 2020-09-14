const baz = () => console.log('baz')
const bar = () => console.log('bar')

const foo = () => {
    console.log('foo')
    setTimeout(() => {
        baz()
    }, 0);
    new Promise((resolve, reject) => {
        resolve('Promise done')
    })
    .then(console.log)
    bar()
}

foo()