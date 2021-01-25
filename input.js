let readline = require('readline')
// 导入readline包
// 实例化接口对象
 let r1 = readline.createInterface({
  output:process.stdout,
  input:process.stdin
})
// 设置r1的提问事件
r1.question("今晚吃啥",function(answer){
  console.log("回答",answer)
  // 回答完后关闭
  r1.close()
})
// r1的关闭事件
r1.on("close",function(){
  process.exit(0)
})
console.log("测试")