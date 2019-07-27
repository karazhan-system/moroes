const Router = require('koa-router')
const api = new Router()

api.prefix('/api')

const markdown = require('./api.markdown')
const word = require('./api.word')

api.use('/markdown', markdown.routes(), markdown.allowedMethods())
api.use('/word', word.routes(), word.allowedMethods())

module.exports = api