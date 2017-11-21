const koa = require('koa')
const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')

const app = new koa
const router = new Router

app.use(bodyParser())

router.get('/', async (ctx, next) => {
    ctx.response.type = 'text/html'
    ctx.response.body = `<h1>Form Submit</h1>
        <form action="/signin" method="post">
            <p>name: <input name="name" value="koa"></p>
            <p>password: <input name="password" type="password"></p>
            <p><input type="submit" value="submit"></p>
        </form>
    `
})

router.post('/signin', async (ctx, next) => {
    const name = ctx.request.body.name || ''
    const password = ctx.request.body.password || ''

    ctx.response.type = 'text/html'
    if (name === 'koa' && password === 'admin') {
        ctx.response.body = '<h1>Sign Success!</h1>'
    } else {
        ctx.response.body = '<h1>Sign faild!</h1>'
    }
})

app.use(router.routes())

app.listen(8080)



