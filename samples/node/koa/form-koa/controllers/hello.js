const hello = async (ctx, next) => {
    const name = ctx.params.name || ''

    ctx.response.type = 'text/html'
    ctx.response.body = `Hello ${name}`
}

module.exports = {
    'GET /hello/:name': hello
}