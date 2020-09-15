let done = false

const task = new Promise((resolve, reject) => {
    if(done) {
        resolve('task done')
    }
    else {
        reject('task not done yet')
    }
})


const isTaskDoneYet = () => {
    task
      .then(console.log)
      .catch(console.error)
      .finally(() => console.log('end of the thread'))
}

isTaskDoneYet()

const prom1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('prom1 done')
    }, 1000);
})

const prom2 = new Promise((resolve, reject) => {
    resolve('prom2 done')
})

Promise.all([prom1, prom2])
    .then(console.log, console.error)

Promise.race([prom1, prom2])
    .then(console.log, console.error)