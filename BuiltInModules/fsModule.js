const fs = require('fs');

//synchoronous
//read
const read = fs.readFileSync('BuiltInModules/content/content.txt',"utf8")
console.log(read)

//write
const write=fs.writeFileSync('BuiltInModules/content/contentWrite.txt',
                          `Here is the result of write copy the readdata ${read}`)

//asynchoronous
//read
const read_asyn = fs.readFile('BuiltInModules/content/content.txt','utf-8',
                  (err,data)=>{
                    if(err){
                        console.error(`Error in reading file:${err}`);
                    }
                    else{
                        console.log("Asynchoromnous Output  "+data);
                    }
                  })
//write
const write_asyn = fs.writeFile('BuiltInModules/content/contentWriteAsyn.txt',"First Asyn file",
                 (err,data)=>{
                    if(err){
                        console.error(`Error in writing file:${err}`);
                    }
                    else{
                        console.log("Successfully written to asynchornous file");
                    }
                 }
                 )

//I will take data from readfile and append in write file

const read_write = fs.readFile('BuiltInModules/content/content.txt','utf8',
                    (err,data)=>{
                        if(err){
                            console.error(`Error in reading file:${err}`);
                        }
                       
                            const readData = data
                          //pass this data to file
                          fs.writeFile('BuiltInModules/content/contentWriteAsyn.txt',
                          `Here is the result of write: ${readData}`,
                          {flag:'a'},
                          (err)=>{
                              if(err){
                                  console.error(`Error in appending file:${err}`);
                              }
                              else{
                                  console.log("Successfully written to asynchornous file");
                              }
                          })
                    }
                    )

//This is called CALLBACK HELL....