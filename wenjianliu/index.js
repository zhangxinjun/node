let fs = require("fs")
// 实例化文件流写入对象
let ws = fs.createWriteStream("hello.text", { flags: "w", encoding: "utf-8" })
console.log(ws)
// 文件流式写入
ws.write("hellowrold1", function (err) {
  if (err) {
    console.log("文件写入失败")
  } else {
    console.log("文件1写入成功")
  }

})
ws.write("hellowrold2", function (err) {
  if (err) {
    console.log("文件写入失败")
  } else {
    console.log("文件2写入成功")
  }

})
ws.write("hellowrold3", function (err) {
  if (err) {
    console.log("文件写入失败")
  } else {
    console.log("文件3写入成功")
  }

})
// 文件打开
ws.on("open", function () {
  console.log("文件打开")
})
// 文件关闭
ws.on("close", function () {
  console.log("文件关闭")
})
// 文件写入完成
ws.end(function () {
  console.log("文件写入关闭")
})