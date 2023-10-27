
//To read 1 or more file
const { readFile } = require('fs')
const { resolve } = require('path')

const ReadFile = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, 'utf8', (err, data) => {
            if (err) {
                reject(err)
            }
            else {
                resolve(data)
            }
        })
    })
}
//Reading multiple files ImportantTopic\Data_Content\asyncpatten_content.txt(without async await)
ReadFile('ImportantTopic/Data_Content/asyncpatten_content.txt')
    .then((result) => {
        console.log(result)
    })
    .catch((err) => {
        console.log(err)
    })
    
ReadFile('ImportantTopic/Data_Content/asyncpattern_content1.txt')
    .then((result) => {
        console.log(result)
    })
    .catch((err) => {
        console.log(err)
    })

//Reading multiple files ImportantTopic\Data_Content\asyncpatten_content.txt(with async await)
const Start = async ()=>{
    try{
       const first = await ReadFile('ImportantTopic/Data_Content/asyncpatten_content.txt',)
       const second = await ReadFile('ImportantTopic/Data_Content/asyncpattern_content1.txt')
       console.log(first,second)
    }
    catch(err){
      console.log(err)
    }
}

Start()