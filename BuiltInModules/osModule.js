//Os built-in module
const os = require('os')

//userInfo
console.log(os.userInfo())

//howlong sysytem runing
console.log(os.uptime())

//some method in os builtinmodules
const OSmethods ={
    name:os.type(),
    release:os.release(),
    totalMemory:os.totalmem(),
    freeMemory:os.freemem()
}
console.log(OSmethods)