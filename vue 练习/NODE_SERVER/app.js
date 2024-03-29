// 导入 http 内置模块
const http = require('http')

// 创建一个 http 服务器
const server = http.createServer()
// 监听 http 服务器的 request 请求
server.on('request',function(req,res){
    const url = req.url
    
    if(url === '/getscript'){
        // 拼接一个合法的 JS 脚本，这里拼接的是一个方法的调用
        var scriptStr = 'show'
        // res.end 
        res.end(scriptStr)
    } else {
        res.end('404')
    }
})

// 指定端口号并启动服务器监听
server.listen(3000, function(){
    console.log('server listen at http://27.0.0.0:3000')
})