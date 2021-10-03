const os = require('os')

const user = os.userInfo()

console.log(user)

console.log(`The System Uptime is ${os.uptime()} seconds`)

const currentOS = {
    name:os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeSpace : os.freemem()
}

console.log(currentOS) 