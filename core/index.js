const Turndown = require('turndown')
const jieba = require('nodejieba')

// 解析生成markdown文本
const parseMd = content => {
  const convertor = new Turndown()
  const md = convertor.turndown(content)
  return md
}

// 解析分词获取words
const parseWords = content => {
  const text = parseMd(content)
  const words = jieba.extract(text, 5)
  return words
}

module.exports = {
  parseMd,
  parseWords
}