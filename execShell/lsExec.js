const { exec } = require('child_process')
const path = require('path')

function ls(dir) {
    let pathLs = dir ? path.resolve(dir) : ''

    exec(`ls ${pathLs}`, (error, stdout, stderr) => {
        if(error) {
            console.error(error)
            return
        }
        else if(stderr) {
            console.log(`stderr: ${stderr}`)
            return
        }
        console.log(stdout)
    })
}

ls('../../')