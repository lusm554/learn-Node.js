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