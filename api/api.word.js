const Router = require('koa-router')
const api = new Router()

const { parseWords } = require('../core')

api.post('/', async ctx => {

  const { content } = ctx.request.body
  const words = parseWords(content)

  ctx.body = {
    words
  }
})

module.exports = api