const colorLib = require('./index')

const cmdArgv = process.argv;
console.log(cmdArgv)
if (cmdArgv.length === 5) {
    r = cmdArgv[2]
    g = cmdArgv[3]
    b = cmdArgv[4]
    let s = new colorLib.Color(r, g, b)
    console.log(s.hex())
    console.log(s.rgb())
    console.log(s)
}

else {
    console.log("Insufficient argument list")
}
