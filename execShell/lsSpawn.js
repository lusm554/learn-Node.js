const { spawn } = require('child_process')

const ls = spawn('ls', ['..'])

ls.stdout.on('data', (data) => {
    // console.log(`stdout: ${data}`);
    console.log(data.toString())
})

ls.stderr.on('data', (data) => {
    console.log(`stderr: ${data}`);
})

ls.on('error', (error) => {
    console.error(error);
})

ls.on("close", code => {
    console.log(`child process exited with code ${code}`);
});