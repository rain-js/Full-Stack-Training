'use strict'

var fs = require('fs')
var data = 'hello rain.'

fs.writeFile('./output.txt', data, function(error) {
    if (error) {
        console.log(error)
    }
})