
const {readFile} = require('fs')

console.log("Start")

readFile('ImportantTopic/contentEvent.txt','utf8',(err,data)=>{
   if(err){
    console.log(err)
    return
   }
   console.log(data)
   console.log("Completed")

}) 
   // Display the "Next file" message here, after the file reading is complete.
   console.log("Next file");