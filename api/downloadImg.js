const fs = require('fs-extra')
const request = require('superagent')

request.get('http://i2.chuimg.com/e5b42524885b11e6b87c0242ac110003_650w_650h.jpg?imageView2/2/w/660/interlace/1/q/90').end((err, res) => {
    fs.writeFile("./logonew.jpg", res.body, "binary", function (err) {
        if (err) {
            console.log("保存失败");
        }
        console.log("保存成功");
    });
})