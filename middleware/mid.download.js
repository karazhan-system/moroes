const Axios = require('axios')

const download = url => {
  return Axios({
    url,
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.143 Safari/537.36',
    },
    responseType: 'stream'
  })
}

const getImgFormat = url => {
  const regFormat = /\.(jpg|jpeg|png|gif)$/
  return url.match(regFormat) ? url.match(regFormat)[1] : 'jpg'
}

module.exports = () => {
  return async (ctx, next) => {
    ctx.download = download
    ctx.getImgFormat = getImgFormat
    await next()
  }
}