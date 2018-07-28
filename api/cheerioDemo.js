const request = require('superagent')
const cheerio = require('cheerio')

request.get('https://m.xiachufang.com/category/40078/recent/?page=1').end((err, res) => {
    if (!err) {
        const $ = cheerio.load(res.text)
        const content = $('a.recipe-96-horizon .content .name')
        const len = content.length
        for (let i = 0; i < len; i++) {
            console.log(content[i].children[0].data)
        }
    }
})