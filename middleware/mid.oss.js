const OSS = require('ali-oss')
const client = new OSS({
  region: 'oss-cn-shenzhen',
  accessKeyId: 'LTAIiPt4tG3ELCE0',
  accessKeySecret: 'uJOVBAZTRH8toibFOuyG3iefXKVPFH',
  bucket: 'karazhan',
  // internal: true,
})
module.exports = () => {
  return async (ctx, next) => {
    ctx.store = client
    await next()
  }
}