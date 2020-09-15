const test = async () => {
    return 'test'
}

test().then(console.log)

const getError = async () => {
    throw new Error('Error from getError')
}

getError().then(console.log, console.error)