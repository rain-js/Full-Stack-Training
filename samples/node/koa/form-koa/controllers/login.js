const index = async (ctx, next) => {
    ctx.response.type = 'text/html'
    ctx.response.body = `<h1>Form Submit</h1>
        <form action="/signin" method="post">
            <p>name: <input name="name" value="koa"></p>
            <p>password: <input name="password" type="password"></p>
            <p><input type="submit" value="submit"></p>
        </form>
    `
}

const signin = async (ctx, next) => {
    const name = ctx.request.body.name || ''
    const password = ctx.request.body.password || ''

    ctx.response.type = 'text/html'
    if (name === 'koa' && password === 'admin') {
        ctx.response.body = '<h1>Sign Success!</h1>'
    } else {
        ctx.response.body = '<h1>Sign faild!</h1>'
    }
}

module.exports = {
    'GET /': index,
    'POST /signin': signin
}