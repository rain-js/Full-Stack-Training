'use strict'

var fs = require('fs')
var data = 'hello world.'

fs.writeFileSync('./output.txt', data)