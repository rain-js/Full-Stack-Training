const koa = require('koa')
const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')
const fs = require('fs')

const app = new koa
const router = new Router

app.use(bodyParser())

const files = fs.readdirSync(`${__dirname}/controllers`)

const jsFile = files.filter((f) => {
    return f.endsWith('.js')
})

for (f of jsFile) {
    const mapping = require(`${__dirname}/controllers/${f}`)

    for (url in mapping) {
        if (url.startsWith('GET ')) {
            router.get(url.substring(4), mapping[url])
        } else if (url.startsWith('POST ')) {
            router.post(url.substring(5), mapping[url])
        }
    }
}

app.use(router.routes())

app.listen(8080)



