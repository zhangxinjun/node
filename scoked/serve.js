const express = require("express");
const SocketServer = require("ws").Server;

// 设置监听端口
const PORT = 3000;

// 创建express并监听端口
const server = express().listen(PORT, () => {
  console.log(`listien${PORT}`)
});

// 将express交给socketserver开启scoket服务
const wss = new SocketServer({ server });

// 当scoket从外部连接时执行
wss.on("connection", (ws) => {

  // 链接上了的提示
  console.log("client connection");
// 服务端主动向客户端定时发送内容
  const sendNowTime = setInterval(() => {
    ws.send(String(new Date()))
  },1000); 

  // // 对message监听，接收从客户端发送的消息
  // ws.on("message", (data) => {
  //   // 将客户端发送的消息原封不动的返回
  //   ws.send(data);
  // });

  // 当scoked链接关闭时执行
  ws.on("close", () => {
    console.log("close connection")
  })

});
