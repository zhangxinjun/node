let fs = require("fs")
// 实例化文件读取流对象
let rs = fs.createReadStream("hello.text",{flags:"r",encoding:"utf-8"})
// 读取的文件打开
rs.on("open",function(){
  console.log("读取的文件打开")
})
// 读取的文件关闭
rs.on("close",function(){
  console.log("读取结束")
})
// 读取的文件的单批次内容
rs.on("data",function(res){
  console.log(res)
})