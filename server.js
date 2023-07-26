import http from "node:http"
import { WebSocketServer } from "ws"

const server = http.createServer()

const wss = new WebSocketServer({ server })

wss.on("connection", ws => {
  console.log("【服务器 WebSocket 连接已打开】")
  ws.on("error", console.error)

  ws.on("message", message => {
    console.log("服务器收到消息：" + message)
  })
  ws.send("你好，我是 WebSocketServer ")
  ws.on("close", () => {
    console.log("【客户端连接已关闭】")
  })
})

// server.on("request", (req, res) => {
//   res.writeHead(200, { "Content-Type": "text/plain" })
//   res.end("Bye Bye!")
// })
server.listen(8080, () => {
  console.log("服务已启动")
})
