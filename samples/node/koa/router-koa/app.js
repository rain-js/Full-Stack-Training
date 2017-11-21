const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa
const router = new Router

const log = console.log.bind(console)

app.use(async (ctx, next) => {
    log(`url: ${ctx.request.url} method: ${ctx.request.method}`)
    await next()

})

router.get('/', async (ctx, next) => {
    await next()
    ctx.response.type = 'text/html'
    ctx.response.body = '<h1>Index</h1>'
})

router.get('/hello/:name', async (ctx, next) => {
    await next()
    ctx.response.type = 'text/html'
    ctx.response.body = `<h1>Hello ${ctx.params.name}</h1>`
    // console.dir(ctx.params)
})

app.use(router.routes())

app.listen(8080)

log('app started at port 8080.')