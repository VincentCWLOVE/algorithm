#  将csv文件转json数据，解决中文乱码

```javascript

var csv = require("csvtojson");
var path = require('path');
var iconv = require('iconv-lite');

var csvFilePath = path.join(__dirname, "阿里云-华南1A区.csv");

var fs = require('fs');

var contentText = fs.readFileSync(csvFilePath,{encoding:'binary'});


var buf = new Buffer(contentText, 'binary');
var csvString = iconv.decode(buf, 'GBK');

csv()
.fromString(csvString)
.subscribe((jsonObj)=>{
	console.log(jsonObj)
})

```