const EventEmitter = require('events');
const eventEmitter = new EventEmitter()

let i = 1;

eventEmitter.on('test', (...args) => {
    console.log(`You are called the test ${i++} times, with the follow args ->`, args)
})

eventEmitter.emit('test', 1, 2, 3)
eventEmitter.removeAllListeners('test')
eventEmitter.emit('test', 4, 5, 6)