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
const fs = require('./BuiltInModules/fsModule');

//http Module
const http = require('./BuiltInModules/HTTPModule/httpModule')

