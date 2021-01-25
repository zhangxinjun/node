// 使用webscoket的地址向服务端开启链接
let ws = new WebSocket("ws://localhost:3000");

// 开启后的动作，指定在链接后执行的事件
ws.onopen = () => {
  console.log("open connection");
};

// 接收服务端发送过来的消息
ws.onmessage = (event) => {
  console.log(event);
};

// 指定在关闭后执行的事件
ws.onclose = () => {
  console.log("close connection")
}
console.log()