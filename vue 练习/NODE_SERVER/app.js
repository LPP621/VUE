// 导入 http 内置模块
const http = require('http')

// 创建一个 http 服务器
const server = http.createServer()
// 监听 http 服务器的 request 请求
server.on('request',function(req,res){
    const url = req.url
    
})