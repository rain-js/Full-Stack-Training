'use strict'

var fs = require('fs')
var url = require('url')
var path = require('path')
var http = require('http')

var log = console.log.bind(console)

var root = path.resolve(process.argv[2] || '.')

var server = http.createServer(function(request, response) {
    // URL 的 pathname
    var pathname = url.parse(request.url).pathname
    // 操作系统的本地文件路径
    var filepath = path.join(root, pathname)

    fs.stat(filepath, function(err, stats) {
        if (!err && stats.isFile()) {
            response.writeHead(200)
            fs.createReadStream(filepath).pipe(response)
        } else {
            response.writeHead(404)
            response.end('<h1>404 Not Found</h1>')
        }
    })
})

server.listen(8080)
log('Server is running at http://127.0.0.1:8080/')