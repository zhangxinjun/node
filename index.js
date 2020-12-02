
// 导入node中的方法
const fs  = require("fs");

// const b =fs.openSync("hello.text","r");
// console.log(b)
// var buf = Buffer.alloc(20)
// 这是对文件的同步读取
// var content = fs.readFileSync('hello.text',{flag:"r",encoding:"utf-8"})
// console.log(content)
// fs.readFile("hello.text",{flag:"r",encoding:"utf-8"},function(err,data){
//   console.log(data)
// })
// 这是文件的异步写入 w是直接覆盖 a是在原有内容的基础上追加
// fs.writeFile("hello.text","这是写入的数据",{flag:"w",encoding:"utf-8"},function(){

// })
// 这是文件的异步读取
// fs.readFile("hello.text",{flag:"r",encoding:"utf-8"},function(err,data){
//   console.log(data)
// })
// 这是对文件异步写入的一个promise封装
function writefs (path,content) {
  new Promise(function(resove,reject){
    fs.writeFile(path,content,{flag:"a",encoding:"utf-8"},function(err){
      if(err){
        reject(err)
      }else{
        resove()
      }
    })
  })
}

async function writeList(){
  await writefs("hello.text","这是内容1")
  await writefs("hello.text","这是内容2")
}
writeList()