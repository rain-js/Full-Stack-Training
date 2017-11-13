'use strict'

var fs = require('fs')

fs.readFile('./sample.txt', 'utf-8', function(error, data) {
    if (error) {
        console.log(error)
    } else {
        console.log(data)
    }
})