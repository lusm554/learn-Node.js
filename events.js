const EventEmitter = require('events');
const CLI_interface = require('readline').Interface({
    input: process.stdin,
    output: process.stdout
})
const eventEmitter = new EventEmitter()

// let i = 1;

// eventEmitter.on('test', (...args) => {
//     console.log(`You are called the test ${i++} times, with the follow args ->`, args)
// })

// eventEmitter.emit('test', 1, 2, 3)
// eventEmitter.removeAllListeners('test')
// eventEmitter.emit('test', 4, 5, 6)

eventEmitter.on('hi', (name) => {
    console.log(`Hello ${name}`)
})

eventEmitter.on('hi', (name) => {
    console.log(`Bye ${name}`)
    CLI_interface.pause()
})

eventEmitter.prependListener('user', (name) => {
    CLI_interface.question('What is your name?', (name) => {
        eventEmitter.emit('hi', name)
    })
})

eventEmitter.emit('user')

// eventEmitter.eventNames()
// eventEmitter.listenerCount('hi')
// Return all listeners 
// eventEmitter.listeners('hi')