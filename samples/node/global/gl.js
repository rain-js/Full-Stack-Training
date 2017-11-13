var log = console.log.bind(console)

log(`current js file: ${__filename}`)

log(`current js dir: ${__dirname}`)

process.name = 'Sample Nodejs'

log(`arguments: ${JSON.stringify(process.argv)}`)

log(`cwd: ${process.cwd()}`)

var d = '/private/tmp'
if (process.platform === 'win32') {
    // 如果是Windows，切换到 C:\Windows\System32
    d = 'C:\\Windows\\System32'
}

process.chdir(d)
log(`cwd: ${process.cwd()}`)

process.nextTick(function () {
    log('nextTick callback!')
})
log('nextTick was set!')

// 程序即将退出时的回调函数:
process.on('exit', function (code) {
    console.log('about to exit with code: ' + code);
})