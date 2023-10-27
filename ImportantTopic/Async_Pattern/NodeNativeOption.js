const {readFile,writeFile} = require('fs').promises
const util = require('util')

//create promise using util
const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)

//Calling the promise in async await
// const Start = async ()=>{
//     try{

//     const first = await readFilePromise('ImportantTopic/Data_Content/asyncpatten_content.txt','utf8')
//     const second = await readFilePromise('ImportantTopic/Data_Content/asyncpattern_content1.txt','utf8')
//     await writeFilePromise('ImportantTopic/Data_Content/writeNativeOption.txt',
//                `I have created new write file added both read file ${first} ${second}`)
//     console.log(first)
//     console.log(second)

//     }catch(err){
//     console.log(err)
//     }
// }

// Start()

//Even we can omit util aswell by mentioning require('fs').promises in "fs module"(easer one)
const Start = async ()=>{
    try{

    const first = await readFile('ImportantTopic/Data_Content/asyncpatten_content.txt','utf8')
    const second = await readFile('ImportantTopic/Data_Content/asyncpattern_content1.txt','utf8')
    await writeFile('ImportantTopic/Data_Content/writeNativeOption.txt',
               `I have created new write file added both read file ${first} ${second}`,
               {flag:'a'})
    console.log(first)
    console.log(second)

    }catch(err){
    console.log(err)
    }
}

Start()