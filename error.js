const errObj = () => {
    throw new Error('Error from errObj function')
}

class ClassError extends Error {
    // do something...
}

try {
    throw errObj()
} catch (error) {
    // console.error(error)
}

try {
    throw ClassError() 
} catch (error) {
    // console.error(error)
}

process.on('uncaughtException', (err) => {
    console.error('There was an uncaught error', err)
    process.exit(1)
})

throw new Error('uncaughtException')