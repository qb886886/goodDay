# html模块

## 读取html文件并写入文件

```js
const server = require('http')
const fs = require('fs')

server.createServer((req, res)=>{
  // 因为读取的是html文件，所以这个数据类型需要写成'text/html'
  res.writeHead(200, { 'Content-Type': 'text/html' });
  // 读文件
  const fileData = fs.readFileSync('./index.html')
  // 写入文件
  res.write(fileData)
  res.end();
}).listen(3001, ()=>{
  console.log('http port 3001')
})
```

## 通过路由访问返回对应内容

```js
const server = require('http')
const fs = require('fs')
const url = require('url')
const mime = require('./mime')
const path = require('path')

server.createServer((req, res)=>{
  // 拿到当前路径下的文件名称
  const filePath = `.${url.parse(req.url).pathname}`

  // 判断当前文件是否存在，是读取当前文件
  if (fs.existsSync(filePath)) {
    const fileData = fs.readFileSync(filePath)
    // 获取文件后缀
    const fileExtName = mime[path.extname(filePath)]
    // 设置当前对应文件数据格式，根据mime取对应数据格式
    res.writeHead(200, {'Content-type': fileExtName})
    // 把当前文件写入浏览，注意的是：如果是.ico结尾文件会直接被下载到文本，不会直接现实预览
    res.write(fileData)
    // 结束
    res.end();
  } else {
    // 否则提示找不到
    res.end('404')
  }
}).listen(3001, ()=>{
  console.log('http port 3001')
})
```

```js
// 1、mime文件
module.exports = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.png': 'image/png',
  '.jpg': 'image/jpg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.ico': 'image/x-ico',
}
```
