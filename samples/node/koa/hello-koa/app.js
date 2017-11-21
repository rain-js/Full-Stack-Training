const Koa = require('koa')

const app = new Koa()
const log = console.log.bind(console)

app.use(async (context, next) => {
    log(`request.url = ${context.request.url}, request.method = ${context.request.method}`)
    await next()
})

app.use(async (context, next) => {
    const start = new Date().getTime()
    await next()
    const time = new Date().getTime() - start
    log(`time = ${time}ms`)
})

app.use(async (context, next) => {
    //await next()
    context.response.type = 'text/html'
    context.response.body = '<h1>hello Koa2</h1>'
})

app.listen(8080)

log(`app started at port 8080`)