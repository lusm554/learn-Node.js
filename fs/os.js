const os = require('os')

console.log(
    String.raw`${os.EOL}`
)

console.log('Architecture:', os.arch() )
console.log('CPUs:', os.cpus() )
console.log('Free memory:', os.freemem() )
console.log('Home dir:', os.homedir() )
console.log('Host name:', os.hostname() )
console.log('Load average:', os.loadavg() )
console.log('networkInterfaces:', os.networkInterfaces() )
console.log('platform:', os.platform() )
console.log('user:', os.userInfo() )
console.log('uptime:', os.uptime() )