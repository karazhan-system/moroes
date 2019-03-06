const Koa = require('koa')

const KoaLogger = require('koa-logger')
const KoaBodyparser = require('koa-bodyparser')
const KoaStatic = require('koa-static')

const api = require('./api')
const Oss = require('./middleware/mid.oss')
const Download = require('./middleware/mid.download')

const app = new Koa()

app.use(KoaLogger())
app.use(KoaBodyparser())
app.use(KoaStatic(__dirname + '/static'))
app.use(Oss())
app.use(Download())
app.use(api.routes())
app.use(api.allowedMethods())

app.listen(3000)