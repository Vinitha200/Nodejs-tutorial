//http module
const http = require('http')

//basic
// const server = http.createServer((req,res)=>{
//     res.write("Welcome to home page")
//     res.end()
// })
// server.listen(5000)

//with request body
const server = http.createServer((req,res)=>{
    if(req.url==="/"){
        res.end("Welcome to home page")
    }
    else if(req.url==="/about"){
        res.end("Home page")
    }
       else {
        res.end("OOps !!!")
       } 
    
  
})
server.listen(5000)