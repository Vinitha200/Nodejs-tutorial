//Main File

//imports
const names = require('./FirstModule/names')
const methodSayHi = require('./FirstModule/method')

//using the imported method and variables.
methodSayHi(names?.JOHN)
methodSayHi(names?.PETER)


//Alternative Syntax
const alternative_syntax = require('./AlternativeSyntax/alernativeSyntax')
console.log(alternative_syntax)

//Mind-Grenade
require('./MindGrenade/mindgrenade')

//Built-in Modules
//OS Module
const os = require('./BuiltInModules/osModule')

//FS Module
//const fs = require('./BuiltInModules/fsModule'); //umcmd to check the output

//http Module
const http = require('./BuiltInModules/HTTPModule/httpModule')

//NPM Commands

//First Package - lodash

//Share Code: using git hib and create gitignore to ignore node module.

//Event loop --- run node .\ImportantTopic\EventLoop.js to
                 // execute event loop separately to see outputs properly
//const Event_loop = require('./ImportantTopic/EventLoop')

//Async Pattern
//require('./ImportantTopic/Async_Pattern/Async_Pattern')

//Native Option -util
require('./ImportantTopic/Async_Pattern/NodeNativeOption')