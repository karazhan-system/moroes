const Router = require('koa-router')


const api = new Router({
  prefix: '/api'
})

api.get('/', async (ctx, next) => {
  try {
    const url = 'https://pic3.zhimg.com/v2-900207dd9b214536e02410930bb73e6d_b.jpg'
    const stream = await ctx.download(url)
    const format = ctx.getImgFormat(url)

    const result = await ctx.store.putStream('123.' + format, stream.data)
    console.log(result);
    ctx.body = result
  } catch (e) {
  	console.log(e)
  }
  
})

module.exports = api