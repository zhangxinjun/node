let http = require("http")
// 实例化http对象
let serve = http.createServer()
// 监听请求事件
serve.on("request",(req,res) => {
  // res.end("hello world")
  // 设置请求头
  res.setHeader("Content-Type","text/html; charset=UTF-8")
  // 根据不同的请求url路径返回不同的数据
  if(req.url == "/"){
    res.end("首页")
  }else if(req.url == "/gn"){
    res.end("国内")
  }else{
    res.end("404")
  }
})
// 监听端口号，默认80
serve.listen(3000,() => {
  console.log("启动成功")
})    