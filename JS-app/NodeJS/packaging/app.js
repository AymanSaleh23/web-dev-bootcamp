// console.log("HI From local JS-App")
// agrsuments = process.argv
// console.log("List of reveived argv")
// console.log("The First Arg (the NODE JS path)")
// console.log(agrsuments[0])
// console.log("The second Arg (the JS file)")

// console.log(agrsuments[1])
// for (let i = 2; i < agrsuments.length; i++) {
//     console.log(agrsuments[i])
// }
// console.log("------------------------------------------")
// const fileSys = require('fs');
// folderName = agrsuments[2] || 'Default Proj Name'
// filesName = agrsuments.slice(3)
// console.log(filesName)
// console.log("------------------------------------------")

// console.log(`Creating new folder Named: ${folderName}`)
// console.log(`${folderName}/`)
// fileSys.mkdirSync(`${folderName}`)
// console.log("------------------------------------------")

// console.log(`Files to be Created `)
// for (let createdFile of filesName) {
//     console.log(`${folderName}/${createdFile}`)
// }
// console.log("------------------------------------------")
// for (let createdFile of filesName) {
//     const pathOfFile = `${folderName}/${createdFile}`;
//     try {
//         fileSys.writeFileSync(`${pathOfFile}`, '')
//         console.log(`${pathOfFile} has been created`)
//     } catch (error) {
//         console.log(`${pathOfFile} can\'t be created`)
//         console.log(`${error}`)
//     }

// }
// const punycode = require('punycode');
const importedJokes = require('give-me-a-joke');
const importedColors = require('colors');

importedJokes.getRandomDadJoke(function (joke) {
    console.log(joke.green)
})

// const importedRandom = require('./anyCustomLib');
// console.log(importedRandom.any.green)
// console.log(importedRandom.randmoize(3))

const allAnimalsNames = require('../animals')
console.log(`These names and races are imported from Module :`)

console.log(allAnimalsNames.CATS)
console.log(allAnimalsNames.DOGS)
console.log(allAnimalsNames.RABBITS)
console.log(allAnimalsNames.LIONS)
console.log(allAnimalsNames.WOLVES)