const Router = require('koa-router')
const api = new Router()

const { parseMd } = require('../core')

api.post('/', async ctx => {

  const { content } = ctx.request.body
  const md = parseMd(content)

  ctx.body = {
    md
  }
})

module.exports = api