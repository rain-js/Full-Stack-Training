'use strict'

var fs = require('fs')

try {
    var data = fs.readFileSync('./sample.txt', 'utf-8')    
    console.log(data)
} catch (error) {
    // ...
    console.log(error)
}