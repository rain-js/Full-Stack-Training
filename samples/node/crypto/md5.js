'use strict'

var crypto = require('crypto')

// var hash = crypto.createHash('md5')
var hash = crypto.createHash('sha1')

hash.update('hello, world!')
hash.update('hello, nodejs!')

console.log(hash.digest('hex'))