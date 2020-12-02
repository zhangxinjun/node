let path = require("path")
let os = require("os")
// console.log(path)
let str = "http://nodejs.cn/api/fs.html?id=1"
// 解析当前字符串的后缀名
let info = path.extname(str)
// console.log(info)
// let info1 =path.resolve
// 获取当前执行环境的完整路径
// console.log(__dirname)
// 获取当前执行的文件名
// console.log(__filename)
// 获取电脑的cpu信息
console.log(os.cpus())